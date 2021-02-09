import React, { Component } from "react"
import Todo from "./Todo";
import TodoList from "./TOdolist";
import Topic from "./Topic";
import Users from "./Users"

export default class Master extends Component {
    state = {
        listItem: []
    }
    // key  getItem .
    componentDidMount() {
        let listItem = localStorage.getItem("listItem");
        if (listItem) {
            listItem = JSON.parse(listItem)
            this.setState({
                listItem
            })
        }
    }

    handleClick(data) {
        this.setState({
            listItem: [...this.state.listItem, { subject: data, topics: [] }]
        }, () => {
            //key and value in setItem.
            localStorage.setItem("listItem", JSON.stringify(this.state.listItem));
        })
    }

    handleTopic(topicName, subject) {
        let listItem = [...this.state.listItem];

        listItem.map((subjectItem) => {
            if (subjectItem.subject == subject) {
                subjectItem.topics.push({
                    topicName: topicName,
                    switchValue: true
                })

                subjectItem.topics.sort((a, b) => b.switchValue - a.switchValue)

            }
            return subjectItem;
        });

        this.setState({
            listItem
        }, () => {
            localStorage.setItem("listItem", JSON.stringify(this.state.listItem));
        })
    }
    handleTopicSwitchValue(subject, inputTopic) {

        // console.log(subject, inputTopic)
        let listItem = [...this.state.listItem];

        listItem.map((subjectItem) => {
            if (subjectItem.subject == subject) {

                subjectItem.topics.map((topic) => {

                    if (inputTopic == topic.topicName) {
                        topic.switchValue = !topic.switchValue
                    }
                    return topic
                })

                subjectItem.topics.sort((a, b) => b.switchValue - a.switchValue)

            }
            return subjectItem;
        });

        this.setState({
            listItem
        }, () => {
            localStorage.setItem("listItem", JSON.stringify(this.state.listItem));
        })
    }


    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Users/>
                        </div>
                        <div className="col">
                            <Todo callback={this.handleClick.bind(this)} />
                            <Topic data={this.state.listItem} callback={this.handleTopic.bind(this)} />
                        </div>
                        <div className="col">
                            <TodoList data={this.state.listItem} callback={this.handleTopicSwitchValue.bind(this)} />
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

