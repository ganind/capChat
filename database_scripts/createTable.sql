DROP DATABASE IF EXISTS capchat;
CREATE DATABASE capchat;
USE capchat;
CREATE TABLE IF NOT EXISTS `artiste`(
	artisteId int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	login varchar(50) NOT NULL,
	nom varchar(255) NOT NULL,
	prenom varchar(255) NOT NULL, 
	password varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `theme`(
	themeId int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	themeNom varchar(50) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `image`(
	id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	chemin varchar(255) NOT NULL,
	indice varchar(255) NOT NULL,
	artisteId int(11) NOT NULL,
	themeId int(11) NOT NULL,
	type_image boolean
) ENGINE=InnoDB DEFAULT CHARSET=utf8;