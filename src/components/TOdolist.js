import React, { Component } from "react"

export default class TodoList extends Component {

    render() {
        return (
            <ul>
                {this.props.x.map((item,i)=>{
                    return(
                        <li key={i}>{item}
                        </li>
                    )
                })}


            </ul>
        )
    }
}