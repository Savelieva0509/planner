import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import { getTasks, getFilter } from '.././../redux/selectors';
import { statusFilters } from '.././../redux/constants';
import { TasksState, FilterStatus } from '../../types';
import css from './TaskList.module.scss';

const getVisibleTasks = (
  tasks: TasksState['tasks'],
  statusFilter: FilterStatus
) => {
  console.log('getVisibleTasks called with:', tasks, statusFilter);
  switch (statusFilter) {
    case statusFilters.active: {
      return tasks.filter(task => !task.completed);
    }
    case statusFilters.completed: {
      return tasks.filter(task => task.completed);
    }
    default: {
      return tasks;
    }
  }
};
const TaskList = () => {
  const tasks = useSelector(getTasks);
  const filter = useSelector(getFilter);
  console.log('TaskList called with:', filter);
  const visibleTasks = getVisibleTasks(tasks, filter);

   console.log('Tasks:', tasks);
   console.log('Status filter:', statusFilters);


  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
