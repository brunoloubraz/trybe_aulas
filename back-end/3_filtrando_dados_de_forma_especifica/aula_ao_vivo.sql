-- Aula ao vivo
SELECT * FROM sakila.actor
WHERE first_name = 'Johnny';

SELECT * FROM sakila.film
WHERE rental_duration = 6;

SELECT * FROM sakila.film
WHERE rating = 'R'
AND rental_duration = 6;

SELECT * FROM sakila.film
WHERE (rating = 'R' OR rating = 'PG-13')
AND rental_duration = 6;

SELECT * FROM sakila.film
WHERE title IN ('AFFAIR PREJUDICE', 'AFRICAN EGG', 'AGENT TRUMAN', 'AIRPLANE SIERRA');

SELECT * FROM sakila.film
WHERE title NOT IN ('AFFAIR PREJUDICE', 'AFRICAN EGG', 'AGENT TRUMAN', 'AIRPLANE SIERRA');

SELECT * FROM sakila.actor
WHERE last_name NOT IN ('PECK', 'HACKMAN');

SELECT * FROM sakila.film
WHERE length >= 120 AND length <= 150;
SELECT * FROM sakila.film 
WHERE length BETWEEN 120 AND 150;

SELECT now();
SELECT curdate();
SELECT curtime();

Select curdate() AS data, curtime() as horas, YEAR(curdate()) AS Ano;
SELECT YEAR(NOW()), MONTH(NOW()), DAY(NOW());

SELECT * FROM sakila.film;

SELECT * FROM sakila.rental WHERE rental_date = '2005-05-26 00:00:11';
SELECT * FROM sakila.rental WHERE TIME(rental_date) = '00:07:11';
SELECT * FROM sakila.rental WHERE DATE(rental_date) = '2005/05/26';

SELECT * FROM sakila.rental
WHERE return_date BETWEEN '2005-05-26' AND '2005-06-27'
ORDER BY return_date;

SELECT * FROM sakila.actor WHERE first_name LIKE '%rey%';

SELECT * FROM sakila.actor WHERE first_name LIKE '%dra';

SELECT * FROM sakila.actor WHERE first_name LIKE 'B__';
SELECT * FROM sakila.actor WHERE first_name LIKE 'B%' AND char_length(first_name) = 3;
