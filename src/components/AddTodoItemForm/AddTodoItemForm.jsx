import { Formik, Field, Form } from "formik";
import axios from "axios";
import React from 'react'
import { API_TODOS, API_URL } from "../../urls";

export default function AddTodoItemForm({ auth}) {
  const token = auth; 
  return (
    
    <div>
      <Formik
        initialValues={({
          value: ''
        })}
        onSubmit={async (values) => {
          const { data } = await axios.post(API_URL + API_TODOS, {
            title: values.value
          }, {
            headers: {
              'Authorization': (token) 
            }
          });
          console.log(data)
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
