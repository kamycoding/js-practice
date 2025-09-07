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
        return todo.title.toLowerCase() === deleteItem.trim().toLowerCase();
      });
      console.log(deleteIndex);
      if (deleteIndex === -1) {
        alert("Item is not find");
      } else {
        todos.splice(deleteIndex, 1);
        alert("Successfully deleted.");
        console.log("Updated Todos -->", todos);
      }
    }
  } else {
    const changeTodo = prompt("Which todo do you want to change?");
    if (changeTodo.trim().length === 0) {
      alert("Please -> Which todo do you want to change?");
    } else {
      const foundTodo = todos.find(function (todo) {
        return todo.title.toLowerCase() === changeTodo.trim().toLowerCase();
      });
      console.log(foundTodo);
      if (foundTodo === undefined) {
        alert("...");
      } else {
        foundTodo.isDone = true;
      }
    }
  }
}
