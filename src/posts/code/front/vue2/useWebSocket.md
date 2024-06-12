---
icon: websocket
date: 2024-06-12
category:
  - 前端
  - vue2
tag:
  - websocket
---
# vue2使用websocket

vue代码

```jsx
<template>
    <div>
        <div style="display: flex;justify-content: center;align-items: center;">
            <button @click="btnClick">发送</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ws: null,
            WebSocketUrl: 'ws://localhost:7777/websocket/1',
        }
    },
    created() {
        this.handleConnect()
    },
    destroyed() {
        this.handleExit()
    },
    methods: {
        handleConnect() {
            this.ws = new WebSocket(this.WebSocketUrl)
            this.ws.onmessage = (e) => {
                console.log(e)
            }
            this.ws.onclose = () => {
                console.log('连接关闭')
            }
        },
        handleExit() {
            if (this.ws) {
                this.ws.close()
                this.ws = null
            }
        },
        btnClick() {
            this.ws.send('test')
        },
    }
}

</script>

<style scoped></style>
```

点击发送

![界面](/assets/images/code/front/vue2/useWebSocket/msedge_fgJuuKcqf0.png)

后端日志

![后端日志](/assets/images/code/front/vue2/useWebSocket/idea64_xIrvPdpSV4.png)