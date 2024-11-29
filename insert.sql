-- Insert departments
INSERT INTO department (name, capacity) VALUES ('CSE', 50);
INSERT INTO department (name, capacity) VALUES ('ESE', 30);

-- Insert users
INSERT INTO employee (first_name, last_name, email, password, title, photograph_path,  department_id) VALUES ('sampath', 'kumar', 'sam@gmail.com', '123456', 'Professor','/path/to/photo1.jpg', 1);
INSERT INTO employee (first_name, last_name, email, password, title, photograph_path,  department_id) VALUES ('naval', 'kishore', 'naval@gmail.com', '1234567', 'Assistant', '/path/to/photo2.jpg', 2);


-- Insert employee salaries
INSERT INTO employee_salary ( payment_date,amount, description, eid) VALUES ('2024-11-01', 15000, 'Monthly salary', 1);
INSERT INTO employee_salary (payment_date,amount,  description, eid) VALUES ('2024-10-01', 10000, 'Monthly salary', 1);
INSERT INTO employee_salary ( payment_date,amount, description, eid) VALUES ('2024-09-01', 5000, 'Monthly salary', 1);
INSERT INTO employee_salary ( payment_date,amount, description, eid) VALUES (CURRENT_DATE, 6000, 'Monthly salary', 1);

INSERT INTO employee_salary ( payment_date,amount, description, eid) VALUES ('2024-11-01', 15000, 'Monthly salary', 2);
INSERT INTO employee_salary (payment_date,amount,  description, eid) VALUES ('2024-10-01', 11000, 'Monthly salary', 2);
INSERT INTO employee_salary ( payment_date,amount, description, eid) VALUES ('2024-09-01', 4000, 'Monthly salary', 2);
INSERT INTO employee_salary ( payment_date,amount, description, eid) VALUES (CURRENT_DATE, 6000, 'Monthly salary', 2);
