SELECT * FROM film_actor;
SELECT * FROM actor;

-- 1
SELECT * from actor
WHERE first_name = 'KARL';

DELETE FROM film_actor
WHERE actor_id = 12;

DELETE FROM actor
WHERE first_name = 'KARL';

-- 2
SELECT * FROM actor;

SELECT * FROM actor
WHERE first_name = 'MATTHEW';

DELETE FROM film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM actor
WHERE first_name = 'MATTHEW';

-- 3

SELECT * FROM film_text;

DELETE FROM film_text
WHERE description LIKE '%saga%';

-- 4
SELECT * FROM film_actor;
SELECT * FROM film_category;

TRUNCATE film_actor;
TRUNCATE film_category;
