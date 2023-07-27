import { Link, NavLink, Outlet } from 'react-router-dom';
import Button from './UI/button/Button';
import { useContext } from 'react';
import { AuthContext } from '../context';

const Layout = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem('auth');
    setIsAuth(false);
  };

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/posts">Посты</NavLink>
          <NavLink to="/about">О нас</NavLink>
        </nav>
        <div>
          {isAuth ? (
            <Button onClick={logout}>Выйти</Button>
          ) : (
            <Link to="/login">
              <Button>Войти</Button>
            </Link>
          )}
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
