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

INSERT INTO Produtos VALUES
(null,
'Moda da Casa',
'Pão de hambúrguer, filé de frango grelhado, queijo, alface, tomate e maionese',
35.90,
'L',
'https://github.com/joaop06/imagens-PI-2_Semestre/blob/main/hamburguer2.jpg?raw=true');

INSERT INTO Produtos VALUES
(null,
'X-Egg',
'Pão de hambúrguer, hambúrguer, ovo, queijo, alface, tomate e maionese',
19.50,
'L',
'https://github.com/joaop06/imagens-PI-2_Semestre/blob/main/hamburguer2.jpg?raw=true');

INSERT INTO Produtos VALUES
(null,
'Pizza de Frango com Catupiry',
'Mussarela, Frango Desfiado, Catupiry e Batata Palha',
42.90,
'P',
'https://github.com/joaop06/imagens-PI-2_Semestre/blob/main/pizza2.jpg?raw=true');


SELECT user FROM mysql.user;
