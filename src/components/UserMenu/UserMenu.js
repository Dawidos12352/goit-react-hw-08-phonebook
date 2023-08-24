import { useAuth } from '../../hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

import css from './UserMenu.module.css';

export const UserMenu = () => {

  const dispatch = useDispatch();

  const { user } = useAuth();

  return (
    <div className={css.box}>
      <p className={css.user}>
        User: { user.name}
      </p>
      <button
        className={css.logoutBtn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        
        <span class="material-symbols-outlined">Logout</span>
      </button>
    </div>
  );
};
