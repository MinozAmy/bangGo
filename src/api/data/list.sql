/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mysql

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-10-09 19:46:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(11) NOT NULL,
  `pageNo` int(255) DEFAULT NULL,
  `qty` decimal(10,0) DEFAULT NULL,
  `color` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `size` double DEFAULT NULL,
  `price` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `salePrice` decimal(10,2) DEFAULT NULL,
  `discout` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `origin` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `deliverPlace` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `brand` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `smallPic` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `bigPIc` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', null, null, null, null, '199', '29.90', '1.5折', '', '', '17新品夏装时尚潮男糖果色系绳系运动休闲短裤 ', '赛宾保罗', null, null);
INSERT INTO `list` VALUES ('2', null, null, null, null, '199', '39.90', '2折', null, null, '17新品夏装时尚潮男 纯色系绳系运动休闲短裤 ', '赛宾保罗', null, null);
INSERT INTO `list` VALUES ('3', null, null, null, null, '188', '29.90', '1.6折', null, null, '基础纯棉舒适男士休闲圆领短袖印花T恤', '米郎骑士', null, null);
SET FOREIGN_KEY_CHECKS=1;
