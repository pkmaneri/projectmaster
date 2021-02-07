import React, { Component } from "react"
import Todo from "./Todo";
import TodoList from "./TOdolist";
import Topic from "./Topic";

export default class Master extends Component {
    state = {
        listItem: []
    }

    componentDidMount(){
       let listItem =  localStorage.getItem("listItem");
       if (listItem){
        listItem = JSON.parse(listItem)
        this.setState({
            listItem
        })
       }
    }

    handleClick(x) {
        console.log(x);
        this.setState({
            listItem: [...this.state.listItem, { subject: x, topics: [] }]
        }, ()=>{
            localStorage.setItem("listItem",JSON.stringify( this.state.listItem));
        })
    }

    handleTopic(topic, subject) {
        let listItem = [...this.state.listItem];

        listItem.map((subjectItem) => {
            if (subjectItem.subject == subject) {
                subjectItem.topics.push(topic)
            }
            return subjectItem;
        });

        this.setState({
            listItem
        }, ()=>{
            localStorage.setItem("listItem",JSON.stringify( this.state.listItem));
        })
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Todo callback={this.handleClick.bind(this)} />
                            <Topic x={this.state.listItem} callback={this.handleTopic.bind(this)} />
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