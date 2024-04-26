import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button/Button';
import { statusFilters } from "../../redux/constants"
import { getFilter } from '.././../redux/selectors';
import { setFilter } from '.././../redux/filterSlice';
import css from './Filter.module.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = (newFilter: string) => dispatch(setFilter(newFilter));
  return (
    <div className={css.wrapper}>
      <Button
        type="button"
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        type="button"
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        type="button"
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};

export default Filter;
