DROP SCHEMA IF EXISTS pixar;
CREATE SCHEMA pixar;
USE pixar;
CREATE TABLE theater (
    id INTEGER auto_increment PRIMARY KEY NOT NULL,
    name VARCHAR(30) NOT NULL,
    location VARCHAR(30) NULL
);
CREATE TABLE movies (
    id INTEGER auto_increment PRIMARY KEY NOT NULL,
    title VARCHAR(30) NOT NULL,
    director VARCHAR(30) NULL,
    year INT NOT NULL,
    length_minutes INT NOT NULL,
    theater_id INTEGER,
    FOREIGN KEY (theater_id) REFERENCES theater (id)
);
CREATE TABLE box_office (
    movie_id INTEGER,
    FOREIGN KEY (movie_id) REFERENCES movies (id),
    rating DECIMAL(2,1) NOT NULL,
    domestic_sales INT NOT NULL,
    international_sales INT NOT NULL
);
INSERT INTO theater(name, location)
    VALUES ('Cinemark', 'São Paulo'),
        ('Brodway theater', 'Nova York'),
        ('Phoenix theater', 'Londres'),
        ('Le Champo', 'Paris'),
        ('TLC Chinese Theater', 'Los Angeles'),
        ('Regal Tikahtnu', 'Alaska');
INSERT INTO movies(title, director, year, length_minutes, theater_id)
    VALUES ('Toy Story', 'John Lasseter', 1995, 81, 1),
        ('Vida de inseto', 'Andrew Stanton', 1998, 95, 3),
        ('Ratatuille', 'Brad Bird', 2010, 115, NULL),
        ('UP', 'Pete Docter', 2009, 101, 2),
        ('Carros', 'John Lasseter', 2006, 117, NULL),
        ('Toy Story 2', 'John Lasseter', 1999, 93, 5),
        ('Valente', 'Brenda Chapman', 2012, 98, NULL),
        ('Monstros SA', 'Pete Docter', 2001, 92, NULL),
        ('Procurando Nemo', 'Jon Lasseter', 2003, 107, 4),
        ('Os Incríveis', 'Brad Bird', 2004, 116, NULL),
        ('WALL-E', 'Pete Docter', 2008, 104, NULL);
INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
    VALUES (1, 8.3, 190000000, 170000000),
      (2, 7.2, 160000000, 200600000),
      (3, 7.9, 245000000, 239000000),
      (4, 6.1, 330000000, 540000000),
      (5, 7.8, 140000000, 310000000),
      (6, 5.8, 540000000, 600000000),
      (7, 7.5, 250000000, 190000000),
      (8, 8.5, 300000000, 250000000),
      (10, 7.4, 460000000, 510000000),
      (9, 6.8, 450000000, 370000000),
      (11, 9.9, 290000000, 280000000);
      
      
-- EXERCICIOS
-- 1
SELECT * FROM box_office;
SELECT * FROM movies;

SELECT m.title, b.domestic_sales, b.international_sales
FROM movies m
INNER JOIN box_office b
ON m.id = b.movie_id;

-- 2
SELECT m.title, b.domestic_sales, b.international_sales
FROM movies m
INNER JOIN box_office b
ON m.id = b.movie_id
WHERE domestic_sales < international_sales;

-- 3
SELECT m.title, b.rating
FROM movies m
INNER JOIN box_office b
ON m.id = b.movie_id
ORDER BY rating DESC;


-- 4
SELECT * FROM box_office;
SELECT * FROM movies;
SELECT * FROM theater;

SELECT t.*, m.title, m.length_minutes, m.director
FROM theater t
LEFT JOIN movies m
ON t.id = m.theater_id
ORDER BY t.name;

-- 5
SELECT t.*, m.title, m.length_minutes, m.director
FROM theater t
RIGHT JOIN movies m
ON t.id = m.theater_id
ORDER BY t.name;

-- BONUS
-- 6
SELECT * FROM box_office;
SELECT * FROM movies;
SELECT * FROM theater;

SELECT m.* 
FROM movies m
INNER JOIN box_office b
ON m.id = b.movie_id
WHERE rating > 8 AND theater_ID IS NOT NULL;


