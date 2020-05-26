import React from "react";

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

const exercises = [
  { id: 1, day: 1, exercise: "Deadlift", sets: 4, reps: [10, 8, 6, 4] },
  { id: 2, day: 1, exercise: "Pull-Ups", sets: 4, reps: [10] },
  { id: 3, day: 1, exercise: "Single Arm Dumbbell Row", sets: 4, reps: [10] },
  { id: 4, day: 1, exercise: "T-Bar Row", sets: 4, reps: [10] },
  { id: 5, day: 1, exercise: "Barbell Face Pulls", sets: 4, reps: [10] },
  {
    id: 6,
    day: 1,
    exercise: "Bent Over Lateral Raises",
    sets: 3,
    reps: [15]
  }
];

const SinglePhase = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "red" }}>
      <h2 className="m-4 d-flex justify-content-center">
        Day {workout[0].phase} - Back and Rear Deltoids
      </h2>
      <div className="d-flex col align-items-center justify-content-center">
        <table
          className="table table-hover table-bordered table-responsive table-striped table-sm"
          style={{ backgroundColor: "yellow" }}
        >
          <thead className="thead-dark col">
            <tr>
              <th style={{ width: "150px" }}>Lift</th>
              <th style={{ width: "50px" }}>Sets</th>
              <th style={{ width: "50px" }}>Reps</th>
              <th style={{ width: "50px" }}>Weight</th>
              <th style={{ width: "50px" }}>Notes</th>
            </tr>
          </thead>
          <tbody className="col">
            {exercises.map((exercise, id) => (
              <tr key={id}>
                <td className="">{exercise.exercise}</td>
                <td>{exercise.sets}</td>
                <td>{exercise.reps.join()}</td>
                <td>
                  <input></input>
                </td>
                <td>
                  <input></input>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SinglePhase;
