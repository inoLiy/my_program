/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : zol

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-10-14 12:18:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `registry`
-- ----------------------------
DROP TABLE IF EXISTS `registry`;
CREATE TABLE `registry` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `phone` tinyint(4) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of registry
-- ----------------------------

-- ----------------------------
-- Table structure for `zolpic`
-- ----------------------------
DROP TABLE IF EXISTS `zolpic`;
CREATE TABLE `zolpic` (
  `sid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(10) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `top` tinyint(4) unsigned DEFAULT NULL,
  `headline` varchar(200) DEFAULT NULL,
  `subhead` varchar(100) DEFAULT NULL,
  `text` varchar(300) DEFAULT NULL,
  `sort` varchar(10) DEFAULT NULL,
  `brand` varchar(10) DEFAULT NULL,
  `newprice` float(7,0) unsigned DEFAULT NULL,
  `oldprice` float(7,0) unsigned DEFAULT NULL,
  `sale` float(5,2) unsigned DEFAULT NULL,
  `store` varchar(15) DEFAULT NULL,
  `urls` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zolpic
-- ----------------------------
INSERT INTO `zolpic` VALUES ('1', 'banner', 'https://mercrt-fd.zol-img.com.cn/t_s2000x2000/g1/M05/01/06/ChMljl1_Qy6IUgGwAADKnUAUXyEAAPz4QPW17oAAMq1933.jpg', null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `zolpic` VALUES ('2', 'banner', 'https://mercrt-fd.zol-img.com.cn/t_s2000x2000/g1/M06/01/06/ChMljl1_RBiIQa8pAADHJwHBr1oAAPz4gOkEiYAAMc_153.jpg', null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `zolpic` VALUES ('3', 'banner', 'https://mercrt-fd.zol-img.com.cn/t_s2000x2000/g1/M06/01/06/ChMljl1_Q12IHqepAAD0TjUHKmsAAPz4gCADNoAAPRm991.jpg', null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `zolpic` VALUES ('4', 'hot', 'https://mercrt-fd.zol-img.com.cn/t_s400x400/g2/M00/03/08/ChMlWV06ZWKIBYf-AAGcQZOM4D8AAMHXQALcpkAAZxZ179.jpg', '1', '甲骨龙组装电脑9代i7 9700K RTX2070 6G独显海盗船16G/32G内存480G', '9700K RTX2070 吃鸡游戏主机\r\n9700K RTX2070 吃鸡游戏主机\r\n9700K RTX2070 吃鸡游戏主机', null, '主板', '华硕', '8199', '9199', null, '甲骨龙旗舰店', 'https://mercrt-fd.zol-img.com.cn/t_s400x400/g2/M00/03/08/ChMlWV06ZWKIBYf-AAGcQZOM4D8AAMHXQALcpkAAZxZ179.jpg,http://i1mercrt.fd.zol-img.com.cn/t_s400x400/g2/M00/03/08/ChMlWV06ZWaIfXESAADtdfLHbmsAAMHXQAkhiQAAO2N747.jpg,http://i5mercrt.fd.zol-img.com.cn/t_s800x800/g2/M00/03/08/ChMlWl06ZXGIG5MmAADo4_1Y4TUAAMHXQBTxoEAAOj7085.jpg');
INSERT INTO `zolpic` VALUES ('5', 'hot', 'https://mercrt-fd.zol-img.com.cn/t_s800x800/g2/M00/0F/09/ChMlWlyQgoyIIZ3_AAH4Qu11ZwwAAI4OgPML2wAAfha499.jpg', '2', '七彩虹 iGame GeForce RTX 2080 Ti Vulcan X OC 高频火神信仰卡', '七彩虹 iGame GeForce RTX 2080 Ti Vulcan X OC 高频火神信仰卡', null, '显卡', '七彩虹', '8999', '9999', null, '锦鑫科技电脑专营店', 'https://mercrt-fd.zol-img.com.cn/t_s800x800/g2/M00/0F/09/ChMlWlyQgoyIIZ3_AAH4Qu11ZwwAAI4OgPML2wAAfha499.jpg,http://i2mercrt.fd.zol-img.com.cn/t_s800x800/g2/M00/0F/09/ChMlWVyQgraIHl0rAAH-Sqz7ADUAAI4OwAjq3sAAf5i902.jpg');
INSERT INTO `zolpic` VALUES ('6', 'hot', 'https://mercrt-fd.zol-img.com.cn/t_s400x400/g2/M00/00/0E/ChMlWlzagemIdUXGAAE3ilOLlSkAAJ9XgBUadwAATei491.jpg', '3', '影驰（Galaxy）GeForce GTX1660 6G骁将 GDDR5 自营台式机电竞游戏卡', '6G显存游戏显卡【原厂3年质保】双热管散热,稳定高效电容电感，品质如一。', null, '显卡', '影驰', '1599', '2599', null, '锦鑫科技电脑专营店', 'http://i1mercrt.fd.zol-img.com.cn/t_s800x800/g2/M00/00/0E/ChMlWlzagemIdUXGAAE3ilOLlSkAAJ9XgBUadwAATei491.jpg,http://i1mercrt.fd.zol-img.com.cn/t_s800x800/g2/M00/00/0E/ChMlWVzaggiIf-nDAAECtM0SyesAAJ9XgDaK5kAAQLM787.jpg');
INSERT INTO `zolpic` VALUES ('7', 'hot', 'https://mercrt-fd.zol-img.com.cn/t_s400x400/g2/M00/0F/07/ChMlWVzSppyIYVsDAANQd52HYxAAAJ3sALb3BMAA1CP374.jpg', null, '玩家国度（REPUBLIC OF GAMERS） ROG MAXIMUS XI EXTREME 主板 M11E', 'AI智能超频,电感导热贴,板载5G网卡,双M.2导热片,二代内存优化设计', null, '主板', '华硕', '4299', '4999', null, '锦鑫科技电脑专营店', 'https://mercrt-fd.zol-img.com.cn/t_s400x400/g2/M00/0F/07/ChMlWVzSppyIYVsDAANQd52HYxAAAJ3sALb3BMAA1CP374.jpg,http://i3mercrt.fd.zol-img.com.cn/t_s800x800/g2/M00/0F/07/ChMlWVzSpemIBmUWAAFC-NJPGWUAAJ3rwK-QC8AAUMQ303.jpg,http://i2mercrt.fd.zol-img.com.cn/t_s800x800/g2/M00/0F/07/ChMlWVzSpfCIPBu9AAJcBak2d_4AAJ3rwLl5iMAAlwd172.jpg,http://i4mercrt.fd.zol-img.com.cn/t_s800x800/g2/M00/0F/07/ChMlWlzSpmmIRYRhAAK83RQrhF0AAJ3sAJKHRUAArz1554.jpg,');
INSERT INTO `zolpic` VALUES ('8', 'hot', 'https://mercrt-fd.zol-img.com.cn/t_s400x400/g5/M00/0A/0A/ChMkJltEOc2IY4n_AAEoy7bBE_EAAplDgGFbeEAASjj735.jpg', null, 'HyperX Alloy FPS Pro专业版游戏机械键盘', 'USB背光绝地求生\\\\\\\"吃鸡\\\\\\\"CSGO游戏键盘樱桃轴机械键盘', null, '人体工程学键盘', 'HyperX', '499', '429', null, '锦鑫科技电脑专营店', 'https://mercrt-fd.zol-img.com.cn/t_s400x400/g5/M00/0A/0A/ChMkJltEOc2IY4n_AAEoy7bBE_EAAplDgGFbeEAASjj735.jpg,http://i2mercrt.fd.zol-img.com.cn/t_s800x800/g5/M00/0A/0A/ChMkJltEPLCIOrJOAAF0hSALd58AAplEAKbwj8AAXSd562.jpg,http://i4mercrt.fd.zol-img.com.cn/t_s800x800/g5/M00/0A/0A/ChMkJ1tEOneITbL6AAE-eZibjgcAAplDgNux_wAAT6R344.jpg,http://i2mercrt.fd.zol-img.com.cn/t_s800x800/g5/M00/0A/0A/ChMkJ1tEOdKID0NVAAErkN2ik-QAAplDgGIpfoAASuo698.jpg,http://i2mercrt.fd.zol-img.com.cn/t_s800x800/g5/M00/0A/0A/ChMkJ1tEOdaIfUgTAAEusOHow0gAAplDgGJ15AAAS7I198.jpg');
INSERT INTO `zolpic` VALUES ('9', 'buy', 'https://mercrt-fd.zol-img.com.cn/t_s200x200c/g4/M09/06/01/ChMlzF111cCIEU_DAAlEumlEDJ0AAXmwgNdsDYACUTS579.jpg', null, '终于买到了盖泡面的神器 新到手的iPad air 2019', null, null, null, null, null, null, null, null, null);
INSERT INTO `zolpic` VALUES ('10', 'buy', 'https://mercrt-fd.zol-img.com.cn/t_s200x200c/g1/M09/01/06/ChMljV1_SGCIZOx-AABzVgxqw5oAAPz5QPmhK4AAHNu242.jpg', null, '换汤不换药，两代iPhone大对比', null, null, null, null, null, null, null, null, null);
INSERT INTO `zolpic` VALUES ('11', 'buy', 'https://mercrt-fd.zol-img.com.cn/t_s200x200c/g4/M05/08/0F/ChMly12JrrqIJfZ9AAIPBo5RsoQAAXyIgCbgaQAAg8e044.jpg', null, '2019年度旗舰手机三剑客，你会怎么选？！', null, null, null, null, null, null, null, null, null);
INSERT INTO `zolpic` VALUES ('12', 'buy', 'https://mercrt-fd.zol-img.com.cn/t_s200x200c/g4/M00/0D/09/ChMly12dj4CIOlX9AAJ3EKFN7QwAAYExQFzsSsAAnco771.jpg', null, '99%的人不知的隐藏功能！教你玩转微信', null, null, null, null, null, null, null, null, null);
INSERT INTO `zolpic` VALUES ('13', 'buy', 'https://mercrt-fd.zol-img.com.cn/t_s200x200c/g4/M08/0A/0C/ChMlzF2QUoyINz21AAch63enZhEAAX5jQPvI3IAByID331.jpg', null, '苹果11，4天使用感受，绝对都是大实话', null, null, null, null, null, null, null, null, null);
INSERT INTO `zolpic` VALUES ('14', 'hot-tg', 'https://mercrt-fd.zol-img.com.cn/t_s120x120/g4/M0A/0E/00/ChMly12gWIWIJAG1AACzdlTP8NIAAYGWwIz9egAALOO800.jpg', null, '华为 P30（8GB/128GB/全网通）亮黑色', null, null, null, null, '3388', '3588', null, null, null);
INSERT INTO `zolpic` VALUES ('15', 'hot-tg', 'https://mercrt-fd.zol-img.com.cn/t_s120x120/g5/M00/00/0B/ChMkJ1vztbKIdMLBAAA-wRvYgfsAAtQ_gB-MiYAAD7Z503.jpg', null, '甲骨龙G5400四核心/H310C 8GB内存赠康佳21.5显示器 DIY台式电脑主机 默认标配', null, null, null, null, '1599', '1999', null, null, null);
INSERT INTO `zolpic` VALUES ('16', 'hot-tg', 'https://mercrt-fd.zol-img.com.cn/t_s120x120/g2/M00/09/0F/ChMlWVz19FyIdMwRAACIdvciIjYAAKhnwDy2rAAAIiO550.jpg', null, '英特尔（Intel）i5 9400F 酷睿六核 盒装CPU处理器 中文原包', null, null, null, null, '1029', '1199', null, null, null);
INSERT INTO `zolpic` VALUES ('17', 'hot-tg', 'https://mercrt-fd.zol-img.com.cn/t_s120x120/g4/M0A/0E/00/ChMly12gWIWIJAG1AACzdlTP8NIAAYGWwIz9egAALOO800.jpg', null, 'AOC 27B1H AOC 27B1H', null, null, null, null, '799', '1099', null, null, null);
INSERT INTO `zolpic` VALUES ('18', 'cheap', 'https://dg-fd.zol-img.com.cn/t_s154x154/g2/M00/0B/08/ChMlWl1YFEeILro0AABCMsooedwAAMnhgGRaxwAAEJK573.jpg', null, '【聚划算】5亿品质用户精明之选 每日精选优良团购商品 品质生活保证', '全场包邮 超级单品爆款五折抢  1元抢购中秋爆款美食', null, null, null, null, null, null, null, null);
INSERT INTO `zolpic` VALUES ('19', 'cheap', 'https://img.alicdn.com/bao/uploaded/i1/2930255252/O1CN01bQFMtu1ofSg7xCgtj_!!0-item_pic.jpg_400x400q100.jpg', null, '限时特价9.9包邮10包漫花纸巾抽纸家用餐巾卫生面巾纸整箱实惠装', '7.9元 包邮（需用券）', '纯木臻品抽纸 每包不足1元钱 4层加厚 纯木臻品抽纸 每包不足1元钱 4层加厚 ', null, null, null, null, null, null, null);
INSERT INTO `zolpic` VALUES ('20', 'cheap', 'https://gw.alicdn.com/bao/uploaded/i4/3087155153/O1CN01OQpH3k1nw7UUiZzcg_!!0-item_pic.jpg_400x400q100.jpg', null, '限时特价9.9包邮10包漫花纸巾抽纸家用餐巾卫生面巾纸整箱实惠装', '7.9元（需用券）', '升级加量16卷，买3件送8卷，实发56卷', null, null, null, null, null, null, null);
INSERT INTO `zolpic` VALUES ('21', 'cheap', 'https://gw.alicdn.com/bao/uploaded/i4/2258006982/O1CN01ktEBvz21Rntc75U9G_!!0-item_pic.jpg_400x400q100.jpg', null, '健美创研洗脸巾女纯棉一次性洗面擦脸洁面巾美容专用卸妆棉化妆棉', '5.1元 （需用券）', '亏本体验 买2送1（送同款）亏本体验 买2送1（送同款）亏本体验 买2送1（送同款）亏本体验 买2送1（送同款）', null, null, null, null, null, null, null);
INSERT INTO `zolpic` VALUES ('22', 'cheap', 'https://gw.alicdn.com/bao/uploaded/i1/481323985/O1CN01Un39By1fJAt20dzSJ_!!0-item_pic.jpg_400x400q100.jpg', null, '半亩花田去角质慕斯面部女收缩清洁毛孔脸部去死皮男黑头全身啫喱', '49元 （需用券）', null, null, null, null, null, null, null, null);
INSERT INTO `zolpic` VALUES ('23', 'recommend', 'https://mercrt-fd.zol-img.com.cn/t_s154x154/g4/M00/06/05/ChMlzF13c_2IIj1mABLepdY6lDgAAXnqQNZcvQAEt69695.png', null, '【爆款推荐】英菲克V580 键盘鼠标套装 USB有线 ', null, '【爆款推荐】英菲克V580键盘鼠标套装USB有线电脑台式游戏办公专用打字商务家用防水静音无声薄膜外接苹果联想华硕笔记本 2小时销量达208件 原价19.90', null, null, '15', null, null, null, null);
INSERT INTO `zolpic` VALUES ('24', 'recommend', 'https://mercrt-fd.zol-img.com.cn/t_s154x154/g4/M00/06/05/ChMly113c0iIJP9WAAoye5UuxDoAAXnqQEV69cACjKT398.png', null, '【爆款推荐】超薄小巧便携 迷你充电宝', null, '【爆款推荐】超薄小巧便携迷你充电宝大容量少女可爱通用正品飞机可带移动电源 2小时销量达433件 原价54.80元，券后价仅14.80元，有兴趣的Z友们快去了', null, null, '15', null, null, null, null);
INSERT INTO `zolpic` VALUES ('25', 'recommend', 'https://mercrt-fd.zol-img.com.cn/t_s154x154/g1/M00/00/07/ChMljl13cL6IQcdlAAJHc7dmT2UAAPwBAFpYxkAAkeL852.png', null, '【爆款推荐】真无线 蓝牙耳机 安卓苹果通用', null, '【爆款推荐】真无线蓝牙耳机双耳运动跑步隐形单耳入耳挂耳式安卓通用适用苹果iphone华为oppo小米女生款可爱无限超长待机 2小时销量达1810件 原价29', null, null, '20', null, null, null, null);
INSERT INTO `zolpic` VALUES ('26', 'recommend', 'https://mercrt-fd.zol-img.com.cn/t_s154x154/g4/M07/05/08/ChMly11w2RWIBUsmAA630NgJG9wAAXkaAPAPh0ADrfo235.png', null, '【零食爆款】泓一 提拉米苏千层蛋糕 早餐零食休闲小吃 ', null, '【爆款推荐】泓一提拉米苏千层蛋糕早餐小包装面包整箱网红零食小吃休闲美食品 2小时销量达472件 原价29.90元，券后价仅19.90元，有兴趣的Z友们快去了', null, null, '20', null, null, null, null);
INSERT INTO `zolpic` VALUES ('27', 'goods', 'https://mercrt-fd.zol-img.com.cn/t_s154x154/g1/M02/00/04/ChMljV2hlDuIQ1lvAABTjfWS6IEAAP8pgEa_RkAAFOl248.jpg', null, '30倍变焦拍月亮无压力荣耀20 PRO四摄相机测试', null, '荣耀总裁赵明在发布会上表示，日常的四大常见拍照场景分别是超广角、普通视角、长焦和微距，而荣耀20 PRO对应的四摄相机为1600万超广角镜头，4800万超轻主摄荣耀总裁赵明在发布会上表示，日常的四大常见拍照场景分别是超广角、普通视角、长焦和微距，而荣耀20 PRO对应的四摄相机为1600万超广角镜头，4800万超轻主摄', null, null, null, null, null, null, null);
INSERT INTO `zolpic` VALUES ('28', 'goods', 'https://mercrt-fd.zol-img.com.cn/t_s154x154/g4/M05/0E/02/ChMlzF2hlyiId0wMAACiFKEkksIAAYG_gAwYxEAAKIs508.jpg', null, 'Wi-Fi 6 无线值得升级吗？楼主做了一回小白鼠', null, '前段时间，楼主装了一台 3A 平台新主机，装机所用的微星 MEG X570 ACE 主板标配 Wi-Fi 6 无线网卡，其实不单这一款，目前市售的中高端 X57.前段时间，楼主装了一台 3A 平台新主机，装机所用的微星 MEG X570 ACE 主板标配 Wi-Fi 6 无线网卡，其实不单这一款，目前市售的中高端 X57.', null, null, null, null, null, null, null);
INSERT INTO `zolpic` VALUES ('29', 'goods', 'https://mercrt-fd.zol-img.com.cn/t_s154x154/g1/M01/00/04/ChMljV2hkziILM3RAAQDKYyP7PgAAP8pQLcbFQABANB955.jpg', null, '这应该是充电最快的几款手机了吧', null, 'OPPO Reno Ace！名字好难读的一款手机，刚发布没多久，65W快充，4000mAh电池，半小时充满电，再不是充电5分钟，通话两小时啦VIVO NEX 5OPPO Reno Ace！名字好难读的一款手机，刚发布没多久，65W快充，4000mAh电池，半小时充满电，再不是充电5分钟，通话两小时啦VIVO NEX 5', null, null, null, null, null, null, null);
INSERT INTO `zolpic` VALUES ('30', 'goods', 'https://mercrt-fd.zol-img.com.cn/t_s154x154/g4/M01/0E/02/ChMly12hklCIFAZnAATS4xXJ_ZsAAYG-gPDviAABNL7215.jpg', null, '我最近收到的一款蓝牙耳机，真的是很棒！黑色也太高端大气了！是派美特PaMu Slide真无线蓝牙耳机。我选的是陨石黑，感觉很百搭！充电盒是一个方形的.', null, '我最近收到的一款蓝牙耳机，真的是很棒！黑色也太高端大气了！是派美特PaMu Slide真无线蓝牙耳机。我选的是陨石黑，感觉很百搭！充电盒是一个方形的.', null, null, null, null, null, null, null);
