import { FilterState, RootState } from './types';

export const getTasks = (state: RootState) => state.tasks.tasks;

export const getDeletedTasks = (state: RootState) => state.tasks.deletedTasks;

export const getDeletedTasks = (state: TasksState) => state.deletedTasks;

export const getFilter = (state: FilterState) => state.status;
