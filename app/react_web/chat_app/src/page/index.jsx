import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import '../../aaa.css';
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ul>
                <li>
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/about">关于</Link>
                </li>
                <li>
                    <Link to="/topics">主题列表</Link>
                </li>
            </ul>
        );
    }
}
