--1
SELECT Dependent.Dependent_name,Dependent.sex
from Dependent
join Employee 
on Dependent.ESSN = Employee.SSN
where employee.sex='f'
and Dependent.Sex = 'f'
UNION
SELECT Dependent.Dependent_name,Dependent.sex
from Dependent
join Employee 
on Dependent.ESSN = Employee.SSN
where employee.sex='m'
and Dependent.Sex = 'm'
--------------------------------------------------------------------------------
--2
SELECT Project.Pname , sum(Works_for.Hours)/4
from Project 
join Works_for 
on Works_for.Pno = Project.Pnumber
group by Project.Pname

--------------------------------------------------------------------------------
--3
select Departments.*
FROM Departments
join Employee
on Departments.Dnum = Employee.Dno
where Employee.ssn = (select min(ssn) from Employee)

--------------------------------------------------------------------------------
--4
select Departments.Dname, min(salary) Min_Salary,max(salary) Max_Salary,avg(salary) Avg_Salary
from Employee
join Departments
on Departments.dnum = Employee.Dno
group by Departments.Dname

--------------------------------------------------------------------------------
--5
select concat(mgr.fname,' ',mgr.lname) full_name
from Employee emp
join Employee mgr
on mgr.ssn = emp.Superssn
where not exists(
	select 1
	from Dependent d
	where d.ESSN= mgr.ssn
)
-- another solution
select concat(fname,' ', Lname) full_name
from Employee
join (select Employee.Superssn,Dependent.ESSN from Employee
left join Dependent
on Employee.Superssn = Dependent.ESSN
where Dependent.ESSN is null) t1
on Employee.SSN = t1.Superssn
--------------------------------------------------------------------------------
--6
select d.dname, avg(salary)
from employee e
join Departments d
on e.Dno = d.Dnum
group by d.Dname
having avg(salary) > (select avg(salary) from Employee)

--------------------------------------------------------------------------------
--7
select d.dnum,p.Pname, concat(fname,' ', Lname) full_name
from Employee e
join Works_for w
on e.SSN = w.ESSn
join Project p
on p.Pnumber = w.Pno
join Departments d
on e.Dno = d.Dnum
order by d.Dnum, e.Lname,e.Fname

--------------------------------------------------------------------------------
--8
 select top 2 salary
 from (select *  from Employee  ) t1
 order by t1.salary desc

 --------------------------------------------------------------------------------
 --9
 select concat(e.fname,' ', e.Lname)  full_name
 from Employee e
 join Dependent d 
 on d.Dependent_name = concat(e.fname,' ', e.Lname)


 --------------------------------------------------------------------------------
 --10
 select e.ssn, concat(e.fname,' ', e.Lname)  full_name
 from Employee e
 where exists(
	 select 1
	 from Dependent d
	 where e.SSN = d.ESSN
)


--------------------------------------------------------------------------------
--11 
INSERT INTO Departments (Dname ,Dnum ,MGRSSN,[MGRStart DATE])
VALUES ('DEPT IT',100,112233,'2006-11-1')

--------------------------------------------------------------------------------
--12
---a
UPDATE Departments
SET MGRSSN = 968574
WHERE MGRSSN =112233

--b
INSERT INTO Employee (Fname,Lname
      ,SSN
      ,Bdate
      ,Address
      ,Sex
      ,Salary
      ,Superssn
      ,Dno)
VALUES ('Samer','Nassim',102672,'2002-12-02','Mansoura','M',10000,null,20)

UPDATE Departments
SET MGRSSN = 102672
WHERE Dnum =20


---c
INSERT INTO Employee (Fname,Lname
      ,SSN
      ,Bdate
      ,Address
      ,Sex
      ,Salary
      ,Superssn
      ,Dno)
VALUES ('AbuBakr','Mahdy',102660,'2002-09-03','Elmenya','M',9000,null,20)

UPDATE Employee
SET Superssn = 102672
WHERE SSN =102660



--------------------------------------------------------------------------------
--13
UPDATE Dependent
set ESSN = 102672
where ESSN = 223344

UPDATE Departments
SET MGRSSN = 102672
WHERE MGRSSN = 223344

UPDATE Employee
SET Superssn = 102672
WHERE Superssn = 223344

UPDATE Works_for
SET ESSn = 102672
WHERE ESSn = 223344

DELETE FROM Employee
WHERE SSN=223344

--------------------------------------------------------------------------------
--14

select Employee.*,Project.Pname
from Employee
join Departments
on Employee.Dno = Departments.Dnum
join Project
on Pname = 'Al Rabwah'

UPDATE Employee
SET Salary = Salary*1.3
FROM Employee
join Departments
on Employee.Dno = Departments.Dnum
join Project
on Pname = 'Al Rabwah'












