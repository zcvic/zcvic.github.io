---
icon: error-fill
date: 2024-05-28
category:
  - 问题解决
---
# 易语言支持库配置无法打开闪退问题

在安装[**易IDE视觉库**](https://bbs.125.la/forum.php?mod=viewthread&tid=14672340&highlight=%E7%BE%8E%E5%8C%96)时，需要打开易语言的支持库配置，启用该支持库

发现点击支持库配置后，易语言直接闪退了

![易语言界面](/assets/images/other/error/eLibOut/e_s9T2hJOgNJ.png)

解决方案

给e.exe添加保护

右键-此电脑-属性

![此电脑-属性](/assets/images/other/error/eLibOut/explorer_DR95nMkJoQ.png)

点击系统保护

![系统保护](/assets/images/other/error/eLibOut/ApplicationFrameHost_t0ABpuGIPF.png)

选择 高级-性能-设置

![高级-性能-设置](/assets/images/other/error/eLibOut/SystemPropertiesProtection_YQ38zo0q6G.png)

数据执行保护-添加

![数据执行保护-添加](/assets/images/other/error/eLibOut/SystemPropertiesProtection_Je6pHf7ZdC.png)

找到易语言安装目录的e.exe添加好

点击应用

再次尝试打开 易语言支持库配置 ，即可正常打开

需要启用易视觉库的话勾选后 点击确定 重启易语言即可

![易视觉库效果](/assets/images/other/error/eLibOut/e_CzgfxKlDHU.png)