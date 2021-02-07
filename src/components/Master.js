import React, { Component } from "react"
import Todo from "./Todo";
import TodoList from "./TOdolist";
import Topic from "./Topic";

export default class Master extends Component {
    state = {
        listItem: [
            {
                topics: ["hoc"],
                subject: "react"
            },
            {
                topics: ["flexbox"],
                subject: "css"
            }

        ]
    }

    handleClick(x) {
        console.log(x);
        this.setState({
            listItem: [...this.state.listItem, { subject: x, topics: []}]
        })
    }
   
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Todo callback={this.handleClick.bind(this)} />
                            <Topic x={this.state.listItem} />
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