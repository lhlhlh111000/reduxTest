import { Button } from "react-native"
import React from 'react';
import { States } from "../interface";
import { Dispatch } from "redux";
import { setVisibilityFilter, VisibilityFilters } from "../action";
import { connect } from "react-redux";

interface FilterState {
    active: boolean,
    onClick: () => void,
}

interface Props {
    filter: string
    title: string,
}

const Filter = ({active, title, onClick}: Props&FilterState) => {
    return (
        <Button
            title={title}
            onPress={onClick}
            disabled={active}
            />
    )
}

const mapStateToProps = (state: States, ownProps: Props) => ({
    active: ownProps.filter == state.visibilityFilter,
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: Props) => ({
    onClick: () => {dispatch(setVisibilityFilter(ownProps.filter))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);