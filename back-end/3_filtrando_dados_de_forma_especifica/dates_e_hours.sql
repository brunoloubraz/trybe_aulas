SELECT * FROM sakila.payment;

-- 
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';

-- Teste cada um dos comandos a seguir:
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo

-- 1
SELECT COUNT(payment_id) FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25';

-- 2
SELECT COUNT(payment_id) FROM sakila.payment
WHERE DATE(payment_date) BETWEEN '2005-07-01' AND '2005-08-22'; 

-- 3
SELECT DAY(rental_date), YEAR(rental_date), MONTH(rental_date), DAY(rental_date), HOUR(rental_date), MINUTE(rental_date), SECOND(rental_date) FROM sakila.rental;

-- 4 
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-28'
AND HOUR(payment_date) > 22;
