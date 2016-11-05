### Schema
CREATE DATABASE burgers_db;
USE burgers2_db;

CREATE TABLE burgers
(
	id INT AUTO_INCREMENTNOT NOT NULL,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN default false,
	PRIMARY KEY (id)
);