import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '.././../redux/tasksSlice';
import Button from '../Button/Button';
import css from './TaskForm.module.scss';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTask(text));
    setText('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};

export default TaskForm;
