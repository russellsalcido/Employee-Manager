USE trackerDB;
INSERT INTO department (name)
VALUES ("Accounting"), ("Engineering"),("Toilets");

INSERT INTO role (title, salary, department_id)
VALUES ("Chief Accountant", 100000, 1),
       ("Accountant", 70000, 1),
       ("Lead Engineer", 125000, 2),
       ("Engineer", 80000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bobert", "Roberson", 1, null), 
        ("Greedy", "McNasty", 2, 1),
        ("Flo", "Downs", 3, null),
        ("Salty", "Neversmile", 4, 3)