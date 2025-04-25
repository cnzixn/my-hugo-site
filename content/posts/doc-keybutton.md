---
title: 按键 - 使用教程
date: 2025-04-18
author: Bny
tags:
  - 资料
aliases:
  - keybutton
comments: false
---
> 本文介绍如何新增按键功能。

- - -

### 游戏截图

游戏内，新增一列按钮模拟“按键操作”，支持组合按键。

![](/img/1000225236.jpg "第1页｜第2页")



### 文件目录

```shell
BM000  
├─ scripts  
│  └─ keybutton.lua  # 配置文件  
```

- - -

### 配置文件

```lua
-- scripts/keybutton.lua

-- 示例
local fn_key_a_up = function()
    local doer=GetPlayer()
    doer.components.talker:Say("按键 A")
    print("按键 A")
end
local fn_key_b_up = function()
    local doer=GetPlayer()
    doer.components.talker:Say("按键 B")
    print("按键 B")
end
local fn_key_c_up = function()
    local doer=GetPlayer()
    doer.components.talker:Say("按键 C")
    print("按键 C")
end
local fn_key_d_up = function()
    local doer=GetPlayer()
    if TheInput:IsKeyDown(KEY_CTRL) and (not TheInput:IsKeyDown(KEY_SHIFT)) then
        doer.components.talker:Say("按键 Ctrl+D")
        print("按键 Ctrl+D")
    end
end
local fn_key_e_up = function()
    local doer=GetPlayer()
    if TheInput:IsKeyDown(KEY_CTRL) and TheInput:IsKeyDown(KEY_SHIFT) then
        doer.components.talker:Say("按键 Ctrl+Shift+E")
        print("按键 Ctrl+Shift+E")
    end
end
TheInput:AddKeyUpHandler(KEY_A, fn_key_a_up)
TheInput:AddKeyUpHandler(KEY_B, fn_key_b_up)
TheInput:AddKeyUpHandler(KEY_C, fn_key_c_up)
TheInput:AddKeyUpHandler(KEY_D, fn_key_d_up)
TheInput:AddKeyUpHandler(KEY_E, fn_key_e_up)

local keybutton = {

	-- 模拟键盘：key1(按下)，key2(按下)，key(按下)，key(抬起)，key2(抬起)，key1(抬起)
	-- key: 必须，字符/键值，参考 scripts/constants.lua 文件。
	-- str: 可选，设置按钮上显示的“字符串”。
	-- key1: 可选，字符/键值，用于组合按键。
	-- key2: 可选，字符/键值，用于组合按键。

	{key="A"},
	{key="B"},
	{key="C"},
	{key="D", str="D", key1="CTRL"},
	{key=KEY_E, str="E", key1=KEY_CTRL, key2=KEY_SHIFT},

	{key=KEY_T, str="T"},
	{key=KEY_L, str="变身"},
	{key=KEY_R, str="跳跃"},
	{key=KEY_F11, str="查看"},
}

return keybutton

```

- - -

{{< reward-button >}}

- - -
