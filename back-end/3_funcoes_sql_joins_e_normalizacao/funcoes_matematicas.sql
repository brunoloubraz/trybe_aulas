SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;

SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;

SELECT 10 MOD 3; -- 1
SELECT 10 MOD 2; -- 0
SELECT 14 MOD 3; -- 2
SELECT 13 MOD 2; -- 1
SELECT 10.5 MOD 2; -- 0.5, ou seja, 2 + 2 + 2 + 2 + 2 = 10, restando 0.5

-- div e mode
-- 1
SELECT IF(15 MOD 2 = 0, 'Par', 'Impar') AS 'Par ou Impar';

-- 2
SELECT 220 DIV 12;
SELECT ROUND(220 / 12);
-- 3
SELECT 220 MOD 12;
SELECT IF(220 MOD 12 = 0, 'NÃO', CONCAT('SIM, ', 220 MOD 12));


-- Para gerar um valor aleatório entre 0 e 1:
SELECT RAND();

-- Para gerar um valor entre 7 e 13:
SELECT ROUND(7 + (RAND() * 6));

-- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))


-- 1
SELECT ROUND(15 + (RAND()*5));

-- 2
SELECT ROUND(15.7515971, 5);

-- 3
SELECT FLOOR(39.494);

-- 4
SELECT CEIL(85.234);









