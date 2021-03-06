CREATE TABLE SCHOOL(
	S_ID INT PRIMARY KEY NOT NULL,
	S_NAME CHAR(50) NOT NULL,
	S_PHONE INT NOT NULL,
	IS_ACTIVE INT NOT NULL
);
INSERT INTO SCHOOL VALUES (100, 'DPS',2233336, 1);
select * from school;


CREATE TABLE STUDENT(
	S_ID INT PRIMARY KEY NOT NULL,
	STUDENT_ID INT NOT NULL,
	STUDENT_NAME CHAR(50) NOT NULL,
	GENDER CHAR(3) NOT NULL,
	EMAIL CHAR(50) NOT NULL,
	IS_ACTIVE INT NOT NULL
);
CREATE TABLE SUBJECT(
	S_ID INT PRIMARY KEY NOT NULL,
	SUBJECT_ID INT NOT NULL,
	IS_ACTIVE INT NOT NULL,
	STUDENT_ID BIGINT REFERENCES STUDENT (S_ID),
	UNIQUE(STUDENT_ID)
);

INSERT INTO STUDENT VALUES (100, 01,'Paul', 'M', 'paul@gmail.com', 0);
INSERT INTO SUBJECT VALUES (100,11,1,100);
select * from student ;
SELECT * FROM SUBJECT;







create schema myschema;
create table myschema.company(
   ID   INT              NOT NULL,
   NAME VARCHAR (20)     NOT NULL,
   AGE  INT              NOT NULL,
   ADDRESS  CHAR (25),
   SALARY   DECIMAL (18, 2),
   PRIMARY KEY (ID)
);
select * from myschema.company;