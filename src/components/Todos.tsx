import React from 'react';
import {
    View,
    TouchableHighlight,
    Text,
} from 'react-native';

interface Props {
    onclick: () => void,
    complete: boolean,
    text: string,
}

const TodoView = ({onclick, complete, text}: Props) => {
    return(
        <TouchableHighlight
            style={{height: 56, justifyContent: 'center'}}
            onPress={onclick}>
            <Text style={{textDecorationLine: complete? 'line-through': 'none'}}>{text}</Text>    
        </TouchableHighlight>
    );
}

export default TodoView;