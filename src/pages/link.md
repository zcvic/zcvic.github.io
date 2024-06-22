---
icon: links
pageInfo: ['Author', 'PageView']
---

# 友链

<div v-for="item in data">
<VPCard
  :title="item.name"
  :desc="item.desc"
  :link="item.link"
  :logo="item.avatar"
/>
</div>

<script setup>
import {data} from '@source/pages/data/friend.js'
</script>

::: tip 欢迎交换友情链接

在评论区按照如下格式留言:
::: code-tabs#shell

@tab yaml

```yaml
昵称: 网站或个人昵称
描述: 网站或个人简介
地址: 完整的主页地址
头像: 头像链接
```
@tab json

```json
{
    "name": "网站或个人昵称",
    "desc": "网站或个人简介",
    "link": "完整的主页地址",
    "avatar": "头像链接"
}
```

:::
然后将本站的信息添加到你的站点中







本站信息如下:

::: code-tabs#shell

@tab yaml

```yaml
昵称: 荒芜
描述: 记录分享一些笔记
地址: https://blog.zwymw.top/
头像: https://hwblog.zwymw.top/logo.png
```

@tab json

```json
{
    "name": "荒芜",
    "desc": "记录分享一些笔记",
    "link": "https://blog.zwymw.top/",
    "avatar": "https://hwblog.zwymw.top/logo.png"
}
```

:::

