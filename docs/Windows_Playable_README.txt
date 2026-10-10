THREE ENCOUNTER PROTOTYPE / 三关设计原型
v0.1.0-prototype | Jialong Ouyang / 欧阳嘉隆
Windows Development独立原型包；无需安装Unreal编辑器。
Standalone Windows Development prototype; Unreal Editor is not required.

开始 / START
1. 下载Release附件 RISE_Three_Encounters_Windows_v0.1.0-prototype.zip。GitHub自动生成的“Source code (zip/tar.gz)”不是可运行试玩包。
2. 完整解压到一个文件夹，运行根目录 RISE_Blockout.exe。保留随附文件，不要只取出EXE或在压缩包内运行。
3. 在主菜单依次选择：破城守卫 → 熔炉监工 → 疫沼领主。
4. 第三关先在中央面板选择真人构筑，查看Q说明和“已选择”状态，调整AI配队，再点“确认并开始”或按空格。

1. Download the Release asset RISE_Three_Encounters_Windows_v0.1.0-prototype.zip. GitHub's automatic “Source code” archives are not the playable build.
2. Extract the entire archive, then run RISE_Blockout.exe in its root folder. Keep the accompanying files together; do not run inside the ZIP.
3. Select Breach Guardian, then Furnace Overseer, then Plague Lord.
4. In Plague Lord, choose the human build in the central panel, read its Q ability and selected state, adjust the AI builds, then click Confirm & start or press Space.

操作 / CONTROLS
WASD：按当前镜头方向移动；左键：点击寻路。按下WASD会取消当前点击路线，松开后停止，再次点击可重新寻路。
F：主动普通攻击；第三关Q：所选主动技能；空格：开始挑战，第三关需先明确选择真人构筑。
H：帮助；J：设计说明；R：重开当前关卡；Esc：暂停/继续、返回主菜单或退出。
第三关1：循环真人构筑并明确选择；2/3：分别循环AI A/B；空格：确认已选构筑后开始。开战后构筑锁定，R重开后重新选择。
准备时T：切换作者自测/外部试玩；N：下一位匿名参与者。结算后O可重新打开反馈表单。没有通用闪避键。
WASD: camera-relative movement; left click: navigate to a point. WASD cancels the current click route; releasing the keys stops movement. Click again to set a new route.
F: basic attack; Q in Plague Lord: selected ability; Space: start, after explicitly choosing the human build in Plague Lord.
H: help; J: design notes; R: restart; Esc: pause/resume, main menu or quit.
In Plague Lord, 1 cycles and explicitly selects the human build; 2/3 cycle AI A/B; Space starts after selection. Builds lock at combat start; R restarts into selection.
Before combat, T switches designer/external source and N creates the next anonymous participant. O reopens the feedback form after the encounter ends. There is no universal dodge button.

第三关构筑 / PLAGUE LORD BUILDS
爆发：Q集中打击单体。控制：Q范围伤害并短暂眩晕小怪，Boss不被眩晕。护盾：Q为附近队员提供短时护盾。
三者基础攻击均为近战；AI可独立配队，也允许三人选相同构筑。它们不是远程职业或固定坦克/治疗职责。
Burst: focused single-target Q damage. Control: area damage and a brief add stun; the boss is not stunned. Shield: temporary protection for nearby team members.
All builds use the same basic melee reach. AI builds are independent and duplicates are allowed. These are ability choices, not ranged classes or fixed tank/healer roles.

运行说明 / RUNNING THE PROTOTYPE
本包采用Development配置，以保留第一关现有冲锋箭头、路径边界等必要的调试绘制预警；不是Shipping发行配置。第三关Q等表现使用实际网格组件，并非所有效果都依赖调试绘制。
入口程序未作数字签名，Windows可能提示未知发布者。请自行核对下载来源；无法运行时仍可观看作品集网页中的视频，不需要关闭系统安全功能。
随包运行库位于 Engine/Extras/Redist/en-us/：vc_redist.x64.exe、GameInputRedist.msi。遇到缺少对应运行库的提示时可使用这些安装程序；本包不含UEPrereqSetup。
图形目标：Windows x64、DirectX 12 / Shader Model 6；这是构建目标，不是最低显卡配置结论。
当前技术检查使用的电脑：Windows 11 Home 10.0.26300.9550、Intel i7-13700KF、RTX 4080、32GB内存。这是测试环境，不是最低配置。其他电脑与干净虚拟机尚未验证。
本机独立Development程序19项关键技术检查已通过，覆盖三关菜单进出、WASD/左键移动、攻击与AI输出、构筑选择/开战门、护盾Q、重开、结果保存与正常退出。检查通过自动化OS键鼠输入驱动真实程序；中文、引号和换行保存通过，但未测试中文输入法组词与候选操作。
本轮最终包检查聚焦上述流程；第三关完整胜利与无参数默认存档位置，单列沿用输入/导航修复前独立包中未改机制的证据，不表示本次最终包重跑了第三关完整战斗。WASD原600cm/s与斜向归一化来自编辑器回归，程序画面仅用于定性核对移动。技术检查不替代其他电脑兼容性或外部玩家试玩。
This Development configuration preserves required existing Guardian charge arrows and lane boundaries drawn with development debug tools; it is not a Shipping build. Plague's Q effects use regular mesh components, so not every effect relies on debug drawing.
The launcher is unsigned, so Windows may show an unknown publisher. Check the download source yourself. If it cannot run, the portfolio videos remain available for review; disabling system security is not required.
Bundled runtime installers are in Engine/Extras/Redist/en-us/: vc_redist.x64.exe and GameInputRedist.msi. Use the corresponding installer if a missing-runtime message requires it. UEPrereqSetup is not included.
Graphics target: Windows x64, DirectX 12 / Shader Model 6. This describes the build target, not an established minimum GPU requirement.
Technical checks use Windows 11 Home 10.0.26300.9550, Intel i7-13700KF, RTX 4080 and 32GB RAM. This is a test system, not a minimum requirement. Other PCs and clean virtual machines are unverified.
The standalone Development executable passed 19 key technical checks on this PC: travel through all three encounters, WASD/click movement, attacks and AI damage, build/start gates, Shield Q, restart, result saving and normal quit. Automation sent OS mouse/keyboard input to the real executable. Chinese text, quotes and newlines saved correctly; Chinese IME composition and candidate selection were not tested.
The final-package checks focus on those flows. A full Plague victory and the no-argument default save path are separately retained evidence from the earlier package, whose combat/recording mechanics were unchanged; the full Plague battle was not repeated on the final package. Exact 600cm/s speed and diagonal normalization come from editor regression; packaged captures provide qualitative movement evidence. These checks do not establish other-PC compatibility or external-player results.

