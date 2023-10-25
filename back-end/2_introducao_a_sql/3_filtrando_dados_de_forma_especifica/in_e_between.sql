-- in

-- 1
SELECT * FROM sakila.payment
WHERE rental_id IN (269, 239, 126, 399, 142);

-- 2
SELECT * FROM sakila.address
WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');

-- Between

-- 
SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date BETWEEN '2005-05-27' AND '2005-07-17';

-- 1
SELECT * FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;

-- 2
SELECT * FROM sakila.customer
WHERE address_id BETWEEN 172 AND 176;

-- 3
SELECT * FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01'
ORDER BY payment_date;

-- 4
SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;

-- 5
SELECT title, rating FROM sakila.film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;








