CREATE DATABASE apapec_school;

USE apapec_school;

CREATE TABLE students(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100),
class VARCHAR(50),
password VARCHAR(255)
);

CREATE TABLE results(
id INT AUTO_INCREMENT PRIMARY KEY,
student_id INT,
subject VARCHAR(100),
marks INT
);
