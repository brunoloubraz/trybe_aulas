SELECT * FROM actor;
SELECT first_name FROM sakila.actor
GROUP BY first_name;

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

SELECT rating, rental_rate, COUNT(1) as total FROM sakila.film
GROUP BY rating, rental_rate 
ORDER BY rating, rental_rate;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;


-- praticando group by
-- 1
SELECT * FROM customer;
SELECT active, COUNT(active) FROM customer
GROUP BY active;

-- 2
SELECT store_id, active, COUNT(*) FROM customer
GROUP BY store_id, active;

-- 3
SELECT * FROM film;
SELECT rating, AVG(rental_duration) AS avg_rental_duration
FROM film
GROUP BY rating
ORDER BY avg_rental_duration DESC;

-- 4
SELECT * FROM address;
SELECT district, COUNT(*) AS district_qtd
FROM address
GROUP BY district
ORDER BY district_qtd DESC;

-- exemplo meu de having
SELECT * FROM address;
SELECT district, COUNT(*) AS district_qtd
FROM address
GROUP BY district
HAVING district_qtd > 6
ORDER BY district_qtd DESC;

SELECT rating, rental_rate, COUNT(1) as total FROM sakila.film
GROUP BY rental_rate, rating
HAVING total < 70
ORDER BY rating, rental_rate;

-- para fixar
-- 1
SELECT rating, AVG(length) AS 'Média'
FROM sakila.film
GROUP BY rating
HAVING Média BETWEEN 115.0 AND 121.50
ORDER BY Média DESC;

-- 2
SELECT rating, SUM(replacement_cost) AS 'custo'
FROM sakila.film
GROUP by rating
HAVING custo > 3950.50
ORDER BY custo DESC;

