import React, { Component } from "react"
import Todo from "./Todo";
import TodoList from "./TOdolist";
import Topic from "./Topic";

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
    handleClick1(data) {
        console.log(data);

    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Todo callback={this.handleClick.bind(this)} />
                            <Topic callback1={this.handleClick1.bind(this)} />
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