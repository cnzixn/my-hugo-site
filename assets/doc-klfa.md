---
title: KLFA - 解包/打包
date: 2025-07-18
author: bny
tags:
  - 资料
aliases:
  - klfa
---

![图片](/img/Image_1752847449499.jpg)

> 本文介绍饥荒 ios 版本中的 data.archive 解包/打包。

- - -

## 文件下载

> BM KLFA 25.07.18  
{{< pan "KLFA" >}}  

<small> **注意**：需要 Linux 环境，使用 lua 5.1 运行脚本。如需其他版本，请自行参考 [dont_starve.bms](https://aluigi.altervista.org/bms/dont_starve.bms) 写代码。</small>  


## 使用说明

　我一般用手机写(玩)代码， [Termux.apk](https://termux.com) 这个软件用的最多，这里推荐一下。

　吐槽：作为一个 ios 相关的教程，我竟然用 Android 的软件来操作。不要介意啦，它只是一个“工具”，你习惯用啥就用啥。

#### 安装Lua

``` bash
pkg i lua51 -y
```

#### 解包命令

``` bash
lua klfa.lua -u data.archive _data.archive
lua klfa.lua -u dlc0002.archive _dlc0002.archive
```

#### 打包命令

``` bash
lua klfa.lua -p _data.archive data.archive
lua klfa.lua -p _dlc0002.archive dlc0002.archive
```

#### 操作流程
- 购买并安装“饥荒”(请支持正版哦)
- 提取 IPA 文件，解压得到 .archive 文件
- .archive 文件 >> 解包 >> 修改 >> 打包
- 将改好的 .archive 文件打包回 IPA 文件
- 安装 IPA 文件 [👉🏻查看教程](https://ipa.store/install)
- `🔥推荐` [安装巨魔商店](/posts/trollstore)

## 详细文档

``` md

BM KLFA_LUA 25.07.18

  作者：樂卟嘶屬 | 交流群：QQ 614255348

  功能：
    用于处理饥荒（Dont Starve）游戏 iOS 版本的 .archive 格式资源文件，支持解包与打包操作。

  命令：
    -u <输入文件路径> <输出目录路径>
      功能：执行解包操作
      示例：`lua klfa.lua -u data.archive _data.archive`
      说明：将指定 .archive 格式文件解包至目标目录

    -p <源目录路径> <输出文件路径>
      功能：执行打包操作
      示例：`lua klfa.lua -p _dlc0002.archive dlc0002.archive`
      说明：将指定源目录下的资源文件打包为 .archive 格式输出文件

```



---

[注释]: {{<reward-button>}}

