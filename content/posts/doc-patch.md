+++
title = "框架 - 扩展功能"
date = "2024-11-22"
author = "Bny"
tags = ["资料"]
aliases = ["patch"]
comments = false
+++

> 帮助你了解“框架”的扩展模组(BM000)功能

---

###  【基础功能】

``` shell
- 基础功能：无使用限制，开启后生效。  
- 每日签到：签到奖励 1 积分(24小时测试权限)。  
- 壁纸引擎：设置主界面的壁纸。  
- 背景图片：设置其他界面的背景图片。
- 新手模式：复活石使用后不会消失。  
- 平板模式：大屏手机开启后更方便游戏操作。  
- 禁用日志：禁用控制台日志，防止游戏卡顿。  

- 字体缩放：调整游戏中所有字体的大小。  
- 图标缩放：调整控制按钮(轮盘、动作)的大小。  
- 装备格子：装备栏可以设置为4(背包)、5(护符)、6(衣服)格。  
- 积雪特效：可以调节游戏中冬季时的积雪强度。  
- 黄昏亮度：可以调节游戏中黄昏时的画面亮度。  
- 彩色耐久：耐久值显示为彩色(绿->黄->红)。  
- 滤镜调整：设置低理智、鼹鼠帽的滤镜。  

- 智能锁敌：根据算法锁定最优攻击目标(高亮标记)。  
- 木头烧炭：燃烧后的木头有0.25~0.5的概率变为木炭。  
- 虫洞移植：用铲子挖起虫洞，丢弃在地上恢复使用。  
- 自动修船：人不在船上，修船厂也会进行修船工作。  
- 丢弃取出：物品栏可“丢弃”，容器可“取出”。  
- 自动合并：人物附近的可堆叠物自动合并到一起。  
- 对齐网格：建造、栽种、丢弃时会自动对齐到网格。  

- 三维变化：显示出血量、饥饿、精神的数值变化(增加/减少)。  
- 快速装备：查看“物体”时，自动装备所需工具(背包里除外)。  
- 密集种树：将“树种”的栽种间隔调整为“1”格。  
- 硝石制冰：(RoG)硝石可以制作3冰块。  
- 冰箱保鲜：可调整冰箱保鲜的倍率。  
- 刷新机制：猪房等刷新机制有异常，优化后不可建“刷肉机”。  
- 燃烧机制：(优化后)可燃物过热先“冒烟”后“着火”。  

```


---

###  【测试功能】

``` shell
- 测试功能：需要有“测试积分”才能使用。  
- 挂机保护：监测到玩家无操作，则保存并暂停游戏。  
- 动态更新：重写游戏更新机制，解决游戏卡死问题。  
- 条件反射：自动进行某一动作，移动时可以打断。  
　　强行停止：人物“移动”可强行停止当前自动进行的动作。  
　　使用工具：检测范围5；自动进行“使用”斧子、镐子、铲子、砍刀、镰刀、锄头。  
　　采摘拾取：检测范围5；自动进行“采摘”作物、“拾取”便便等。  
　　刮毛晾肉：检测范围15；自动进行“刮”牛毛、“晾晒”食物。  
　　施肥播种：检测范围15；自动进行植物“施肥”、农场“播种”。  
　　重置陷阱：检测范围15；自动进行犬牙、蜂刺、荆棘陷阱“重置”。  
　　新增燃料：自动进行火坑、提灯、灭火器、矿工帽等“添加燃料”。  
　　自动治疗：自动进行使用腺体、药膏等“治疗”。  
　　烹饪给予：自动进行火堆“烹饪”食物、“给予”物品。  
　　存放取出：自动进行向容器“存放”、“取出”同类物品。  
　　批量制作：自动进行“制作”陷阱、半成品材料等。  
　　建造栽种：自动进行“建造”、“栽种”等(长按->拖动)。  
- 自动钓鱼：(条件反射)开始钓鱼后，会自动完成抛竿、收杆动作。  
- 自动追踪：(条件反射)查看土堆、气泡后，人物会自动追踪猎物。  
- 烹饪大师：自动从打开的容器中“拿取”食材放入锅子烹饪。  

- 布局优化：(手机模式)优化游戏内操作按钮的布局。  
- 制作菜单：(布局优化)添加联机版风格的制作菜单。  
- 物品栏2：(布局优化) 5+3 风格的物品栏。  
- 词库管理：选择输入法启用的词库。

```

---

###  【物品功能】

