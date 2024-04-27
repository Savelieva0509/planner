import { useSelector } from 'react-redux';
import { getTasks } from '.././../redux/selectors';
import css from './TaskCounter.module.scss';

const TaskCounter = () => {
  const tasks = useSelector(getTasks);
  const count = { active: 0, completed: 0 };

  for (const task of tasks) {
    if (task.completed) {
      count.completed += 1;
    } else {
      count.active += 1;
    }
  }
  return (
    <div>
      <p className={css.text}>
        Active: <span className={css.number}>{count.active}</span>
      </p>
      <p className={css.text}>
        Comleted: <span className={css.number}>{count.completed}</span>
      </p>
    </div>
  );
};

export default TaskCounter;
