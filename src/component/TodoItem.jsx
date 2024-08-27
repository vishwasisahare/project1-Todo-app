function TodoItem({todoname ,tododate ,  onDeleteClick}){

  //let todoname = "Buy Milk";
  //let tododate = "4/10/2023";

  return <div className="container text-center">
  <div className="row kg-row">
  <div className="col-4">{todoname}</div>
  <div className="col-3">{tododate}</div>
  <div className="col-2">
    <button type="button" className="btn btn-danger kg-button" onClick = {() => onDeleteClick(todoname)} >
      
      Delete
    </button>
  </div>
</div>
</div>

}
export default TodoItem;