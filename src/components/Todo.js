import React, { Component } from "react"

export default class Todo extends Component {
    state = {
        item: ""
    }
    handleItem(e) {
        const item = e.target.value;
        this.setState({
            item
        })
    }
    handleClick(){
        this.props.callback(this.state.item)
    }

    render() {
        return (
            <div>
                <input onChange={this.handleItem.bind(this)} value={this.state.item}></input>
                <button onClick={this.handleClick.bind(this)}>Add</button>
            </div>
        )
    }
}