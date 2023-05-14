CREATE DATABASE RangOn;
USE rangon;

CREATE TABLE Produtos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT NOT NULL,
    preco DECIMAL(5,2) NOT NULL,
    tipo VARCHAR(1),
    imagem TEXT
);
SELECT * FROM Produtos;

CREATE TABLE Clientes (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome_completo VARCHAR(255) NOT NULL,
    celular VARCHAR(11) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(50) NOT NULL,
    
    cep VARCHAR(8) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    numero VARCHAR(10) NOT NULL
);
SELECT * FROM Clientes;





SELECT user FROM mysql.user;
select @@datadir;