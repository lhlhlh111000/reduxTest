import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../action';
import { Action, TODO, ReducerAction} from '../interface';

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state=SHOW_ALL, action: ReducerAction): string {
    switch(action.type) {
        case SET_VISIBILITY_FILTER: 
            return action.filter;
        default:
            return state;
    }
}

function todos(state: Array<TODO> = [], action: ReducerAction): Array<TODO> {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    complete: false,
                }
            ];
        case COMPLETE_TODO:
            return state.map((todo, index) => {
                return index === action.index ? {...todo, complete: !todo.complete} : todo
            })
        default:
            return state;     
    }
}

const todoApp = combineReducers({
    todos,
    visibilityFilter,
});

export default todoApp;