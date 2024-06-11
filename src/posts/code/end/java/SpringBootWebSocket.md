---
icon: websocket
date: 2024-06-11
category:
  - java
tag:
  - SpringBoot
  - websocket
---
# SpringBoot集成websocket并测试使用

## 集成websocket

引入依赖

```jsx
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-websocket</artifactId>
        </dependency>
```

创建配置文件`WebSocketConfig`

```jsx
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

@Configuration
public class WebSocketConfig {
    @Bean
    public ServerEndpointExporter serverEndpointExporter() {
        return new ServerEndpointExporter();
    }
}
```

创建`WebSocketService`

使用@Slf4j、log.info需要在pom.xml添加

```jsx
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>
```

`WebSocketService` ：

```jsx
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.concurrent.ConcurrentHashMap;

@ServerEndpoint("/websocket/{userId}")
@Component
@Slf4j
public class WebSocketService {

    /**
     * 静态变量，用来记录当前在线连接数。应该把它设计成线程安全的。
     */
    private static int onlineCount = 0;
    /**
     * concurrent包的线程安全Set，用来存放每个客户端对应的MyWebSocket对象。
     */
    private static ConcurrentHashMap<String, WebSocketService> webSocketMap = new ConcurrentHashMap<>();
    /**
     * 与某个客户端的连接会话，需要通过它来给客户端发送数据
     */
    private Session session;
    /**
     * 接收userId
     */
    private String userId = "";

    /**
     * 连接建立成功调用的方法
     */
    @OnOpen
    public void onOpen(Session session, @PathParam("userId") String userId) {
        this.session = session;
        this.userId = userId;
        if (webSocketMap.containsKey(userId)) {
            webSocketMap.remove(userId);
            webSocketMap.put(userId, this);
            //加入set中
        } else {
            webSocketMap.put(userId, this);
            //加入set中
            addOnlineCount();
            //在线数加1
        }

        log.info("用户:" + userId + "连接,当前在线人数为:" + getOnlineCount());
        try {
            sendMessage("连接成功");
        } catch (IOException e) {
            log.error("用户:" + userId + ",网络异常!!!!!!");
        }
    }

    /**
     * 连接关闭调用的方法
     */
    @OnClose
    public void onClose() {
        if (webSocketMap.containsKey(userId)) {
            webSocketMap.remove(userId);
            //从set中删除
            subOnlineCount();
        }
        log.info("用户:" + userId + "退出,当前在线人数为:" + getOnlineCount());
    }

    /**
     * 收到客户端消息后调用的方法
     *
     * @param message 客户端发送过来的消息
     */
    @OnMessage
    public void onMessage(String message, Session session) {
        log.info("用户:" + userId + ",报文:" + message);
    }

    @OnMessage
    public void onMessage(byte[] byteBuffer, Session session) {
        log.info("用户：" + userId + ",字节集：" + Arrays.toString(byteBuffer));
        String message = new String(byteBuffer, StandardCharsets.UTF_8);
        System.out.println(message);
    }

    @OnError
    public void onError(Session session, Throwable error) {
        log.error("用户:" + this.userId + "错误,原因:" + error.getMessage());
        error.printStackTrace();
    }

    /**
     * 实现服务器主动推送
     */
    public void sendMessage(String message) throws IOException {
        this.session.getBasicRemote().sendText(message);
    }

    /**
     * 发送自定义消息
     */
    public static void sendInfo(String message, @PathParam("userId") String userId) throws IOException {
        log.info("发送消息到:" + userId + "，报文:" + message);
        webSocketMap.get(userId).sendMessage(message);
    }

    public static synchronized int getOnlineCount() {
        return onlineCount;
    }

    public static synchronized void addOnlineCount() {
        WebSocketService.onlineCount++;
    }

    public static synchronized void subOnlineCount() {
        WebSocketService.onlineCount--;
    }
}
```

创建`DemoController`

```jsx
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import top.zwymw.test.service.WebSocketService;

import java.io.IOException;

@RestController
public class DemoController {

    @RequestMapping("/push/{toUserId}")
    public ResponseEntity<String> pushToWeb(String message, @PathVariable String toUserId) throws IOException {
        WebSocketService.sendInfo(message,toUserId);
        return ResponseEntity.ok("MSG SEND SUCCESS");
    }
}
```

## 测试

启动`Application` 开始测试

这里使用[在线测试工具](https://wstool.js.org/)

![在线测试工具](/assets/images/code/end/java/SpringBootWebSocket/msedge_if1fAl6ZP5.png)

用户1连接地址

```jsx
ws://127.0.0.1:8080/websocket/1
```

点击工具的开始连接

连接成功

输入内容，点击发送至服务端

![与服务端通信](/assets/images/code/end/java/SpringBootWebSocket/msedge_a7mdu8MsE7.png)

打开接口测试工具

```jsx
http://localhost:8080/push/1
```

添加参数message，发送请求

![发送请求](/assets/images/code/end/java/SpringBootWebSocket/msedge_jrJ96puBhx.png)

查看日志

![后端日志](/assets/images/code/end/java/SpringBootWebSocket/idea64_DCElSo3z1l.png)