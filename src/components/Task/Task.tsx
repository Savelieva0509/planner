import { MdClose } from 'react-icons/md';
import css from './Task.module.scss';

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type TaskProps = {
  task: Task;
};

const Task = ({ task }: TaskProps) => {
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default Task;
