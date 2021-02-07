import React, { Component } from "react"

export default class Topic extends Component {


    render() {
        return (
            <>
                <div className="input-group">
                    <select name="cars" id="cars">
                        {this.props.x.map((item,i) => {
                            return (
                                <option key={i}>{item}</option>
                            )
                        })}
                        
                    </select>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add Topic</button>
                    </div>
                </div>
            </>
        )
    }
}