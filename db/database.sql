-- Crear base de datos
CREATE DATABASE IF NOT EXISTS companydb;

-- Usar la base de datos que creo 
USE companydb;

-- Crear tablas 
CREATE TABLE employee(
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(60) DEFAULT NULL,
  apellido VARCHAR(60) DEFAULT NULL,
  salary INT(5) DEFAULT NULL,
  PRIMARY KEY(id)
);

-- Ver descripción de la tabla 
DESCRIBE employee;
