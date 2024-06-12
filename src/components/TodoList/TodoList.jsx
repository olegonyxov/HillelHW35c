import axios from "axios";
import { API_TODOS, API_URL } from "../../urls";

export default function TodoList({ values = [], auth,renew }) {
  async function removeItem(itemID) {
    try {
      const { data } = await axios.delete(`${API_URL}${API_TODOS}/${itemID}`, {
        headers: {
          'Authorization': auth 
        }
      });
      console.log(data);
      renew()
    } catch (error) {
      console.error('Error deleting todo:', error);
     
    }
  }

  return (
    <div>
      <ul>
        {values.map(item => (
          <li key={item.id}>
            {item.title} <input type="button" value="delete" onClick={() => removeItem(item.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

