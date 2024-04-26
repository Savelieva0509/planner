import Button from '../Button/Button';
import css from './Filter.module.scss';

const Filter = () => {
  return (
    <div className={css.wrapper}>
      <Button type="button">All</Button>
      <Button type="button">Active</Button>
      <Button type="button">Completed</Button>
    </div>
  );
};

export default Filter;
