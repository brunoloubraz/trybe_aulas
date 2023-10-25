-- Para fixar
-- 1
SELECT
    CONCAT(employee.first_name, " ", employee.last_name) AS "Nome Pessoa Colaboradora",
    CONCAT(manager.first_name, " ", manager.last_name) AS "Nome Gerente"
FROM
    hr.employees AS employee
INNER JOIN
    hr.employees AS manager 
	ON employee.manager_id = manager.employee_id
WHERE
    employee.department_id <> manager.department_id;
    
-- 2
SELECT * FROM hr.employees;
SELECT 
	CONCAT(m.first_name, ' ', m.last_name) AS 'Gerente',
	COUNT(*)
FROM hr.employees m
INNER JOIN hr.employees e
ON e.manager_id = m.manager_id
GROUP BY m.employee_id;
