USE sakila;
SELECT * FROM sakila.actor;
SELECT * FROM staff;
SELECT * FROM store;
SELECT * FROM customer;

-- 1 e 2
INSERT INTO staff(first_name, last_name, address_id, store_id, active, username)
VALUES ('Karina', 'Macedo', 5, 2, 1, 'Karina'),
	   ('Bruno', 'Braz', 6, 2, 1, 'Bruno');
-- 3
INSERT INTO actor(first_name, last_name)
SELECT first_name, last_name
FROM customer
ORDER BY customer_id
LIMIT 5;

-- 4
SELECT * FROM category;

INSERT INTO category(name)
VALUES ('jogos'), ('aventura'), ('terror');

-- 5
SELECT * FROM store;
INSERT INTO store(manager_staff_id, address_id)
VALUES(3,3);

