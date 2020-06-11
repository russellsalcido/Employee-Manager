DROP DATABASE IF EXISTS employeeTrackerDB;
CREATE DATABASE employeeTrackerDB;

USE employeeTrackerDB;

CREATE TABLE employee (
  id INT,
  first_name VARCHAR(30) NOT NULL, -- to hold employee first name
  last_name VARCHAR(30) NOT NULL, -- to hold employee last name
  role_id INT, -- to hold reference to role employee has
  manager_id INT NULL, -- to hold reference to another employee that is the manager of the current employee. This field may be null if the employee has no manager
  PRIMARY KEY (id)
);

CREATE TABLE department (
  id INT,
  name VARCHAR(30), -- to hold department name
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT, 
  title VARCHAR(30) NOT NULL, -- to hold role title
  salary DECIMAL (10,4) NOT NULL, -- to hold role salary
  department_id INT, -- to hold reference to department role belongs to
  PRIMARY KEY (id)
);

SELECT * FROM employee;
SELECT * FROM department;
SELECT * FROM role;