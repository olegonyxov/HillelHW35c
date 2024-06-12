import React, { useState } from 'react';
import axios from 'axios';
import { API_TODOS, API_URL } from '../../urls';

export default function TodoList({ values = [], auth, renew }) {
  const [editingItem, setEditingItem] = useState(null); // Состояние для отслеживания редактируемого элемента
  const [editTitle, setEditTitle] = useState(''); // Состояние для хранения изменяемого заголовка

  async function removeItem(itemID) {
      const { data } = await axios.delete(`${API_URL}${API_TODOS}/${itemID}`, {
        headers: {
          Authorization: auth,
        },
      });
      console.log(data);
      renew()
  }
  async function updateItem(itemID) {
      const { data } = await axios.put(`${API_URL}${API_TODOS}/${itemID}`, { title: editTitle }, {
        headers: {
          Authorization: auth,
        },
      });
      console.log(data);
      renew()
      setEditingItem(null);
      setEditTitle('')
    
  }

  return (
    <div>
      <ul>
        {values.map(item => (
          <li key={item.id}>
            {editingItem === item.id ? (
              <div>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <button onClick={() => updateItem(item.id)}>Save</button>
                <button onClick={() => setEditingItem(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                {item.title}{' '}
                <button onClick={() => removeItem(item.id)}>Delete</button>{' '}
                <button onClick={() => setEditingItem(item.id)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}