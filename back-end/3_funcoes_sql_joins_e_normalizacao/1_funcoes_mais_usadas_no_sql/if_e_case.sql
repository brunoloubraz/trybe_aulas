use sakila;
SELECT * FROM film;
SELECT title, IF (rental_rate > 0.99, 'CARO', 'BARATO') FROM film;

SELECT title, rental_rate,
	CASE
		WHEN rental_rate = 0.99 THEN 'BARATO'
        WHEN rental_rate = 2.99 THEN 'MÉDIO'
		WHEN rental_rate = 4.99 THEN 'CARO'
	ELSE rental_rate = 'NÃO CLASSIFICADO'
END AS  valor
FROM film
LIMIT 10;

-- 1
SELECT title, rating,IF (title = 'ACE GOLDFINGER', 'OK', 'falta assistir') AS watched from film; 

-- 2
SELECT title, rating,
	CASE
		WHEN rating = 'G' THEN 'Livre para todas as idades'
        WHEN rating = 'PG' THEN 'Maiores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Maiores de 13 anos'
        WHEN rating = 'R' THEN 'Maiores de 17 anos'
	ElSE 'Proibido para menores de idades'
END as 'grupo-alvo'
FROM film;




