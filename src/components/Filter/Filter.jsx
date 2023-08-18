import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <label className={css.inputLabel}>
      Find contacts by name
        <input
          className={css.input}
          type="text"
          onChange={event => {
            const action = filterContact(event.target.value);
            dispatch(action);
            }}
        />
      </label>    
    </div>
  );
};

export default Filter ;