import React, { Component } from "react"
import "./TodoList.css"

export default class TodoList extends Component {

    render() {
        return (

            <ul className="list-group">
                {this.props.data.map((item, i) => {
                    return (
                        <li className="list-group-item list-group-item-primary" key={i}>
                            <span style={{  "texttransform": "capitalize"}} >
                            {item.subject}
                            </span>
                            <ul className="list-group">
                                {item.topics.map((topic, j) => {
                                    // console.log(topic)
                                    return (
                                        <li key={j} className="list-group-item">
                                            <div className="form-check form-switch"  style={{float:"right"}} >
                                                <input className="form-check-input"  
                                                type="checkbox" 
                                                onChange={this.props.callback.bind(this, item.subject, topic.topicName)}
                                                checked={topic.switchValue}/>
                                            </div>
                                            {topic.topicName}
                                        </li>

                                    )
                                })}

                            </ul>
                        </li>

                    )
                })}
            </ul>
        )
    }
}