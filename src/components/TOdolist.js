import React, { Component } from "react"

export default class TodoList extends Component {

    render() {
        return (
            <div>
                {this.props.x.map((item,i)=>{
                    return(
                        <div key={i}>{item}
                        </div>
                    )
                })}


            </div>
        )
    }
}