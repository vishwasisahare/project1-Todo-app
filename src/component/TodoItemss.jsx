import TodoItem from "./TodoItem";
import Styles from "./TodoItemss.module.css";

const TodoItemss = ({todoitems ,  onDeleteClick}) =>{

  return <div className={Styles.itemscontainer}>
    {todoitems.map((item) =>(
        <TodoItem 
        key={item.name}
        todoname={item.name} tododate={item.dueDate} onDeleteClick={onDeleteClick} ></TodoItem>
    ))}
 
    
    
  </div>
}
export default TodoItemss;