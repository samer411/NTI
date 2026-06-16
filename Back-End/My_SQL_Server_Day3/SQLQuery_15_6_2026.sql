
select * from Employee
select* from Departments

select e.fname ,e.Lname,D.Dname
from Employee e  join Departments D
on  e.Dno=D.Dnum

select e.fname ,e.Lname,D.Dname
from Employee e   left join Departments D
on  e.Dno=D.Dnum


select e.fname ,e.Lname,D.Dname
from Employee e right join Departments D
on  e.Dno=D.Dnum

select e.fname ,e.Lname,D.Dname
from Employee e full join Departments D
on  e.Dno=D.Dnum

select e.fname ,e.Lname,D.Dname
from Employee e cross join Departments D

select 
e.fname as empname,
m.fname as mangername
from Employee e
 left join Employee m
on e.Superssn=m.SSN

select e.fname,D.Dname,p.pname,w.Hours
from Employee e
join Works_for w
on e.SSN = w.ESSn
join Project p
on w.Pno=p.Pnumber
join Departments D
on e.Dno=D.Dnum

select e.fname,D.Dname,p.pname,w.Hours
from Works_for w join Project p
on p.Pnumber=w.Pno
join Employee e
on e.SSN =w.ESSn
join Departments D
on e.Dno=D.Dnum

select count(*) as totle
from Employee
 select sum(salary) as totles
 from Employee

 select min(salary) as totle ,e.Fname
 from Employee e


 select Dno, count(*) as empcount
 from employee
 group by Dno

 select Dno,  AVG(salary) as avgemp
 from Employee
 group by Dno

 select Dno,AVG(salary) as avgemp
 from Employee
 where Salary>800
 group by Dno

 select Dno,AVG(salary) as avgemp
 from Employee
 where Salary>800
 group by Dno
 having AVG(Salary)>1200
 /*
 1-from
 2*-join
 3-on
 4-where
 5-group by
 6- having
 7-select
 8- orderby
 9- top/lmit
 */
 select * from Employee e
 where exists (
 select 1
 from Works_for w
 where w.ESSn=e.SSN
 )

 select * from employee
 where salary>(select avg(salary) from employee)

 select Fname,Salary from employee 
 where Salary=(select min(Salary) from Employee)

 create nonclustered index index_emp_name on employee(fname)

 select * from Employee with (index(index_emp_name))
 where fname = 'ali'

 drop index index_emp_name on employee












 
 


