SELECT UCASE('Oi, eu sou uma string');
SELECT LCASE('Oi, eu sou uma string');

SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');
SELECT LEFT('Oi, eu sou uma string', 3);

SELECT RIGHT('Oi, eu sou uma string', 6);
SELECT CHAR_LENGTH('Oi, eu sou uma string');

SELECT SUBSTRING('Oi, eu sou uma string', 5, 2);
SELECT SUBSTRING('Oi, eu sou uma string', 5);

SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;

-- 1
SELECT UCASE('trybe');
-- 2
SELECT REPLACE('A Internet mudou o mundo', 'Internet', 'IA');
-- 3
SELECT CHAR_LENGTH('Uma frase qualquer');
-- 4
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 12, 11);
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', -36, 10);
-- 5
SELECT LCASE('RUA NORTE 1500, RIO DE JANEIRO, BRASIL');







