SELECT * FROM actor;
SET SQL_SAFE_UPDATES = 0;

-- 1
UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

SELECT * FROM actor
WHERE first_name = 'jules'; 

-- 2
SELECT * FROM category;
UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

-- 3
SELECT * FROM film;
UPDATE film
SET rental_rate = 25
WHERE length > 100 
AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost > 20;

--  4
UPDATE film
SET rental_rate = (
	CASE 
		WHEN length BETWEEN 0 AND 100 THEN 10
		WHEN length > 100 THEN 20
	END
);



