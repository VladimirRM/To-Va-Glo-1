let addMessage = document.querySelector('.message'),
 addButton = document.querySelector('.add')

todoList= []

 addButton.addEventListener(click, function(){
     let newTodo = {
         todo: addMessage.value,
         checked: false,
         important: false
     }
 })
  todoList.push(newTodo) 


  function displayMessages (){
      
  }