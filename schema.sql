DROP DATABASE IF EXISTS TwelveWeekWorkoutPlan;

CREATE DATABASE TwelveWeekWorkoutPlan;

USE TwelveWeekWorkoutPlan;

CREATE TABLE Days (
  DayID INT AUTO_INCREMENT NOT NULL,
  day_name VARCHAR(255),
  day_number INT,
  phase INT,
  PRIMARY KEY (DayID)
);

CREATE TABLE Exercises (
  ID INT AUTO_INCREMENT NOT NULL,
  Exercise VARCHAR(255),
  superset INT,
  numSets INT,
  numReps INT,
  alternate VARCHAR(255),
  notes VARCHAR(255),
  day_id INT,
  PRIMARY KEY (ID),
  FOREIGN KEY (day_id) REFERENCES Days(DayID)
);

INSERT INTO Days (phase,day_number,day_name)
VALUES (1,1,'Back & Rear Deltoids'),
(1,1,'Back & Rear Deltoids'),

INSERT INTO Exercises (superset, Exercise, numSets, numReps, alternate)
VALUES (1,'Bent Over Rows', 4, 12, null),
(1,'Flat Barbell Press',4,12,null),
(2,'Underhand Pull Downs',4,12,'chin ups'),
(2,'Incline Barbell Press',4,12,null),
(3,'Seated Cable Row',4,10,'T Bar Row'),
(3,'Alt. Cable Fly',4,10,'Alternating DB Fly'),
(4,'Back Extensions',3,12,null),
(4,'Under Hand Dumbbell Fly',3,12,null);