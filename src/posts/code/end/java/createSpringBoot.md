---
icon: SpringBoot
date: 2024-06-08
category:
  - java
tag:
  - SpringBoot
---
# SpringBoot项目创建

## 在线创建

- 官方推荐方式： [spring initializr](https://start.spring.io/)
    - 选择开发语言，版本号，填写项目名，打包方式，指定 Java 版本等，点击 GENERATE，网站自动生成并下载 SpringBoot 项目
    - 解压下载的文件，用开发工具打开即可。

![spring initializr](/assets/images/code/end/java/createSpringBoot/msedge_ZUHHNquBvS.png)

## **通过Maven创建**

选择Maven

设置组ID和工件ID（可省略）

![Maven](/assets/images/code/end/java/createSpringBoot/idea64_gv48Qtz4Vi.png)

在pom.xml 文件中引入：

```jsx
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.7.18</version>
    </parent>
    
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
```

完整的pom.xml:

```jsx
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>top.zwymw</groupId>
    <artifactId>test</artifactId>
    <version>1.0-SNAPSHOT</version>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.7.18</version>
    </parent>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>

</project>
```

添加软件包和启动类

![软件包和启动类](/assets/images/code/end/java/createSpringBoot/idea64_XTHXwkOWDL.png)

编写启动类`TestApplication`

```jsx
package top.zwymw;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TestApplication {
    public static void main(String[] args) {
        SpringApplication.run(TestApplication.class, args);
    }
}
```

添加一个测试Controller`TestController`

![Controller](/assets/images/code/end/java/createSpringBoot/idea64_3JvPWBLSYq.png)

```jsx
package top.zwymw.test.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @RequestMapping("/test")
    public String test() {
        return "测试";
    }
}
```

启动`TestApplication` 中的`main` 方法

![启动](/assets/images/code/end/java/createSpringBoot/idea64_NT0EtpGEbA.png)

如上所示，启动成功，默认在8080端口

打开[localhost:8080/test](http://localhost:8080/test)

![启动成功](/assets/images/code/end/java/createSpringBoot/msedge_AXs5SktKWk.png)

创建成功