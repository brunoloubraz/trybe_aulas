-- JUNTANDO TUDO QUE VIMOS HOJE
-- 1 
SELECT * FROM sakila.film;
-- 2
SELECT title AS title, release_year AS "Ano de lançamento", rating AS classificacao FROM sakila.film;
SELECT CONCAT(title, " ", release_year, " ", rating) AS filmes FROM sakila.film;
-- 3
SELECT COUNT(film_id) FROM sakila.film;
SELECT COUNT(*) FROM sakila.film;

-- sakila actor
-- 1
SELECT * from sakila.actor;
SELECT DISTINCT last_name from sakila.actor;
-- 2
SELECT COUNT(last_name) from sakila.actor;
SELECT COUNT(DISTINCT last_name) from sakila.actor;
-- 3
SELECT * FROM sakila.actor ORDER BY last_name, first_name DESC;

-- tabela language
-- 1
SELECT * FROM sakila.language;
SELECT name FROM sakila.language LIMIT 10 OFFSET 1;
SELECT name FROM sakila.language WHERE name != 'english';

-- tabela film
-- 1
SELECT * FROM sakila.film;
SELECT title AS Titulo, release_year AS "ano de lançamento", length as duracao, rating AS "classificacao indicativa", replacement_cost AS "custo de substituicao"
FROM sakila.film ORDER BY duracao DESC, replacement_cost ASC LIMIT 20;




