---
title: 按键 - 怎么使用？
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

游戏内，新增一列“快捷按钮”，用于模拟“按键操作”

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
    doer.components.talker:Say("按键 A 事件")
    print("按键 A 事件")
end
local fn_key_b_up = function()
    local doer=GetPlayer()
    doer.components.talker:Say("按键 B 事件")
    print("按键 B 事件")
end
local fn_key_c_up = function()
    local doer=GetPlayer()
    doer.components.talker:Say("按键 C 事件")
    print("按键 C 事件")
end
local fn_key_d_up = function()
    local doer=GetPlayer()
    doer.components.talker:Say("按键 D 事件")
    print("按键 D 事件")
end
local fn_key_e_up = function()
    local doer=GetPlayer()
    doer.components.talker:Say("按键 E 事件")
    print("按键 E 事件")
end
TheInput:AddKeyUpHandler(KEY_A, fn_key_a_up)
TheInput:AddKeyUpHandler(KEY_B, fn_key_b_up)
TheInput:AddKeyUpHandler(KEY_C, fn_key_c_up)
TheInput:AddKeyUpHandler(KEY_D, fn_key_d_up)
TheInput:AddKeyUpHandler(KEY_E, fn_key_e_up)



local keybutton = {
	-- key: 必须，字符/键值，参考 scripts/constants.lua 文件。
	-- str: 可选，设置按钮上显示的“字符串”。

	{key="A"},
	{key="B"},
	{key="C"},
	{key="d"},
	{key="e"},

	-- TMI
	{key=KEY_T, str="T"},

	-- 千年狐
	{key=KEY_L, str="变身"},
	{key=KEY_R, str="跳跃"},
	{key=KEY_F11, str="查看"},
}

return keybutton
```

- - -

{{< reward-button >}}

- - -
