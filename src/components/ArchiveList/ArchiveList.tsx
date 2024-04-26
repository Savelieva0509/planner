import { useSelector } from 'react-redux';
import { getDeletedTasks } from '.././../redux/selectors'; // Импортируем функцию getDeletedTasks
import tasksListCss from './TasksList.module.scss';
import taskCss from './Task.module.scss';

const ArchiveList = () => {
  const deletedTasks = useSelector(getDeletedTasks); // Используем функцию getDeletedTasks
 
  return (
    <ul className={tasksListCss.list}>
      {deletedTasks.map(task => (
        <li className={tasksListCss.listItem} key={task.id}>
          <p className={taskCss.text}>{task.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default ArchiveList;