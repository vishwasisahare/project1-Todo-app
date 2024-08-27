import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import "./App.css";
import TodoItemss from "./component/TodoItemss";
import { useState } from "react";
import WelcomeMessage from "./component/WelcomeMessage";

function App() {
  const initialTodoitems = [
    
  ];
  const [todoitems, setTodoItems] = useState(initialTodoitems); //state use

  const handleNewItem = (itemName, itemDueDate) => {
    //for using handle button
    console.log("new item Added: ${itemName} Date:${itemDueDate}");
    const newTodoItems = [                   //object ye upper wala 25
       ...todoitems, 
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems); 
  };
  

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems  = todoitems.filter(item => item.name !== todoItemName)
    setTodoItems(newTodoItems)
     console.log('Item Deleted: ${todoItemName}');
  }

  return (
    <center classNameName="todo-container">
      <AppName />
      {todoitems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <AddTodo onNewItem={handleNewItem} />
      
      <TodoItemss todoitems={todoitems} onDeleteClick ={handleDeleteItem}></TodoItemss>
    </center>
  );
}

export default App;
