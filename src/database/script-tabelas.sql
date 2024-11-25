-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE ativamente;
USE ativamente;
-- drop database ativamente;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	dtNasc date,
    cpf char(11),
	senha VARCHAR(50)
);
    
CREATE TABLE comentario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(250),
    dtHora datetime,
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    artigo INT
);	

create table pesquisa (
	id int auto_increment,
    fkUsuario int,
    constraint fkUsuarioPesquisa foreign key(fkUsuario)
		references usuario(id),
	primary key(id, fkUsuario),
	idade int,
    atividade_fisica varchar(45),
    alimentacao varchar(45),
    sono int,
    saude_mental varchar(45),
    objetivos_saude varchar(45),
    nivel_estresse varchar(45));