USE Scientists;
SELECT * FROM Scientists.Scientists;
-- 1
SELECT "This is SQL EXERCISE, Pratice and Solution";
-- 2
SELECT 1 AS one, 2 AS two, 3 as three;
-- 3
SELECT 10 + 15;
-- 4
SELECT 10 + 10 * 30 + (2 * 90/5);
-- 5
SELECT * FROM Scientists;
-- 6
SELECT * FROM Projects;
SELECT Name as "Nome do projeto", Hours as "Tempo de trabalho" from Projects;
-- 7
SELECT Name as Nomes FROM Scientists ORDER BY Nomes ASC;
-- 8
SELECT Name as Nomes from Projects ORDER BY Nomes DESC;
-- 9
Select CONCAT("O projeto ", Name, " precisou de ", Hours, " horas para ser concluido.") AS descricao
FROM Projects;
-- 10
SELECT * FROM Projects ORDER BY Hours DESC LIMIT 3;
-- 11
SELECT * FROM AssignedTo;
SELECT DISTINCT Project FROM AssignedTo;
-- 12
Select name as Nome FROM Projects ORDER BY Hours DESC LIMIT 1;
-- 13
Select name as Nome FROM Projects ORDER By Hours ASC LIMIT 1 OFFSET 1;
-- 14
SELECT * FROM Projects;
Select * FROM Projects ORDER BY Hours ASC LIMIT 5;
-- 15
SELECT CONCAT("Existem ", COUNT(*), " cientistas na tabela Scientists") from Scientists;
