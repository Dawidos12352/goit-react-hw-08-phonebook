import { logIn } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
  
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.loginForm} onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input
          className={css.loginInput}
          type="email"
          name="email"
        />
      </label>
      <label>
        Password
        <input
          className={css.loginInput}
          type="password"
          name="password"
        />
      </label>
      <button className={css.loginBtn} type="submit">
        Login
      </button>
    </form>
  );
};

