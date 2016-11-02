### Schema
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id INT AUTO_INCREMENTNOT NOT NULL,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN default false,
	`date` TIMESTAMP,
	PRIMARY KEY (id)
);