``` shell
- 蜜蜂：攻击范围调整(3->0.6)。  
- 石虾：不在洞穴时移除生育能力。  
- 浆果：可以降温，效果与西瓜相同。  
- 农场：移除农场后面的“木棍”、“木片”。  
- 提灯：开灯时不可拾取，关灯后可拾取。  
- 鸟笼：不接受(熟)鸟蛋，可以接受怪物肉。  
- 冰箱：“冰冻料理”可永久保鲜(类似于冰块)。  
- 虫洞：被给予物品，会“显示”另一虫洞位置。
- 复活石：复活玩家后不再移除(需再次激活)。  
- 灭火器：不扑灭火堆；物品冒烟时自动开启。  
- 晾肉架：修复一直处于“雨天暂停状态”的问题。  
- 鸭子窝：移除“大脚”踩死小鸭子后生成的鸭子窝。  
- 压力火泉：可以用椰子炸弹炸毁(移除)。  
- 阿比盖尔：优先跟随玩家，打架不会上头。  
- 骷髅坟墓：满月时，骷髅化墓，坟生墓碑。  
- 重生护符：玩家有携带，无需装备就能生效。  
- 防火地皮：卵石地皮、棋盘地皮减缓热量传导。  
- 传送平台：激活时，清除地图“迷雾”(地图全开)。  
- 渡渡鸟巢：渡渡鸟少于两只时，建造的鸟巢会有蛋。  
- 瞬移法杖：(布局优化)点击“使用”按钮向“光标”瞬移。  
- 灵子分解机：可以管理附近“箱子”里的物品(简易存储)。

```

---

###  【其他功能】

``` shell
- 优化容器内数字大小。  
- 修复猎犬时间错乱的问题。  
- 修复某些音效无限播放的问题。  
- 新增角色“解锁”、讣告“清空”按钮。  
- 修复浆果帽、蜗牛甲不能使用的问题。  
- 修复冰箱、烹饪锅交换物品消失的问题。  
- 急救模式：快速点击轮盘，会保存并退出。  
- 月圆时间：第11、12天月圆，周期为20天。  
- 存档目录：(设置界面)可修改存档保存目录。  
　　默认：保存在"/data/data/..."  
　　外部：保存在"/sdcard/Android/data/..."  

```

---


###  【废弃功能】

``` shell
- 截图模式：人物静止时，长按屏幕 5 秒可显示/隐藏HUD。  
- 建造清单：(原版制作栏)可将配方“固定”到屏幕上以便快速建造。  
- 村庄玩法：“村庄”(存档0)可前往“远方”(存档x)冒险；冒险过程中随时随地可以回村庄。  
　　村庄世界：长白天；温和季；无猎犬；无巨兽。  
　　村庄地图：猪王、章鱼、眼骨、鱼骨、泄湖、格罗姆、渡渡鸟、抽奖机。  
　　村庄机制：永久保鲜、高等科学、过热保护、建筑保护。  
- 调试模式：双击血量->打开调试菜单，双击理智->打开控制台。  
- 高空视野：更大的视野可缩放范围。  
- 种植大师：挖芦苇->种在沼泽地；挖仙人掌->种在沙漠地；(手持铲子)可以种蘑菇；手杖快速收割作物。  
- 养殖大师：兔子(螃蟹)有几率打洞；蜗牛(喂石头)可以被收买；鼹鼠出门时会掉落“石头”；石虾(缩壳时)可用镐子挖；石虾被喂绿宝石会分裂。  
- 挖坟掘墓：墓碑可以用镐子挖，掉落1~2块大理石。  
- 战车保护：战车属性加强，保护好打工仔。  
- 森林再生：树桩会长成小树；雨天时树种会长成树苗。  
- 飞墙走壁：(高度差为1)人物可以在“石墙”上行走。  
- 快速合成：(原版制作栏)拥有基础材料可直接制作成品。  
- 材料返还：部分道具损坏时掉落“关键”材料。  
- 传送密码：传送法阵根据宝石排列进行“配对”。  
- 物品整理：(容器内)物品与第1格“交换”时自动整理容器。  
- 物品名称：人物附近显示物品名称。  
- 配方图标：优化未解锁的配方图标。  
- 装备改造：升级改造一些旧的装备。  
　　迷你雪球机：装备到手部，远程攻击(伤害0)，向目标(火焰、生物)投掷雪球。被放置时会向范围内所有“地块”投掷雪球。
　　眼球塔(物品)：装备到手部，远程攻击(伤害x0.5)。眼球塔(建筑)被玩家攻击会掉落“眼球塔(物品)”。
　　铥矿奖章：装备到“胸部”，获取一个“暗影护盾”(免疫影怪伤害)。
- 工人套装：同时装备“工具+草帽+草甲”。  
　　斧头=自动砍　铲子=自动挖　镐子=自动敲  
　　草叉=自动叉　砍刀=自动砍　锤子=修复墙  
- 血条显示：“查看”或“攻击”生物时会显示它的血条。  

```

---

[注释]: {{<reward-button>}}


