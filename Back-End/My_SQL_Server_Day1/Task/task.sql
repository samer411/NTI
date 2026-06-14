create database Company
use Company
create table Employee(
ssn int primary key,
fName nvarchar(20) not null,
lName nvarchar(20)not null,
bDate datetime,
empAddress nvarchar(100) not null,
sex nvarchar(10) not null,
superSsn int,
dno int,
foreign key (superSsn) references Employee(ssn),
)
create table Department(
	dName nvarchar(100) unique,
	dNumber int primary key,
	mgrSsn int, 
	mgrStartDate datetime,
	foreign key (mgrSsn) references Employee(ssn),
)
create table DeptLocations(
	dNumber int,
	foreign key(dNumber) references Department(dNumber),
	dLocations nvarchar(100)
)

create table Project(
	pName nvarchar(50) unique,
	pNumber int primary key,
	pLocation nvarchar(100),
	dNum int,
	foreign key (dNum) references Department(dNumber),
)
create table WorksOn(
	eSsn int,
	foreign key (eSsn) references Employee(ssn),
	pNo int,
	foreign key (pNo) references Project(pNumber),
	workHours int,

)
create table Dependent(
	eSsn int,
	foreign key (eSsn) references Employee(ssn),
	dependentName nvarchar(100) unique,
	sex nvarchar(20),
	bDate datetime,
	relationship nvarchar(20)
)
ALTER TABLE Employee
ADD CONSTRAINT fk_Employee_Department
foreign key (dno) references Department(dNumber)
