---
icon: cross
date: 2024-06-03
category:
  - 问题解决
---

# 谷歌浏览器跨域问题解决

## 访问跨域的原因

访问跨域的原因：同源策略

同源策略是指在浏览器端出于安全考量，向服务端发起请求必须满足：协议相同、Host(ip)相同、端口相同的条件，否则访问将被禁止，不满足要求的访问也就被称为跨域访问。

虽然跨域访问被禁止之后，可以在一定程度上提高了应用的安全性，但也为开发带来了一定的麻烦。

## 跨域解决方案一（推荐）

1.首先关闭谷歌浏览器

2.创建一个目录，例如我在D盘创建ChromeDevUserData

3.在桌面选择谷歌浏览器右键 -> 属性 -> 快捷方式 -> 目标，添加

```jsx
 --disable-web-security --user-data-dir=D:\ChromeDevUserData 
```

(刚刚创建的目录)

![explorer_a0KJVMlKsQ.png](/assets/images/other/develop/cross/explorer_a0KJVMlKsQ.png)

4.打开谷歌浏览器验证，出现下图则表示修改成功

![chrome_pqG9Zrncpf.png](/assets/images/other/develop/cross/chrome_pqG9Zrncpf.png)

## 跨域解决方案二

1.谷歌浏览器 打开chrome://flags/#block-insecure-private-network-requests

![chrome_ooP1aSvEDj.png](/assets/images/other/develop/cross/chrome_ooP1aSvEDj.png)

2.将Block insecure private network requests. 设置为Disabled`

![chrome_JnOgM7SuQe.png](/assets/images/other/develop/cross/chrome_JnOgM7SuQe.png)

3.关闭谷歌浏览器重新打开网页 即可以解决问题。

## 跨域解决方案三

安装插件 Allow CORS_ Access-Control-Allow-Origin

![msedge_cteX5PuHFM.png](/assets/images/other/develop/cross/msedge_cteX5PuHFM.png)

点击图标开启即可

![xEI5GTacRp.png](/assets/images/other/develop/cross/xEI5GTacRp.png)

