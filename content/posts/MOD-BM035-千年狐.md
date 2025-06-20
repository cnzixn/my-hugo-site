+++
title = "BM035-千年狐"
date = "2025-03-07"
author = "Bny"
tags = ["模组", "人物"]
aliases = ["BM035"]
+++

> 本文介绍了模组 **千年狐** 的功能与特点。

---

## 文件下载

> [BM035] 千年狐  
{{< pan "BM035" >}}  

---

## 模组简介

#### 移植改动

```lua
2024.10.05 樂不思蜀

仅适配兔人框架，其他版本请自便。

modmain.lua
  配方：添加“团扇”、“狐狸铃铛”。

miho.lua
  容器：修改坐标适配手机版。

gumipot.lua
  容器：修改坐标适配手机版。

gumifan.lua
  工具：移除砍树功能。
  法杖：改为“小旋风”。
       小旋风不会摧毁建筑。
       小旋风可以降温、灭火。
       小旋风可以使部分作物“掉落”。

```

#### 原版介绍

```lua

-- name = "   The Millennium Fox"
-- author = "Seki"
-- version = "bete 20.87"

描述
千年狐 花漾 Wharang The Millennium Fox
【Originlly From】
【https://steamcommunity.com/sharedfiles/filedetails/?id=468347946】

花漾的三维:

最大心魂: 500

■ [血量]　 80 > > > ■ [血量]　280
■ [饱食]　 85 > > > ■ [饱食]　235
■ [理智]　150 > > > ■ [理智]　350

初始三维可以在MOD设置里改变（Wharang Stats选项）

收集魂心：
杀死生物可以获得殘魂。
如果你收集你的殘魂100％，心魂 + 1

花漾的特点：
较低的伤害和较快的移动速度。
免疫火焰伤害，在火边缓慢恢复精神值，不惧怕黑暗。
她可以承受更高的温度。(RoG/SW)
她害怕怪物！（精神值降低的更快）
蝙蝠不会主动攻击她。

具有夜视能力（饱食度高于70%）
能够缓慢恢复生命。
花漾能自我解毒。
花漾可以制作基础的魔法物品。

满月与狐狸面具给她神秘的力量。

按键 :
跳跃闪避：默认 【 R 】
切换形态 （需要狐狸面具） ：默认 【 L 】
查看魂心: 默认 【 F11 】
宠物指令: 默认【 Ctrl + G 】
烟火盛宴: 默认【 Shift + K 】



此版本维护内容

角色特性
R键跳跃闪避(简直是一件手动的暗影斗篷)
主动变身：佩戴狐狸面具时按L切换形态
使用面具变身期间及随后的冷却时间内具有一定理智惩罚
角色攻击随魂心成长
喜欢烤肉
能给自己剃毛

在火狐形态触发火焰反伤
更长的保温时间与更快的干燥速度
火狐形态不吓跑小动物，冰狐反之
冰狐受到中立生物仇恨
冰狐拥有更高的饥饿速率，但拥有一定伤害抗性
月圆或低san强制变身，无法主动变回火狐
冰狐形态下攻击有机会施加寒冷层数，寒冷层数足够时冰冻敌人
碎冰一击造成敌方当前生命值一定比例真伤，斩杀生命值低于一定比例敌人
重置了所有检查语音的中文翻译

吃肉概率掉落物品：
魂心5级后：基础食材
魂心15级后：狐狸尾毛
魂心40级后：料理
魂心60级后：战利品
魂心100级后：部分稀有资源

物品调整

新增物品：狐狸尾毛
随时间生长，用剃刀刮落
用以合成花漾的装备

新增物品：狐狸宝石
非常烫！
用以合成狐狸护符
可用以修复并强化狐狸扇子

新增物品：狐狸护符
佩戴时增加获取的残魂量
佩戴时缓慢修复狐狸扇子
能够使用狐狸尾毛修补
保护你不受毒气和大雾的侵害（哈密雷特）
部分抵御变身时带来的饥饿值快速流失，在玩家san值偏低时主动消耗饥饿值恢复san值

新增作物：火苹果
和火龙果一样稀有
食用升温并发光
能够烹饪成火龙果派
能够填充鼹鼠帽

狐狸扇子：
耐久耗尽时变回团扇
砍树功能
相比斧头更高效
手持+10%移速
燃烧攻击 （只在火狐形态生效）：打断敌人攻击，范围照明，削减敌人护甲（对boss无效）
暗影召唤 （只在冰狐形态生效）：消耗理智，吸取血量
右键召唤旋风攻击(消耗理智) 会摧毁建筑

狐狸面具：
装备后L键以变身
可以使用噩梦燃料修复

狐狸尾巴：
战斗时回复耐久
根据尾毛数提供护甲与攻击力加成

食谱
月见水饺可以为矿灯帽和提灯添加燃料
调整了月见水饺在哈姆雷特中的配方
松饼（原 月光饺子*1+浆果*2）改为半月糕*1+任意蔬菜*2
鱼干 (鱼*2 + 绳子*1）恢复更多生命，减少饱食回复
茶籽可入锅煮茶（哈姆雷特）
改善了与智能锅（Craft Pot）的兼容性，现在所有mod食谱的贴图均能正确显示

生物调整
小胡椒树 吃胡椒树根以召唤
能够进食蔬菜，并提供对应种子
进食足够多物品时产出活木！

miho不再吓跑小动物
小龙的战斗能力随饱腹度提升，在饥饿时无法战斗
击败海难椰子守卫和哈姆雷特曼德拉精有机会掉落胡椒树根
大型boss有几率掉落各色宝石（其中狐狸宝石必定掉落）

config选项
可在mod的config界面选择是否开启地皮和墙体的合成配方
可在config界面调整吃肉掉落随机物品的概率
可在config界面调整升级速度
可在config界面调整配方难度

已知问题
航行过程中脸部动画缺失，使用活性核心时动画错误
不要带小龙进入火山!!!如果带不出来了，可以喂它一颗狐狸宝石把它变回蛋

兼容的五格
【https://steamcommunity.com/sharedfiles/filedetails/?id=2891889557】

请兼容哈姆雷特dlc！请兼容哈姆雷特dlc！请兼容哈姆雷特dlc！
如果在steam上不便反馈问题，欢迎加入讨论群594070145，也欢迎前来提供mod修改建议或讨论游戏相关内容

```

>  
内容有待更新...  

---

## 注意事项

>  
为避免损坏存档，使用前请备份游戏数据。  
可能与其他模组存在冲突，建议单独测试。  

---

