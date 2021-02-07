import React, { Component } from "react"

export default class TodoList extends Component {
   
    render() {
        return (
          
            <ul className="list-group">
                {this.props.x.map((item, i) => {
                    return (
                        <li className="list-group-item list-group-item-primary" key={i}>
                            {item.subject}
                            <ul className="list-group">
                                {item.topics.map((topic) => {
                                    return (
                                        <li className="list-group-item">
                                            {topic}
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