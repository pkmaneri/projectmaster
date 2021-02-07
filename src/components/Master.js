import React, { Component } from "react"
import Todo from "./Todo";
import TodoList from "./TOdolist";

export default class Master extends Component {
    state = {
        listItem: []
    }

    handleClick(x) {
        console.log(x);
        this.setState({
            listItem: [...this.state.listItem, x]
        })
    }
    render() {
        return (
            <>
                <Todo callback={this.handleClick.bind(this)} />
                <TodoList x={this.state.listItem} />
            </>
        )
    }
}