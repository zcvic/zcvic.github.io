---
icon: tool
date: 2024-06-13
category:
  - linux
---
# ubuntu安装使用nvm

nvm的github仓库地址为 [https://github.com/creationix/nvm](https://github.com/creationix/nvm)

终端执行以下命令，将自动进行nvm的安装：

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

::: warning
注意：这一步可能会报错，大部分原因是因为DNS解析被污染了，原因你懂的

`curl: (7) Failed to connect to raw.githubusercontent.com port 443`
:::


解决方法：

修改系统的hosts文件

```bash
sudo vi /etc/hosts
```

进入命令行模式

调整光标至最后一行

选择以下合适方式进入编辑模式

::: tip
a:在当前光标下一位开始编辑

i:在当前光标开始编辑

o:在当前光标的下一行开始编辑
:::

添加

```bash
199.232.96.133 raw.githubusercontent.com
```

按下esc后进入命令行模式，键盘输入 `:wq` 

::: tip
注意要推出编辑模式再输入  :也需要输入！
:::

再次运行

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

![安装成功](/assets/images/other/linux/installNvm/vmware_cHb9YaQgCh.png)

安装成功

查看所有可供安装的node版本：

```bash
nvm ls-remote
```

![版本查看](/assets/images/other/linux/installNvm/vmware_qw6J3yMrQS.png)

选择需要的版本进行安装

安装之前可设置一下从镜像源安装，安装更快

```bash
sudo vi  ~/.bashrc
```

添加

```bash
export NVM_NODEJS_ORG_MIRROR=http://npmmirror.com/mirrors/node/
```

执行下面的命令让上述设置生效

```bash
source ~/.bashrc
```

我这里安装18.19.0

```bash
nvm install 14.16.0
```

查看本地已安装的node：

```bash
nvm ls
```

使用需要的node版本：

```bash
nvm use v14.16.0
```

::: tip
安装和使用后面的版本号可以自己选择
:::

![测试](/assets/images/other/linux/installNvm/vmware_CScFVH48Jo.png)