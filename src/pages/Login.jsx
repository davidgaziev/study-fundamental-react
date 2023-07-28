import { useContext } from 'react';
import Input from '../components/UI/input/Input';
import Button from '../components/UI/button/Button';
import { AuthContext } from '../context';

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    localStorage.setItem('auth', 'true');
    setIsAuth(true);
  };

  return (
    <div style={{ width: 800, margin: '0 auto' }}>
      <form onSubmit={login}>
        <Input type="text" placeholder="Введите логин" />
        <Input type="password" placeholder="Введите пароль" />
        <Button>Войти</Button>
      </form>
    </div>
  );
};

export default Login;
