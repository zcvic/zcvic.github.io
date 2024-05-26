---
icon: print
date: 2024-05-26
---

# docker的使用

安装好docker后,尝试使用

```jsx
docker container run hello-world
```

结果报错了

![vmware_sPAX6jk90h.png](/assets/images/other/linux/dockerUse/vmware_sPAX6jk90h.png)

因为当前用户无权限

使用

```jsx
sudo docker container run hello-world
```

![vmware_uwUaqInP4R.png](/assets/images/other/linux/dockerUse/vmware_uwUaqInP4R.png)

正常执行

但是在日常使用时每次都添加sudo输入密码会很麻烦

解决办法：

将当前用户加入docker组

```jsx
sudo usermod -aG docker $USER
```

$USER为当前用户变量

执行后，注销重新登录或直接重启

再次执行

```jsx
docker container run hello-world
```

![vmware_ldeLChKGl7.png](/assets/images/other/linux/dockerUse/vmware_ldeLChKGl7.png)

正常执行

获取镜像列表
docker image ls