USE pixar;

SELECT * FROM box_office;
SELECT * FROM movies;

-- 1
INSERT INTO movies(title, director, year, length_minutes)
VALUES ('Monstro SA', 'Pete Docter', 2001, 92 ),
	   ('Procurando Nemo', 'John Lasseter', 2003, 107),
	   ('Os Incríveis', 'Brad Bird', 2004, 116),
	   ('WALL-E', 'Pete Docter', 2008, 104);
       
-- 2

INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
VALUES(9, 6.8, 450000000, 370000000);

-- 3 
UPDATE movies
SET director = 'Andrew Stanton'
WHERE title = 'Procurando Nemo';

-- 4
UPDATE movies
SET title = 'Ratatouille', year = 2007
WHERE id = 3;

-- 5
INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
VALUES(8, 8.5, 300000000, 250000000),
	  (10, 7.4, 460000000, 510000000),
	  (11, 9.9, 290000000, 280000000);
      
-- 6
DELETE FROM box_office
WHERE movie_id = 11;

DELETE FROM movies
WHERE title = 'WALL-E';

-- 7
DELETE FROM box_office
WHERE movie_id IN (2,9);

DELETE FROM movies
WHERE director = 'Andrew Stanton';

-- 8
SELECT * FROM box_office;
SELECT * FROM movies;
UPDATE box_office
SET rating = 8
WHERE domestic_sales > 400000000;

-- 9
UPDATE box_office
SET rating = 6
WHERE international_sales < 300000000
AND domestic_sales > 200000000;

-- 10

SELECT * FROM movies
WHERE length_minutes < 100;

DELETE FROM box_office
WHERE movie_id IN (1,6,7,8);

DELETE FROM movies
WHERE length_minutes < 100;
