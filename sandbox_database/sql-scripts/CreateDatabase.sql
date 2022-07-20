CREATE DATABASE IF NOT EXISTS `store`;
USE `store`;

CREATE TABLE IF NOT EXISTS `campaigns` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `campaign` char(100) DEFAULT NULL,
  `value` float DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
);

CREATE TABLE IF NOT EXISTS `discounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `discount` char(100) DEFAULT NULL,
  `value` float DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
);

CREATE TABLE IF NOT EXISTS `plans` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plan` char(100) DEFAULT NULL,
  `description` char(100) DEFAULT NULL,
  `value` float DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
);

CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(100) DEFAULT NULL,
  `contact` char(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product` char(100) DEFAULT NULL,
  `value` float DEFAULT NULL,
  `updated` char(13) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` char(100) DEFAULT NULL,
  `password` char(100) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
);