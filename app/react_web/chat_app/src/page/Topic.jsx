import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Topic extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.params.topicId);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h3>{this.props.match.params.topicId}111</h3>
            </div>
        );
    }
}
