import AddTodoItemForm from "../AddTodoItemForm/AddTodoItemForm";

export default function TodoList({ values = [], token}) {
  return (
    <div>
       
    <ul>
      {values.map(item => <li key={item.id}>{item.title}</li>)}
    </ul>

    </div>

  )
}