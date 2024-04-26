import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { Task } from './types';

const tasksInitialState: Task[] = [
  { id: "0", text: 'Do the dishes', completed: true, deleted: false },
  { id: "1", text: 'Take out the trash', completed: true, deleted: false },
  { id: "2", text: 'Clean the house', completed: false, deleted: false },
  { id: "3", text: 'Organize the closet', completed: false, deleted: true },
    { id: "4", text: 'Cook a delicious meal', completed: false, deleted: true },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<Task>) => {
        state.push(action.payload);
      },
      prepare: (text: string) => {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
            deleted: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      const idToDelete = action.payload;
      const deletedTaskIndex = state.findIndex(task => task.id === idToDelete);
      if (deletedTaskIndex !== -1) {
        const deletedTask = state.splice(deletedTaskIndex, 1)[0];
        deletedTask.deleted = true;
        state.push(deletedTask);
      }
    },
    toggleCompleted: (state, action) => {
      const idToToggle = action.payload;
      const task = state.find(task => task.id === idToToggle);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
