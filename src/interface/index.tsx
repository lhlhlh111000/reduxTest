export type Action = AddTodoAction|CompleteAction|VisibilityFilterAction;
export type ReducerAction = AddTodoAction&CompleteAction&VisibilityFilterAction;

export interface AddTodoAction {
    type: string, 
    text: string,
}

export interface CompleteAction {
    type: string,
    index: number,
}

export interface VisibilityFilterAction {
    type: string,
    filter: string,
}

export interface States {
    todos: Array<TODO>,
    visibilityFilter: string,
}

export interface TODO {
    text: string,
    complete: boolean,
}