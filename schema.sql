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
(1, 2,'Chest & Anterior/Lateral Deltoids'),
(1,	3,'Legs & Calves'),
(1,	4, 'Arms & Trapezius'),
(2, 1, 'Legs & Calves'),
(2, 2, 'Back, Trapezius, & Biceps'),
(2, 3, 'Chest & Triceps'),
(2, 4, 'Deltoids & Forearms'),
(2, 5, 'Legs & Calves'),
(3, 1,'Back & Trapezius'),
(3, 2,'Chest'),
(3, 3,'Legs & Calves'),
(3, 4,'Deltoids'),
(3, 5,'Arms (Triceps, Biceps, Forearms)'),
(4, 1,'Back & Chest'),
(4, 2,'Legs'),
(4, 3,'Shoulders & Trapezius'),
(4, 4,'Triceps & Biceps'),
(4, 5,'Legs'),
(4, 6,'Chest & Back');

INSERT INTO Exercises (superset, Exercise, numSets, numReps, alternate)
VALUES (1,'Bent Over Rows', 4, 12, null),
(1,'Flat Barbell Press',4,12,null),
(2,'Underhand Pull Downs',4,12,'chin ups'),
(2,'Incline Barbell Press',4,12,null),
(3,'Seated Cable Row',4,10,'T Bar Row'),
(3,'Alt. Cable Fly',4,10,'Alternating DB Fly'),
(4,'Back Extensions',3,12,null),
(4,'Under Hand Dumbbell Fly',3,12,null);

INSERT INTO Exercises (Exercise, numSets, numReps, day_id)
VALUES
	('Deadlift',4,10,1),
	('Pull-Ups',4,10,1),
	('Single Arm Dumbbell Row',4,10,1),
	('T-Bar Row',4,	10,1),
	('Barbell Face Pulls',4,12,1),
	('Bent Over Lateral Raises',3,15,1),
  ('Incline Dumbbell Press',4,12,2),
  ('Barbell Flat Press',4,10,2),
  ("Landmine Press",4,10,2),
  ('Dumbbell Flys',3,15,2),
  ('Dumbbell Upright Rows',4,10,2),
  ('Alternating Dumbbell Front Raises',3,12,2),
  ('Lateral Raises',3,12,2),
  ('Squats',4,12,3),
	('Walking Lunges',3,10,3),
	('Romanian Deadlift',4,12,3),
	('Glute Bridges',3,10,3),
	('Kettle Bell Swings',3,12,3),
	('Seated Calf Raise	',5,10,3);
