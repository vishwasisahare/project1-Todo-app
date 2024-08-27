import { useState } from "react";

function AddTodo({onNewItem}) {

  const [todoName ,setTodoItems] = useState("");   //1  name
  const [dueDate ,setDueItem] = useState("");            //2  date

  const handleNameChange = (event) =>{          //1
   setTodoItems(event.target.value);
  }
  const handleDateChange = (event) =>{                  //2
    setDueItem(event.target.value);
  }
  const handleAddButtonClicked = () =>{                        //3   add
     onNewItem(todoName, dueDate);
     setTodoItems("");
     setDueItem("");
  }
  return (
    <div className="container text-center">
    <div className="row kg-row">
      <div className="col-4">
        <input type="text" value={todoName} placeholder="Enter Todo Here" onChange={handleNameChange}></input>  
      </div>
      <div className="col-3">
        <input type="date" value={dueDate} onChange={handleDateChange}></input>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success kg-button"
        onClick={handleAddButtonClicked}  //<= anonimus function
        >
          ADD
        </button>
      </div>
    </div>
    </div>
  );
}
export default AddTodo;
