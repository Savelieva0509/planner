import { FormEvent } from 'react';
import Button from '../Button/Button';
import css from './TaskForm.module.scss';

const handleSubmit = (event: FormEvent) => {
  event.preventDefault();
 const form = event.currentTarget as HTMLFormElement;
  form.reset();
};

const TaskForm = () => {
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};

export default TaskForm;
