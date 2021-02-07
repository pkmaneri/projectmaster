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
    handleClick() {
        this.props.callback(this.state.item)
    }

    render() {
        return (
            <>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={this.handleItem.bind(this)} value={this.state.item} />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleClick.bind(this)}>Add Subject</button>
                </div>
            </>
        )
    }
}