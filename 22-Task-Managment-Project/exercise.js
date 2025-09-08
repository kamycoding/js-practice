// let employees = [
//   { name: "kamy", tasks: ["learn deutsch", "Learn NPM"] },
//   { name: "sog", tasks: ["learn deutsch", "learn ux"] },
//   { name: "tania", tasks: ["learn englich", "check portfolio"] },
//   { name: "shadi", tasks: ["go to gym", "learn html"] },
// ];

// const newTaskTitle = prompt("please enter your new TASK:");
// const employeeName = prompt("please enter your new Employee name:");

// if (employeeName.trim().length === 0) {
//   alert("please enter your new Employee name!");
// } else {
//   const foundEmployee = employees.find(function (employee) {
//     return employee.name === employeeName;
//   });
//   console.log(foundEmployee);
//   if (foundEmployee === undefined) {
//     alert("User not found!");
//   } else {
//     foundEmployee.tasks.push(newTaskTitle);
//     alert(
//       `Task "${newTaskTitle}" was successfully assigned to ${foundEmployee.name}.`
//     );
//     console.log("Updated Employees List -->", employees);
//   }
// }

const tasks = {
  kamy: ["html", "css", "js", "react"],
  sog: ["figma", "ui", "ux", "content create"],
  tania: ["food", "sport", "game"],
  shadi: ["love", "enjoy life", "king of life"],
};

let newTaskName = prompt("please enter your new TASK:");
let employeeName = prompt("please enter your new Employee name:");

const employeeTasks = tasks[employeeName];
if (employeeTasks === undefined) {
  alert("not found!");
} else {
  employeeTasks.push(newTaskName);
  console.log(tasks);
}
