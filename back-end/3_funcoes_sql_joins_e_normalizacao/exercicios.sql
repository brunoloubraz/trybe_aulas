USE hr;

-- 1
SELECT * FROM jobs;
SELECT *, MAX(max_salary) FROM jobs;

-- 2
SELECT MAX(max_salary) - MIN(min_salary) FROM jobs;

-- 3
SELECT * FROM employees;
SELECT job_id, AVG(salary)
FROM employees
GROUP BY job_id
ORDER BY salary DESC;

-- 4
SELECT SUM(salary) FROM employees;

-- 5
SELECT ROUND(MAX(salary), 2), ROUND(MIN(salary),2), ROUND(SUM(salary),2), ROUND(AVG(salary),2)
FROM employees;

-- 6
SELECT job_id,COUNT(job_id) 
FROM employees
WHERE job_id = 'IT_PROG';

-- 7
SELECT job_id, SUM(salary)
FROM employees
GROUP BY job_id
ORDER BY salary DESC;

-- 8
SELECT job_id, SUM(salary)
FROM employees
GROUP BY job_id
HAVING job_id = 'it_prog';

-- 9
SELECT job_id, AVG(salary)
FROM employees
GROUP BY job_id
HAVING job_id != 'it_prog'
ORDER BY salary DESC;

-- 10
SELECT job_id, ROUND(AVG(salary),2) AS 'Media salarial', COUNT(job_id) AS 'Pessoas'
FROM employees
GROUP BY job_id
HAVING Pessoas > 10;

-- 11
SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

-- 12
SELECT * FROM employees;
SELECT * FROM employees
WHERE CHAR_LENGTH(first_name) >= 8;

-- 13
SELECT employee_id, first_name, YEAR(hire_date)
FROM employees;

-- 14
SELECT employee_id, first_name, DAY(hire_date)
FROM employees;

-- 15
SELECT employee_id, first_name, MONTH(hire_date)
FROM employees;

-- 16
SELECT UCASE(CONCAT(first_name, ' ', last_name))
FROM employees;

-- 17
SELECT last_name, hire_date
FROM employees
WHERE hire_date LIKE '%1987-07-%';

-- 18
SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date)
FROM employees 





