import { TODO } from "../interface";
import React from 'react';
import { FlatList } from "react-native";
import TodoView from "./Todos";

interface Props {
    todos: Array<TODO>,
    toggleTodo: (index: number) => void,
}

const TodoList = ({todos=[], toggleTodo}: Props) => {
    return(
        <FlatList
            data={todos}
            renderItem={({item, index}) => {
                return(
                    <TodoView
                        onclick={() => {
                            toggleTodo(index)
                        }}
                        {...item}
                        />
                )
            }}
            keyExtractor={(item, index)=> index.toString()}
            />
    )
}

export default TodoList;