---
icon: radar
date: 2024-06-16
category:
  - ros
---
# ros添加传感器（以激光雷达为例）

## **硬件准备**

### **雷达连接上位机**

![摄像头配置](/assets/images/other/ros/addSensor/connect.png)

### **确认当前的 USB 转串口终端并修改权限**

USB查看命令:

```bash
ll /dev/ttyUSB*
```

授权(将当前用户添加进dialout组，与arduino类似):

```bash
git clone https:*//github.com/slamtec/rplidar_ros*
```

重启使配置生效

## **软件安装**

进入工作空间的src目录，下载相关雷达驱动包，下载命令如下:

```bash
git clone https:*//github.com/slamtec/rplidar_ros*
```

返回工作空间，调用catkin_make编译，并source ./devel/setup.bash，为端口设置别名(将端口 ttyUSBX 映射到 rplidar):

```bash
cd src/rplidar_ros/scripts/

./create_udev_rules.sh
```

## **启动并测试**

### **rplidar.launch文件准备**

首先确认端口,编辑 rplidar.launch 文件

```xml
<launch>
	<node name="rplidarNode" pkg="rplidar_ros" type="rplidarNode" output="screen">
		<param name="serial_port" type="string" value="/dev/rplidar" />
		<param name="serial_baudrate" type="int" value="115200" />
		<!-- A1/A2 -->
		<!-- param name="serial_baudrate" type="int" value="256000" -->
		<!-- A3 -->
		<param name="frame_id" type="string" value="laser" />
		<param name="inverted" type="bool" value="false" />
		<param name="angle_compensate" type="bool" value="true" />
	</node>
</launch>

```
 \<node\>:定义ROS节点

· name="rplidarNode"：指定节点的名称为“rplidarNode”。

· pkg="rplidar_ros"：指明该节点所属的软件包是“rplidar_ros”，这是RPLIDAR在ROS中的驱动包。

· type="rplidarNode"：指定了节点的类型，即执行的可执行文件名为“rplidarNode”。

· output="screen"：表示该节点的标准输出（stdout）和标准错误（stderr）将被重定向到屏幕，便于在终端查看日志信息。

\<param\>:标签用于设置节点的参数

· serial_port="/dev/rplidar"：配置了RPLIDAR与计算机通信的串口名称。"/dev/rplidar"，这通常是Linux系统下RPLIDAR连接的默认串口号，需根据实际连接情况调整。

· serial_baudrate="115200"：设置串口的波特率，即数据传输速率。这里设置为115200，适用于RPLIDAR A1和A2型号。注释掉的部分（<!--A3 -->）指示如果使用RPLIDAR A3型号，可能需要将波特率改为256000。

· frame_id="laser"：定义了发布的扫描数据的坐标系ID，默认为"laser"。这个ID在ROS的TF（Transform）树中用来标识雷达数据的参考坐标系。

· inverted="false"：决定是否对扫描数据进行反转

· angle_compensate="true"：用于控制是否开启角度补偿功能

### **终端中执行 launch 文件**

终端工作空间下输入命令:

```bash
roslaunch rplidar_ros rplidar.launch
```

如果无异常，雷达开始旋转

### **rviz中订阅雷达相关消息**

启动 rviz，添加 LaserScan 插件：

![雷达显示](/assets/images/other/ros/addSensor/result.png)

注意: Fixed Frame 设置需要参考 rplidar.launch 中设置的 frame_id，Topic 一般设置为 /scan，Size 可以自由调整。