create database banco_site_pp;
use banco_site_pp;

create table users (
	id int not null auto_increment,
    name varchar(120) not null,
    email varchar(120) not null,
    password varchar(120) not null,
    status enum('A','I') default ('A'),
    created_at datetime default current_timestamp,
    primary key(id)
);			

create table posts (
    id int not null auto_increment,
    descricao varchar(255) not null,
    user_id int not null,
    created_at datetime default current_timestamp,
    primary key(id)
);

drop table posts;

create table comments(
    id int not null auto_increment,
    descricao varchar(120) not null,
    post_id int not null,
    user_id int not null,
    primary key(id),
    foreign key (post_id) references posts(id),
    foreign key (user_id) references users(id)
);

create table reactions(
	id int not null auto_increment,
    user_id int not null,
    post_id int not null,
    comment_id int,
    primary key(id),
    foreign key (post_id) references posts(id),
    foreign key (user_id) references users(id)
);

