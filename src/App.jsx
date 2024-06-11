import axios from 'axios';

import './App.scss';
import MainPage from './pages/MainPage';
import TodosPage from './pages/TodosPage';
import { useState, useEffect } from 'react';
function App() {
  
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenString = localStorage.getItem("userToken");
    if (tokenString) {
      const token = JSON.parse(tokenString);
      setIsAuthorized(true);
      setToken(token);
    }
  }, []);
  
  const handleUserSignIn = (token) => {
    console.log(`I received token: ${token}`);
    setIsAuthorized(true);
    setToken(token);
    
  }

  return (
    <div className="App">
      {!isAuthorized && <MainPage handleAuth={handleUserSignIn} />}
      {isAuthorized && <TodosPage token={token} />}
      {/*  */}
    </div>
  );
}

export default App;
