import { TODO, States } from "../interface";
import { VisibilityFilters, completeTodo } from '../action';
import { Dispatch } from "redux";
import { connect } from "react-redux";
import TodoList from "./TodoList";

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

const getVisibleTodos = (todos: Array<TODO>, filter: string) => {
    switch(filter) {
        case SHOW_COMPLETED:
            return todos.filter(t => t.complete);
        case SHOW_ACTIVE:
            return todos.filter(t => !t.complete);
        case SHOW_ALL:
        default:
            return todos;            
    }
}

const mapStateToProps = (state: States) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleTodo: (index: number) => dispatch(completeTodo(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);