let todos = [
  { id: 1, title: "Learn Javascript", isDone: false },
  { id: 2, title: "Learn NPM", isDone: false },
  { id: 3, title: "Learn Deutsch", isDone: false },
];

const userChoice = +prompt(
  "Choose Number :" +
    "\n1. ➕ Add Todo" +
    "\n2. 💥 Delete Todo" +
    "\n3. ✅ Is Done :)"
);
if (isNaN(userChoice)) {
  alert("Please type a number!");
} else if (userChoice !== 1 && userChoice !== 2 && userChoice !== 3) {
  alert("please type just 1 or 2 or 3 :)");
} else {
  if (userChoice === 1) {
    const todoName = prompt("What's your Todo's Name ? ");
    if (todoName.trim().length === 0) {
      alert("please write your todo");
    } else {
      let newTodo = {
        id: todos.length + 1,
        title: todoName,
        isDone: false,
      };
      todos.push(newTodo);
      alert("Successfully added to TODOS");
      console.log("Your Todos -->", todos);
    }
  } else if (userChoice === 2) {
    const deleteItem = prompt("Select the todo you want to delete.");
    if (deleteItem.trim().length === 0) {
      alert("please Select the todo you want to delete.");
    } else {
      const deleteIndex = todos.findIndex(function (todo) {
        return todo.title === deleteItem;
      });
      console.log(deleteIndex);
    }
  } else {
    console.log("is done");
  }
}
