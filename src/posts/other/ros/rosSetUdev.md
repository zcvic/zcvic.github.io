---
icon: host
date: 2024-06-22
category:
  - ros
---
# ros学习-设置权限和串口别名规则

使用多个传感器时，根据传感器插入的顺序，对应的串口名会发生变化，每次都手动调整配置文件的话会比较麻烦。可以通过规则文件设置别名来解决这个问题，同时可以设置自动赋予全部权限规则

## 解决权限问题

接入传感器，查看设备信息

```bash
 ls -l /dev/ttyUSB0
```

![设备信息](/assets/images/other/ros/rosSetUdev/vmware_UXutHu2uyk.png)

只有读写权限无执行权限

新建一个ttyUSB.sh脚本文件

```bash
echo 'KERNEL=="ttyUSB*", MODE:="0777", GROUP:="dialout"' >/etc/udev/rules.d/ttyUSB.rules

service udev reload
sleep 2
service udev restart
```

给脚本文件授权

```bash
sudo chmod 777 ttyUSB.sh
```

运行脚本

```bash
sudo sh ttyUSB.sh
```

重加载和重启使规则生效

```bash
sudo udevadm trigger
```

授权(将当前用户添加进dialout组):

```bash
sudo usermod -a -G dialout $USER
```

$USER为当前用户变量

再次查看设备信息

![设备信息](/assets/images/other/ros/rosSetUdev/vmware_XTmNJvWDLV.png)

已经拥有执行权限

设置这个规则后，以后只要是ttyUSB设备，都会自动赋予777全部权限

## 设置串口别名

查看设备udev信息及属性

```bash
udevadm info --attribute-walk --name=/dev/ttyUSB0
```

找到这几个属性

![设备属性](/assets/images/other/ros/rosSetUdev/vmware_Hh5Mo3zDPb.png)

编写wheeltec_udev.sh脚本

```bash
echo  'KERNEL=="ttyUSB*", ATTRS{idVendor}=="10c4", ATTRS{idProduct}=="ea60", ATTRS{serial}=="0003", GROUP:="dialout", SYMLINK+="wheeltec_FDI_IMU_GNSS"' >/etc/udev/rules.d/wheeltec_fdi_imu_gnss.rules

service udev reload
sleep 2
service udev restart
```

`KERNEL=="ttyUSB*"`: `KERNEL`是指设备的内核名称，`ttyUSB*`适用于所有以`ttyUSB`开头的设备，通常指的是通过USB连接的串行设备。
`ATTRS{idVendor}=="10c4", ATTRS{idProduct}=="ea60"`: 精确匹配特定厂商和产品的设备
`ATTRS{serial}=="0003"`: 设备序列号(`serial`)为`0003` 区分同一型号但具有不同序列号的多个设备。
`GROUP:="dialout"`:设备文件的所属组为`dialout`。属于`dialout`组的用户都将有权访问此设备
`SYMLINK+="wheeltec_FDI_IMU_GNSS"`:设置别名`wheeltec_FDI_IMU_GNSS`

给脚本文件授权

```bash
sudo chmod 777 wheeltec_udev.sh
```

运行脚本

```bash
sudo sh wheeltec_udev.sh
```

重加载和重启使规则生效

```bash
sudo udevadm trigger
```

![执行结果](/assets/images/other/ros/rosSetUdev/vmware_wMHqP2Z6X9.png)

别名设置成功