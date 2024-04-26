import {FilterState, TasksState} from './types'

export const getTasks = (state: TasksState) => state.tasks;

export const getDeletedTasks = (state: TasksState) => state.deletedTasks;

export const getFilter = (state: FilterState) => state.status;
