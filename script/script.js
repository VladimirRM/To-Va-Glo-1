let addMessage = document.querySelector(".message"),
  addButton = document.querySelector(".add"),
  todo = document.querySelector(".todo");

let todoList = [];

addButton.addEventListener("click", function () {
  let newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false,
  };

  todoList.push(newTodo);
  console.log(todoList);
});
