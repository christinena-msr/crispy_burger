drop database if exists burgers_db;

create database burgers_db;

use burgers_db;

create table burgers(
    id INT auto_increment,
    primary key (id),
    burger_name varchar(30),
    devoured boolean
)