范围与记录 / SCOPE AND RECORDS
第一关单人；第二、三关1名玩家+2名AI，不是网络多人。记录保存在本机，不自动上传。
本机记录位置：<解压后的试玩文件夹>/RISE_Blockout/Saved/Playtests/
Local record location: <extracted playable folder>/RISE_Blockout/Saved/Playtests/
这一路径由修复前独立包的无参数启动实际生成；最终包沿用相同记录机制。请选择当前用户有写入权限的解压文件夹，避免Program Files等受保护目录；若保存失败，请检查文件夹写入权限。记录不会自动上传；需要分享反馈时，可自行复制此文件夹中的记录并手动发送。
This folder was created by a no-argument launch of the earlier standalone package; the final package retains that recording mechanism. Extract to a folder writable by your user account, avoiding protected locations such as Program Files. Check folder write access if saving fails. Nothing uploads automatically; if you choose to share feedback, copy the local records and send them manually.
设计者自测与外部玩家试玩分别标注；同一人多局仍是同一人。自动检查和编排演示不算外部玩家；当前结构化外部试玩0人。技术验收记录不随试玩包交付，也不作为理解度证据。
结算填写中Esc暂停，继续后保留当前表单文字。离开关卡前请先保存希望保留的反馈。若结束本局后的记录保存失败，程序会提示重试并禁用继续战斗；也可明确选择“放弃未保存记录并退出”。
Breach Guardian is solo. The other two encounters use one player and two AI allies, not network multiplayer. Records remain local and are not automatically uploaded.
Label designer self-tests and external-player sessions separately. Repeated runs by one person remain one participant. Automation and staged footage are not external playtests; structured external participants currently number 0. Technical test records are not distributed with the package or used as comprehension evidence.
Esc from a result form pauses while preserving its current text on Resume. Save feedback before leaving if you want to retain it. If saving an ended run fails, the game offers a retry and disables combat Resume; explicitly choosing Discard & quit is also available.

制作与素材 / AUTHORSHIP AND CREDITS
本人主导目标、机制、参数取舍与试玩迭代；这是首次Unreal制作，AI辅助实现、调试和原型表现。复用已有Epic Manny、Unarmed/Death动作、Unreal BasicShapes及项目内材质。第一关玩家被冲锋撞倒的反馈使用已有Death动作的锁根副本与蓝图控制的角色网格倾倒，不主张原创骨骼动画。原工程具体导入包未记录。个人作品，非Supercell官方内容。
I led the goals, mechanics, tuning choices and playthrough-driven iteration. This is my first Unreal project, with AI-assisted implementation, debugging and prototype presentation. Assets reuse existing Epic Manny, Unarmed/Death animations, Unreal BasicShapes and project-created materials. The first encounter’s player knockdown when hit by a charge uses a root-locked copy of an existing Death animation and Blueprint-controlled character-mesh rotation; no original skeletal animation is claimed. The exact original import package was not recorded. This is independent work, not official Supercell content.

其他边界 / OTHER LIMITS
未进行干净电脑运行库安装、实际断网、音频质量或所有分辨率验收。本次日志未见蓝图脚本错误、Accessed None或致命错误；仍有非阻断的引擎子系统警告，不能称全部日志无警告。
Clean-PC runtime installation, actual network disconnection, audio quality and all-resolution coverage were not tested. The current session had no Blueprint script errors, Accessed None or fatal errors; nonblocking engine-subsystem warnings remain, so this is not a warning-free certification.
