import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import { getTasks, getFilter, getDeletedTasks } from '.././../redux/selectors';
import { statusFilters } from '.././../redux/constants';
import { TasksState, FilterStatus } from '.././../redux/types';
import css from './TaskList.module.scss';

const getVisibleTasks = (
  tasks: TasksState['tasks'],
  deletedTasks: TasksState['deletedTasks'],
  statusFilter: FilterStatus
) => {
  const allTasks = [...tasks, ...deletedTasks]; // Объединяем оба массива
  switch (statusFilter) {
    case statusFilters.active:
      return allTasks.filter(task => !task.completed && !task.deleted);
    case statusFilters.completed:
      return allTasks.filter(task => task.completed && !task.deleted);
    default:
      return tasks.filter(task => !task.deleted);
  }
};



const TaskList = () => {
  const tasks = useSelector(getTasks);
  const deletedTasks = useSelector(getDeletedTasks);
  const filter = useSelector(getFilter);
  console.log(filter);
  //const visibleTasks = getVisibleTasks(tasks, filter, deletedTasks);

  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
