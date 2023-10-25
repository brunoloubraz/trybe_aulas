-- Usando a coluna replacement_cost (valor de substituição), vamos encontrar:
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)

SELECT * FROM film;
-- 1
SELECT ROUND(AVG(length)) AS 'Média de duração', 
ROUND(MIN(length)) AS 'Duracao maxima', 
ROUND(MAX(length)) AS 'Duracao minima',
SUM(length) AS 'Tempo de exibição total',
COUNT(*) AS 'Filmes registrados' 
FROM film;