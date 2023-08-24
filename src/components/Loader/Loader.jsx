
import { ProgressBar } from 'react-loader-spinner';
import css from './Loader.module.css';



export const Loader = () => (
  <div className={css.loader}>    
  <ProgressBar
  height="80"
  width="80"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#F4442E'
  barColor = '#51E5FF'
/>
    </div>
  );
