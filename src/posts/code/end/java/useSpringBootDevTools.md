---
icon: devtool
date: 2024-06-09
category:
  - java
tag:
  - SpringBoot
---
# SpringBoot工具devtools的使用

## DevTools的概念

### **什么是DevTools？**

Spring Boot DevTools是一套工具集，用于提高Spring Boot应用程序的开发体验。它包含了一系列的功能，如快速重启、自动部署、热部署等。DevTools的目标是减少开发人员在开发和测试过程中的等待时间，提高开发效率。

### DevTools的特点

快速重启：DevTools可以快速重启Spring Boot应用程序，而不需要重新加载所有依赖项。
自动部署：DevTools可以自动部署应用程序到指定的目录，并启动应用程序。
热部署：DevTools支持热部署，允许开发者在应用程序运行时更新代码和资源，无需重启应用程序。

## **SpringBoot中集成DevTools**

### **添加DevTools依赖**

在项目的pom.xml文件中，添加Spring Boot DevTools依赖：

```jsx
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
        </dependency>
```

添加依赖后，还需要设置一下才能使用

### **DevTools的idea配置**

![设置](/assets/images/code/end/java/useSpringBootDevTools/idea64_Ky97IpxDUu.png)

启用自动构建项目

![自动构建项目](/assets/images/code/end/java/useSpringBootDevTools/idea64_94StCimeNc.png)

勾选后点击应用-确定即可

### **DevTools的配置**

DevTools通常会自动配置，但我们可以通过在application.properties或application.yml文件中添加一些属性来定制DevTools的行为。例如：

```jsx
# application.properties
spring.devtools.restart.additional-exclude=**/*.java
```

在上面的代码中，我们通过`spring.devtools.restart.additional-exclude`属性来排除一些文件，以避免在重启时重新编译这些文件。

### 使用DevTools功能

DevTools提供了多种功能，如快速重启、自动部署、热部署等。以下是一些常用的DevTools功能的使用方法：

- 快速重启：在IDE中，我们可以通过快捷键（如Ctrl+F12）或菜单（如"重新启动"）来快速重启应用程序。
- 自动部署：DevTools可以自动部署应用程序到指定的目录，并启动应用程序。我们可以在IDE中设置自动部署的目录，通常设置为build/libs目录。
- 热部署：DevTools支持热部署，允许开发者在应用程序运行时更新代码和资源，无需重启应用程序。热部署通常会自动启用，但我们可以通过在application.properties或application.yml文件中添加一些属性来禁用热部署。