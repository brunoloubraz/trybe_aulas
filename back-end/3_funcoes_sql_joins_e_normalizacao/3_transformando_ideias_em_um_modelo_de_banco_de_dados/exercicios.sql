CREATE DATABASE IF NOT EXISTS zoologico;
USE zoologico;
CREATE TABLE animal (
animal_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(45),
sexo VARCHAR(45),
idade INT,
especie_id INT NOT NULL,
localizacao_id INT NOT NULL,
id_cuidador INT NOT NULL,
FOREIGN KEY (especie_id) REFERENCES especie (especie_id),
FOREIGN KEY (localizacao_id) REFERENCES localizacao (localizacao_id),
FOREIGN KEY (id_cuidador) REFERENCES cuidador (id_cuidador)
);

CREATE TABLE especie (
especie_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome_especie VARCHAR(45)
);

CREATE TABLE localizacao (
localizacao_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
rua VARCHAR(45),
numero VARCHAR(45),
cep VARCHAR(45),
cidade VARCHAR(45),
estado VARCHAR(45)
);

CREATE TABLE cuidador (
id_cuidador INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome_cuidador VARCHAR(45),
id_gerente INT NOT NULL,
FOREIGN KEY (id_gerente) REFERENCES gerentes (id_gerente)
);

CREATE TABLE gerentes (
id_gerente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome_do_gerente VARCHAR(45)
);

SELECT * FROM animal;