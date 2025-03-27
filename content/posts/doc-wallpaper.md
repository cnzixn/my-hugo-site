+++
date = '2025-02-28T12:50:06Z'
title = '壁纸 - 怎么制作？'
author = "Bny"
tags = ["资料"]
aliases = ["wallpaper"]
comments = false
+++


> 本文介绍如何新增壁纸文件。

---

### 主界面

左下角，新增两个按钮，用于切换壁纸。
{{< img "img/P4fBhA3wmieFr7R.webp" >}}

---

### 下载壁纸

> 从这里下载壁纸：[[王者荣耀壁纸]](/redirect?target=https://pvp.qq.com/web201605/wallpaper.shtml)

选一个喜欢的壁纸，选择 1920*1080 ，我下载的是虞姬，命名为“yuji.png”。(图片大小需根据手机屏幕去剪裁，否则会有拉伸变形)  

原图
{{< img "img/P4fBhA3wmieFr7R.webp" >}}

游戏内壁纸预览  
{{< img "img/tBLPGvNRxAsuQlq.webp" >}}

---

### 贴图转换

> 用这个制作贴图：[[饥荒动画工具]](/redirect?target=https://dont-starve-anim-tool.pages.dev/src/TexTool/)  

将下载的壁纸图片转换为“游戏贴图”，这里保存为“yuji.xml”和“yuji.tex”。
{{< img "img/mB69v8zgZonOEkG.webp" >}}

---

### 文件目录

``` shell
BM000  
├─ anim  
│  └─ wallpaper     # 动态壁纸  
│      ├─ ...  
│      └─ dst_menu_meta5.zip  
├─ images  
│  └─ wallpaper     # 静态壁纸  
│      ├─ ...  
│      ├─ yuji.xml    # 自制静态壁纸  
│      ├─ yuji.tex     # 自制静态壁纸  
│      ├─ bg_loading_loading_charlie.xml  
│      └─ bg_loading_loading_charlie.tex  
├─ scripts  
│  └─ wallpaper.lua  # 配置文件  
```

---

### 配置文件

``` lua
-- scripts/wallpaper.lua

local wallpaper = {

	{ anim="anim/wallpaper/dst_menu_meta5.zip", build="dst_menu_meta5", bank="dst_menu_meta5", fn=function(anim) anim:SetPosition(75, 0) anim:SetScale(0.85) anim:GetAnimState():Hide("winter") end }, -- 温蒂小恶魔沃尔特(隐藏冬季特效)

	{ atlas="images/wallpaper/bg_loading_loading_charlie.xml", image="loading_charlie.tex" },

	{ atlas="images/wallpaper/yuji.xml", image="yuji.tex" }, -- 自制静态壁纸

}

return wallpaper

```

---


### 动态壁纸

动态壁纸，需要制作动画。我不会画，就没学做动画。

代码，就只是将动画播放出来，调整一下位置和大小。

``` lua
-- scripts/screens/redux/multiplayermainscreen.lua
-- 25.02.28，联机版的主页动画，官方代码片段：

local function MakeMeta5Banner(self, banner_root, anim)
    anim:GetAnimState():SetBuild("dst_menu_meta5")
    anim:GetAnimState():SetBank("dst_menu_meta5")
    anim:GetAnimState():PlayAnimation("loop", true)
    anim:SetScale(.667)
    anim:SetPosition(75, 50)

    if not IsSpecialEventActive(SPECIAL_EVENTS.WINTERS_FEAST) then
        anim:GetAnimState():Hide("winter")
    end
end


```

---

{{< reward-button >}}

---
