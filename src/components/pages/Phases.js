import React from "react";
import PhaseCard from "./PhaseCard";
// import workout from "./";

const workout = [
  {
    phase: 1,
    exercises: [
      { id: 1, day: 1, exercise: "Deadlift", sets: 4, reps: [10, 8, 6, 4] },
      { id: 2, day: 1, exercise: "Pull-Ups", sets: 4, reps: 10 },
      { id: 3, day: 1, exercise: "Single Arm Dumbbell Row", sets: 4, reps: 10 },
      { id: 4, day: 1, exercise: "T-Bar Row", sets: 4, reps: 10 },
      { id: 5, day: 1, exercise: "Barbell Face Pulls", sets: 4, reps: 10 },
      {
        id: 6,
        day: 1,
        exercise: "Bent Over Lateral Raises",
        sets: 3,
        reps: 15
      },
      {
        id: 7,
        day: 2,
        exercise: "Incline Dumbbell Press",
        sets: 4,
        reps: [12, 10, 8, 8]
      },
      {
        id: 8,
        day: 2,
        exercise: "Barbell Flat Press",
        sets: 4,
        reps: [10, 8, 8, 6]
      },
      {
        id: 9,
        day: 2,
        exercise: "Landmine Press",
        sets: 4,
        reps: 10
      },
      { id: 10, day: 2, exercise: "Dumbbell Flys", sets: 3, reps: 15 },
      { id: 11, day: 2, exercise: "Dumbbell Upright Rows", sets: 4, reps: 10 },
      {
        id: 12,
        day: 2,
        exercise: "Alternating Dumbbell Front Raises",
        sets: 3,
        reps: 12
      },
      {
        id: 13,
        day: 2,
        exercise: "Lateral Raises",
        sets: 3,
        reps: 12
      }
    ],
    days: [
      { day: 1, name: "Back & Rear Deltoids" },
      { day: 2, name: "Chest & Anterior/Lateral Deltoids" },
      { day: 3, name: "Legs & Calves" },
      { day: 4, name: "Arms & Trapezius" }
    ],
    weeks: [1, 2, 3]
  },
  {
    phase: 2,
    exercises: [],
    days: [
      { day: 1, name: "Legs & Calves" },
      { day: 2, name: "Back, Trapezius, & Biceps" },
      { day: 3, name: "Chest & Triceps" },
      { day: 4, name: "Deltoids & Forearms" },
      { day: 5, name: "Legs & Calves" }
    ],
    weeks: [4, 5, 6]
  },
  {
    phase: 3,
    exercises: [],
    days: [
      { day: 1, name: "Back & Trapezius" },
      { day: 2, name: "Chest" },
      { day: 3, name: "Legs & Calves" },
      { day: 4, name: "Deltoids" },
      { day: 5, name: "Arms (Triceps, Biceps, Forearms)" }
    ],
    weeks: [7, 8, 9]
  },
  {
    phase: 4,
    exercises: [],
    days: [
      { day: 1, name: "Back & Chest" },
      { day: 2, name: "Legs" },
      { day: 3, name: "Shoulders & Trapezius" },
      { day: 4, name: "Triceps & Biceps" },
      { day: 5, name: "Legs" },
      { day: 6, name: "Chest & Back" }
    ],
    weeks: [10, 11, 12]
  }
];

const Phases = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        {workout.map((workout, id) => (
          <PhaseCard workout={workout} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Phases;
