create Database Nti
use Nti

create table Administrator(
	adminId int identity (1,1) primary key,
	fullName nvarchar(100) not null,
	email nvarchar(100) unique,
	phone nvarchar(20),
)
create table Instructor(
	instId int identity(1,1) primary key,
	fullName nvarchar(100),
	phone nvarchar(20),

)
create table track(

trackId int identity(1,1) primary key,
trackName nvarchar(100) not null,
duration int,
adminId int not null ,
startdate datetime default getdate(),
enddate datetime,
foreign key(adminId) references Administrator(AdminId)
)
create table student(
stuId int identity(1,1) primary key,
fname  nvarchar(40) not null,
lname  nvarchar(40) not null,
trackId int not null,
foreign key(trackId) references track(trackId)
)


create table course(

courrseId int identity(1,1) primary key,
coursetitle nvarchar(40) not null,
Hours_rate int,
trackId int not null,
foreign key(trackId) references track(trackId),
instId int,
foreign key (instId) references instructor(instId)
)

create table tra_ins(
trackId int,
insgtid int,
primary key(trackId,insgtid),
foreign key(trackId) references track(trackId)

)
create table phone(
	phoneId int identity (1,1) primary key,
	stuId int not null,
	foreign key(stuId) references student(stuId)
)
