import React from "react";
import {Input} from "./Input";

export class SearchForm extends React.Component {
    state = {
        value: ''
    };
    submitHandler = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
    };
    changeHandler = e => {
        const value = e.currentTarget.value;
        this.setState(state => ({...state, value}));
    };
    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <Input
                onChange={this.changeHandler}
                value={this.state.value}
                placeholder={'Search'}
                />
            </form>
        );
    };
};