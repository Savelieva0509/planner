import {FilterState, TasksState} from './types'

export const getTasks = (state: TasksState) => state.tasks;

export const getFilter = (state: FilterState) => state.status;
