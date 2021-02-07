import React, { Component } from "react"

export default class TodoList extends Component {

    render() {
        return (
            <ul className="list-group">
                {this.props.x.map((item,i)=>{
                    return(
                        <li className="list-group-item"key={i}>{item}
                        </li>
                    )
                })}
            </ul>
        )
    }
}