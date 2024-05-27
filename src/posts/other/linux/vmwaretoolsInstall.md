---
icon: tool
date: 2024-05-27
category:
  - linux
---

# vmware tools安装

vmware tools的作用

主机与虚拟机之间的文字复制粘贴、文件共享，同时可支持自由拖拽的功能，鼠标也可在虚拟机与主机之前自由移动（不用再按ctrl+alt），且虚拟机屏幕也可实现全屏化。

首先点击菜单栏的虚拟机-重新安装vmware tools

![vmware_fa0D3KIX1J.png](/assets/images/other/linux/vmwaretoolsInstall/vmware_fa0D3KIX1J.png)

会弹出一个vmware tools压缩包位置

![vmware_wMA0zjAGJW.png](/assets/images/other/linux/vmwaretoolsInstall/vmware_wMA0zjAGJW.png)

找到该压缩包，右键点击复制

![vmware_2mxtmBQc7b.png](/assets/images/other/linux/vmwaretoolsInstall/vmware_2mxtmBQc7b.png)

在主文件夹或者桌面新建一个文件夹，将压缩包复制到新建的文件夹里，双击解压（推荐）或打开终端使用命令解压

```jsx
tar -zxvf VMwareTools-xxxxx.tar.gz
```

xxxx内容不一定相同请自行替换(建议双击压缩包直接提取)

![vmware_w1U2ZeNYFg.png](/assets/images/other/linux/vmwaretoolsInstall/vmware_w1U2ZeNYFg.png)

打开解压的文件夹，打开终端

![vmware_3PysbDqZLY.png](/assets/images/other/linux/vmwaretoolsInstall/vmware_3PysbDqZLY.png)

先执行ls查看是否存在vmware-install.pl确定打开的终端位置是否正确。

执行以下命令：

```jsx
sudo ./vmware-install.pl
```

一路回车

如果是ubuntu18.04之前的版本一路回车即可安装成功

![vmware_P540giZgDw.png](/assets/images/other/linux/vmwaretoolsInstall/vmware_P540giZgDw.png)

我这里是20.04，所以出现了下面这个问题

```jsx
Setup is unable to find the "ifconfig" program on your machine. Please make sure it is installed. Do you want to specify the location of this program by hand? [yes]

What is the location of the "ifconfig" program on your machine?
```

无法找到ifconfig命令

![vmware_dbTwsOTDRr.png](/assets/images/other/linux/vmwaretoolsInstall/vmware_dbTwsOTDRr.png)

原因：

`ifconfig`是一个用于查看和配置网络设备的常用命令行工具，在一些较新的Linux发行版中，如Ubuntu 18.04及之后的版本，默认不再预装`ifconfig`，因为它已被`iproute2`套件中的`ip`命令所取代。

解决办法

1.安装包含`ifconfig`的包（通常是`net-tools`）

```jsx
sudo apt-get update

sudo apt-get install net-tools
```

![vmware_RsYSxpyPlA.png](/assets/images/other/linux/vmwaretoolsInstall/vmware_RsYSxpyPlA.png)

`net-tools` 安装后

再次打开vmware tools解压的文件夹

执行

```jsx
sudo ./vmware-install.pl
```

一路回车

安装成功

![vmware_oOCpcebwEZ.png](/assets/images/other/linux/vmwaretoolsInstall/vmware_oOCpcebwEZ.png)

重启虚拟机即可