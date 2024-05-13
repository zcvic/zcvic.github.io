---
icon: print
---
# win11连接共享打印机出现错误0x00000709

win11连接网络共享打印机报错**0x00000709如下图所示：**

![explorer_plwWcDrv5k.png](/assets/images/other/error/explorer_plwWcDrv5k.png)

搜索了很多的解决方案：

1.**卸载更新**

Win10卸载有问题的补丁**KB5006667或KB5006670**；win11则退回到旧版本。

2.**添加注册表**

新建记事本文档，输入如下内容：

Windows Registry Editor Version 5.00

［HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print］

“RpcAuthnLevelPrivacyEnabled”=dword:00000000

［HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows NT\Printers\PointAndPrint］

“RestrictDriverInstallationToAdministrators”=dword:00000000

然后保存，修改文件扩展名为reg，比如1.reg，然后双击这个文件导入注册表即可解决问题。注意电脑需要重启才生效。

然而卸载更新比较麻烦，添加注册表无效果。

于是寻找起别的方法

使用win10连接添加远程共享打印机，会弹出输入windows用户名和密码（即windows凭据）

但使用win11，没有弹出填写凭据，而是直接报错0x00000709,

使用win10，填写凭据时，填入everyone或者guest，密码为空，就可以连接。

于是想到win11提前添加windows凭据，再去连接打印机

手动添加【Windows凭据】。控制面板→用户账户→Windows凭据→输入计算机名，用户名输guest，密码留空。（此为对方共享设置为电脑无密码保护的，设置了密码的请输入密码）

![explorer_JPzmm3XI8u.png](/assets/images/other/error/explorer_JPzmm3XI8u.png)

![explorer_Mem5opVECo.png](/assets/images/other/error/explorer_Mem5opVECo.png)

![explorer_fcWY3ZpNlo.png](/assets/images/other/error/explorer_fcWY3ZpNlo.png)

填写连接地址, 用户名填写guest,有设置密码的填写密码，没有则留空。

![explorer_cUKWRvUoW2.png](/assets/images/other/error/explorer_cUKWRvUoW2.png)

添加好凭据后，再次尝试连接打印机，连接成功

![explorer_Ryk8d2WRKk.png](/assets/images/other/error/explorer_Ryk8d2WRKk.png)