// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// //modifying the newTask function
// const newTask = (title, description) => {
//   taskTitles.push(title);
//   taskDescriptions.push(description);
//   taskComplete.push(false);
// };

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// const completeTask = (taskIndex) => {
//   taskComplete[taskIndex] = true;
// };

// // Print the state of a task to the console in a nice readable way
// const logTaskState = (taskIndex) => {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// };


// // DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1
// newTask("Clean the dinning area"); //task 2
// newTask("Wash the car"); //task 3

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed

// logTaskState(2);
// logTaskState(3);




//BETTER WAY TO ADD ARRAY USING OOP

// const newTask = (title, description) => {
//   const task = {
//     title: title,
//     description: description,
//     completed: false
//   };
//   return task;
// };


// //DRIVER CODE BELOW
// const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
// const task2 = newTask("Do the laundry", "😰");
// const task3 = newTask("Cook Dinner", "🧆");
// const tasks = [task1, task2, task3];

// console.log(tasks);



//THERE'S EVEN A MUCH BETTER WAY TO GROUP OUR TASK DATA. LETS START BY REFACTORING THE FUNCTION
// const newTask = (title, description) => {
//   const task = {
//     title: title,
//     description: description,
//     completed: false
//   };

//   return task;
// };
// //prints out the provided task's detail
// const logTaskState = (task) => {
//   console.log(`${task.title} has ${task.complete ? " " : "not"} been completed`);
// };
// //marks the provided task as completed
// const completeTask = (task) => {
//   task.complete = true;
// };


// //DRIVER CODE BELOW
// const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
// const task2 = newTask("Do the laundry", "😰");
// const task3 = newTask("Cook Dinner", "🧆");
// const tasks = [task1, task2, task3];

// logTaskState(task1);
// completeTask(task1);
// logTaskState(task1);

// console.log(tasks);



//THERE'S EVEN A WAY MUCH BETTER WAY
//LETS TURN THE TASK FUNCTIONS INTO TASK OBJECTS
const newTask = (title, description) => {
  const task = {
    title: title,
    description: description,
    completed: false,

    logState: () => {
      console.log(`${this.title} has ${this.complete ? " " : "not"} been completed`);
    },

    markCompleted: () => {
      this.complete = true;
    }
  };

  return task;
};


//DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do the laundry", "😰");
const task3 = newTask("Cook Dinner", "🧆");
const tasks = [task1, task2, task3];

task1.logState();
task1.markCompleted();
task1.logState();

console.log(tasks);

