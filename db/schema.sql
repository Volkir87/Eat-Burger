-- create database and table schema here

create database burgers_db;

use burgers_db;

create table burgers (
	id int auto_increment not null,
    burger_name varchar(255),
    devoured bool,
    primary key(id)
)


