import axios from 'axios';

import './App.scss';
import MainPage from './pages/MainPage';
import TodosPage from './pages/TodosPage';
import { useState } from 'react';
function App() {
  
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [token, setToken] = useState(null);
  if (localStorage.getItem("userToken")){
    setIsAuthorized(true)
  }
  
  const handleUserSignIn = (token) => {
    console.log(`I received token: ${token}`);
    setIsAuthorized(true);
    setToken(token);
    localStorage.setItem("userToken",JSON.stringify(token))
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
