let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "resistance",
        name: "forearm Curl",
        duration: 40,
        weight: 45,
        reps: 15,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-9),
    exercises: [
      {
        type: "resistance",
        name: "Butterfly Curls",
        duration: 30,
        weight: 65,
        reps: 15,
        sets: 5
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-8),
    exercises: [
      {
        type: "resistance",
        name: "Shoulder Press",
        duration: 30,
        weight: 65,
        reps: 10,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-7),
    exercises: [
      {
        type: "cardio",
        name: "Jump Rope",
        duration: 45,
        distance: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-6),
    exercises: [
      {
        type: "resistance",
        name: "rotational overhead push-press",
        duration: 20,
        weight: 100,
        reps: 5,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-5),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [
      {
        type: "resistance",
        name: "leg-press",
        duration: 30,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercises: [
      {
        type: "resistance",
        name: "calf-press",
        duration: 20,
        weight: 150,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [
      {
        type: "resistance",
        name: "Military Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });