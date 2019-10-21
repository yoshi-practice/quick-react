import React, { Component } from 'react';

class StatePractice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "REACT",
            url1: "https://github.com",
            url2: "https://twitter.com"
        };
    };

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <ul>
                    <a href={this.state.url1}>
                        <li>Git</li>
                    </a>
                    <a href={this.state.url2}>
                        <li>Twitter</li>
                    </a>
                </ul>
            </div>
        );
    }
};

export default StatePractice;