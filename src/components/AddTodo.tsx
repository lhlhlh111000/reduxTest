import { View, Button } from "react-native";
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from "../action";
import { Dispatch } from "redux";
import { Action } from "../interface";

interface Props {
    dispatch: Dispatch<Action>
}

const AddTodoView = ({dispatch}: Props) => {
    return(
        <Button
            onPress={() => {
                dispatch(addTodo('这是一条TODO'));
            }}
            title={'添加TODO'}
            />
    )
}

export default connect()(AddTodoView);