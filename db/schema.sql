CREATE database burgers_db;

use burgers_db;

CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(50),
devoured boolean default 0,
Primary key (id)
)
