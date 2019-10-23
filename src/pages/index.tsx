import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "../reducer";
import { View } from "react-native";
import AddTodo from "../components/AddTodo";
import VisibleTodoList from "../components/VisibleTodoList";
import Filter from "../components/Filter";
import { VisibilityFilters } from "../action";

let store = createStore(todoApp);

export default class ReduxApp extends Component {

    render() {
        return(
            <Provider store={store}>
                <View>
                    <AddTodo/>
                    <View style={{flexDirection: 'row'}}>
                        <Filter
                            title={'全部'}
                            filter={VisibilityFilters.SHOW_ALL}
                            />
                        <Filter
                            title={'TODO'}
                            filter={VisibilityFilters.SHOW_ACTIVE}
                            />
                        <Filter
                            title={'已完成'}
                            filter={VisibilityFilters.SHOW_COMPLETED}
                            />    
                    </View>
                    <VisibleTodoList/>
                </View>
            </Provider>
        );
    }
}