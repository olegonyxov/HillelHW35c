import axios from "axios";
import { useEffect, useState } from "react"
import { API_TODOS, API_URL } from "../urls";
import { Formik, Field, Form } from "formik";
import TodoList from "../components/TodoList/TodoList";

export default function TodosPage({token}) {
  const [todos, setTodos] = useState([]);

  useEffect(async () => {
    const result = await axios.get(API_URL + API_TODOS, {
      headers: {
        'Authorization': token
      }
    });

    console.log(result);
    setTodos(result.data)

  }, []);

  return (
    <div>
      <h2>Todos Page</h2>
      {!todos.length && (<p>No todos available</p>)}

      {!!todos.length && <TodoList values={todos} />}

      <Formik
        initialValues={({
          value: ''
        })}
        onSubmit={async (values) => {
          
          const { data } = await axios.post(API_URL + API_TODOS, {
            title: values.value
          }, {
            headers: {
              'Authorization': token
            }
          });
          console.log(data);
          setTodos([
            ...todos,
            { title: data.title, id: data.id }
          ])
        }}
      >
        <Form>
          <Field name="value" placeholder="Enter new todo value" />
          <input type="submit" value="Save" />
        </Form>
      </Formik>
    </div>
  )
}