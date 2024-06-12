import axios from "axios";
import { useEffect, useState } from "react"
import { API_TODOS, API_URL } from "../urls";
import { Formik, Field, Form } from "formik";
import AddTodoItemForm from "../components/AddTodoItemForm/AddTodoItemForm";
import TodoList from "../components/TodoList/TodoList";

export default function TodosPage({token}) {
  const [todos, setTodos] = useState([]);

const fetchData = async () => {
  const result = await axios.get(API_URL + API_TODOS, {
    headers: {
      'Authorization': token
    }
  });
  console.log(result);
  setTodos(result.data)
}


  useEffect(async () => {
    fetchData()

  }, []);

  return (
    <div>
      <h2>Todos Page</h2>
      <AddTodoItemForm auth={token} />
      {!todos.length && (<p>No todos available</p>)}
      {!!todos.length && <TodoList values={todos} token = {token} />}
    </div>
  )
}