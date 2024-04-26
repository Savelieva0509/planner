import Task from '../Task/Task';
import css from './TaskList.module.scss';

const tasksInitialState = [
  { id: 0, text: 'Do the dishes', completed: true },
  { id: 1, text: 'Take out the trash', completed: true },
  { id: 2, text: 'Clean the house', completed: false },
  { id: 3, text: 'Organize the closet', completed: false },
  { id: 4, text: 'Cook a delicious meal', completed: false },
];



const TaskList = () => {
  return (
    <ul className={css.list}>
      {tasksInitialState.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
