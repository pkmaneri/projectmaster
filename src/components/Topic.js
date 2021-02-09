import React, { Component } from "react"

export default class Topic extends Component {
    state = {
        topic: "",
        selectValue: ""

    }
    handleTopicInput(e) {
        const topic = e.target.value;
        this.setState({
            topic
        })
    }
    handleTopic() {
        this.props.callback(this.state.topic, this.state.selectValue)
    }
    handleChange(e) {
        const selectValue = e.target.value;
        this.setState({
            selectValue
        })

    }


    render() {
        return (
            <>
                <div className="input-group">
                    <select   style={{  "text-transform": "capitalize"}}
                        onChange={this.handleChange.bind(this)}
                        value={this.state.selectValue}>
                        {this.props.x.map((item, i) => {
                            return (
                                <option key={i}>{item.subject}</option>
                            )
                        })}

                    </select>
                    <input type="text" className="form-control" aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        onChange={this.handleTopicInput.bind(this)}
                        value={this.state.topic} />
                    <button className="btn btn-outline-secondary"
                        type="button" id="button-addon2" onClick={this.handleTopic.bind(this)} >Add Topic</button>
                </div>
            </>
        )
    }
}