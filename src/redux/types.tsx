// Тип для задачи
export interface TaskTypes {
  id: string;
  text: string;
  completed: boolean;
  deleted: boolean;
}

// Тип для состояния задач
export interface TasksState {
  tasks: TaskTypes[];
  deletedTasks: TaskTypes[]; // Добавляем новое поле для хранения удаленных задач
}


// Тип для фильтра
export type FilterStatus = 'all' | 'completed' | 'active';

// Тип для состояния фильтра
export interface FilterState {
  status: FilterStatus;
}

// Тип для всего состояния Redux
export interface RootState {
  tasks: TasksState;
  filter: FilterState;
}

