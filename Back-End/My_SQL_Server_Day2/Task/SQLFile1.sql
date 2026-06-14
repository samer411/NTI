--1
SELECT * FROM Employee

--2
SELECT Fname,Lname,Salary,Dno From Employee

--3
SELECT Pname,Plocation, Departments.Dname
FROM Project 
INNER JOIN Departments
ON Project.Dnum=Departments.Dnum


--4
SELECT Concat(Fname,' ',Lname) AS Full_Name ,
Salary*12 + (Salary*1.2) AS ANNUAL_COMM
FROM Employee


--5 
SELECT  SSN,Fname,Lname
FROM Employee
WHERE Employee.Salary>1000


--6
SELECT SSN,Fname,Lname 
FROM Employee
WHERE Employee.Salary>10000


--7
SELECT Fname,Lname,Salary
from Employee
WHERE Employee.Sex = 'F'

--8 
SELECT Dnum,Dname
FROM Departments
WHERE Departments.MGRSSN=968574


--9
SELECT Pnumber,Pname,Plocation
FROM Project
WHERE Dnum != NULL

--10 
SELECT Dnum,Dname,MGRSSN,Concat(Fname,' ',Lname) AS Manager_Name
FROM Departments
INNER JOIN Employee
ON Employee.SSN = Departments.MGRSSN

--11
SELECT Dname,Project.Pname
FROM Departments
INNER JOIN Project
ON Departments.Dnum = Project.Dnum

--12
SELECT Dependent.*,Concat(Employee.Fname,' ',Employee.Lname) As Full_Name
FROM Dependent 
INNER JOIN Employee
ON Dependent.ESSN = Employee.SSN

--13
SELECT Pnumber,Pname,Plocation
FROM Project
WHERE City = 'Cairo' or City =  'Alex'

--14
SELECT *
FROM Project 
WHERE LEFT(Project.Pname,1) = 'a'
--WHERE Pname Like 'a%'

--15
SELECT *
FROM Employee
WHERE Dno=30 AND (Salary>=1000 AND Salary<=2000)




