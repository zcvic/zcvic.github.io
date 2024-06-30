---
icon: imu
date: 2024-06-22
category:
  - ros
---
# ubuntu20.04(xsens)imu的ros包下载和使用

## MT软件套下载

下载连接：[`https://www.movella.com/support/software-documentation`](https://www.movella.com/support/software-documentation)

 在MTi产品下，点击Linux的MT软件套件，然后会提示你填写信息

![MT软件套下载](/assets/images/other/ros/xsensRosUse/msedge_O8cva0k1Wc.png)

填写信息后，下载x64的MT软件套件

![下载x64的](/assets/images/other/ros/xsensRosUse/msedge_xo9YDGPxE8.png)

## 执行.sh脚本

解压刚刚下载的压缩包

![解压压缩包](/assets/images/other/ros/xsensRosUse/vmware_Say46MKaFm.png)

打开解压后的文件夹

![打开文件夹](/assets/images/other/ros/xsensRosUse/vmware_8Xom1v498p.png)

执行mtsdk _xxxx.sh脚本(版本可能不同)

打开终端输入

```bash
sudo ./mtsdk
```

按下Tab键会自动补全，回车执行

![执行脚本报错](/assets/images/other/ros/xsensRosUse/vmware_Lt68Jl5yy9.png)

可能出现以上报错，解决办法

执行：

```bash
sudo apt-get update 
sudo apt-get install  sharutils
```

再次执行

```bash
sudo ./mtsdk
```

按下Tab键会自动补全，回车执行，中途按下回车确认位置即可

![执行成功](/assets/images/other/ros/xsensRosUse/vmware_OPJjt0IFmX.png)

找到

```bash
/usr/local/xsens
```

下的xsens_ros_mti_driver

![ros包](/assets/images/other/ros/xsensRosUse/vmware_3PN6JIpXo8.png)

ros包

复制该包，新建工作空间，将该包放入工作空间的src目录下

![src目录](/assets/images/other/ros/xsensRosUse/vmware_eNEgNsYmNh.png)

```bash
cd /usr/local/xsens
mkdir -p /home/li/app/ws/imu_ws/src/
cp -r xsens_ros_mti_driver/ ~/app/ws/imu_ws/src/
```

在终端打开工作空间目录，编译lib/xspublic目录下的源代码。

```bash
cd ~/app/ws/imu_ws
pushd src/xsens_ros_mti_driver/lib/xspublic && make && popd
catkin_make
```

## 运行launch文件IMU节点数据

连接设备如果只有一个usb设备，直接找到yaml文件解开此处的注释即可

![port设置](/assets/images/other/ros/xsensRosUse/vmware_UZFTcfPgs9.png)

如果有多个则需要，设置别名（[点击查看教程](https://zcvic.github.io/posts/other/ros/rosSetUdev.html)）

我这里设置成了xsens_imu

![查看别名是否成功](/assets/images/other/ros/xsensRosUse/vmware_yllTj3O3nt.png)

![设置别名成功](/assets/images/other/ros/xsensRosUse/vmware_iFFqbKtOoy.png)

修改port为'/dev/xsens_imu'

![修改port](/assets/images/other/ros/xsensRosUse/vmware_JhiUYM745O.png)

打开终端启动ROS的核心组件

```bash
roscore
```

新建一个终端，打开工作空间目录

```bash
cd ~/app/ws/imu_ws

source devel/setup.bash
roslaunch xsens_mti_driver xsens_mti_node.launch
```

启动成功

![启动成功](/assets/images/other/ros/xsensRosUse/vmware_Kn9zGdYj2v.png)

查看所有话题

```bash
rostopic list
```

![话题列表](/assets/images/other/ros/xsensRosUse/vmware_kwlPnolexv.png)

查看数据

```bash
rostopic echo /imu/data
```

![数据](/assets/images/other/ros/xsensRosUse/vmware_JlPwG39hhg.png)