/* 
Name: Chris Smisek
Email: kw3503nn@go.minnstate.edu
Written: 4/19/18
Revision:
*/

Use classicmodels;

SELECT COUNT(*)
FROM employees;

SELECT DISTINCT jobTitle
FROM employees;

SELECT
    firstName,
    lastName,
    email
FROM
    employees
WHERE lastName LIKE 'm%'
ORDER BY lastName;

SELECT
    orders.orderNumber,
    prd.productCode,
    dtl.quantityOrdered
FROM
    orders
INNER JOIN orderdetails AS dtl
    ON orders.orderNumber=dtl.orderNumber
INNER JOIN products AS prd
    ON dtl.productCode=prd.productCode
ORDER BY orderNumber;

SELECT 'A field named outstandingOrder should be included in the orderdetails table to help track outstanding invoices.';

CREATE TABLE IF NOT EXISTS classicmodels.personalDay
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employeeNumber INT(11) NOT NULL,
    leaveType VARCHAR(5),
    numberTaken FLOAT
)
AS
(
    SELECT employeeNumber AS employeeNumber
    FROM employees
);

INSERT INTO personalDay (leaveType,numberTaken, employeeNumber)
VALUES 
    ('PROF', 3, 1143),
    ('PERS', 2, 1143),
    ('SICK', 1, 1401),
    ('PERS', 14, 1002),
    ('SICK', 0.5, 1216);
SELECT 'A solution would be to have one table display only total personal days, and create a new table that contains seperate instances when an employee takes personal days. The new table would include the detailed description of the reason for the personal day and the date in which it took place.';

SELECT
    pd.employeeNumber,
    emp.firstName,
    emp.lastName,
    pd.leaveType,
    pd.numberTaken AS 'Total Days'
FROM personalDay AS pd
INNER JOIN employees AS emp ON pd.employeeNumber=emp.employeeNumber
ORDER BY employeeNumber;

SELECT
    emp.employeeNumber,
    SUM(amount) AS amount
FROM customers AS cus
INNER JOIN employees AS emp
    ON emp.employeeNumber=cus.salesRepEmployeeNumber
INNER JOIN payments AS pay
    ON pay.customerNumber=cus.customerNumber
GROUP BY emp.employeeNumber
ORDER BY emp.employeeNumber;
SELECT 'The Situation: The company wants to evaluate the sales reps by gathering the amount of sales they made in dollars. Code Description: I JOINED tables; customers, employees, and payments. Summed the amount in payments, and grouped the payments by employeeNumber.';