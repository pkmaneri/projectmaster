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
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Todo callback={this.handleClick.bind(this)} />
                        </div>
                        <div className="col">
                            <TodoList x={this.state.listItem} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}