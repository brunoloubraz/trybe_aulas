USE sakila;
SELECT * FROM country;
SELECT * FROM sakila.city;

-- o ON faz com que veja os itens iguais entre as tabelas
SELECT city.city, city.country_id, country.country
FROM city AS city
INNER JOIN country AS country
ON city.country_id = country.country_id;

SELECT f.title, f.language_id, l.name
FROM film AS f
INNER JOIN language AS l
ON f.language_id = l.language_id;


-- Para fixar
-- 1
SELECT * FROM actor;
SELECT * FROM film_actor;

-- 1
SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS fullname, json_arrayagg(f.film_id)
FROM actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id
GROUP BY fullname;

-- 2
SELECT * FROM staff;
SELECT * FROM address;
SELECT CONCAT(s.first_name, ' ', s.last_name), a.address
FROM staff AS s
INNER JOIN address AS a
ON s.address_id = a.address_id;

-- 3
SELECT * FROM customer;
SELECT * FROM address;

SELECT customer_id AS id, CONCAT(c.first_name, ' ', c.last_name) AS fullname, c.email, a.address_id, a.address AS endereco
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
ORDER BY fullname DESC
LIMIT 100;

-- 4
SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM customer c
INNER JOIN address a
ON a.address_id = c.address_id
WHERE a.district = 'California'
AND c.first_name LIKE '%rene%';

-- 5
SELECT * FROM customer;
SELECT * FROM rental;

SELECT c.first_name, c.last_name, COUNT(r.customer_id)
FROM customer c
INNER JOIN rental r
ON c.customer_id = r.customer_id
WHERE active = 1
GROUP BY c.customer_id
ORDER BY first_name DESC, last_name DESC;

-- 6
SELECT * FROM payment;
SELECT * FROM staff;

SELECT s.first_name, s.last_name, AVG(p.amount)
FROM staff s
INNER JOIN payment p
ON s.staff_id = p.staff_id
WHERE YEAR(payment_date) = 2006
GROUP BY s.first_name, s.last_name; 

-- 7
SELECT * FROM actor;
SELECT * FROM film_actor;
SELECT * FROM film;

SELECT a.actor_id, a.first_name, fa.film_id, f.title
FROM actor a
INNER JOIN film_actor fa
INNER JOIN film f
ON a.actor_id = fa.actor_id AND f.film_id = fa.film_id;





