-- WHERE
SELECT * FROM sakila.payment
WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;

-- Operadores Booleanos
-- 1
SELECT * FROM sakila.customer
WHERE email = "LEONARD.SCHOFIELD@sakilacustomer.org";

-- 2
SELECT first_name FROM sakila.customer
WHERE store_id = 2 
AND active = 0
AND first_name != 'KENNETH' OR last_name != 'KENNETH'
ORDER BY first_name;

-- 3
SELECT * FROM sakila.film;
SELECT title, description, release_year, rating, replacement_cost from sakila.film
WHERE rating = 'G' OR rating = 'PG' OR rating = 'PG-13' OR rating = 'R'
AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC, title
LIMIT 100;

-- 4
SELECT COUNT(first_name) FROM sakila.customer
WHERE store_id = 1;

-- 5
SELECT * FROM sakila.customer
WHERE store_id = 1
AND active IS TRUE;

-- 6
SELECT * FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY replacement_cost ASC, title
LIMIT 50;



