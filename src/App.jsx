import { RouterProvider } from 'react-router-dom';
import './App.css';
import { privateRouter, publiceRouter } from './router';
import { useEffect, useState } from 'react';
import { AuthContext } from './context';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(localStorage.getItem('auth'));
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <RouterProvider router={isAuth ? privateRouter : publiceRouter} />
      </AuthContext.Provider>
    </>
  );
}

export default App;
