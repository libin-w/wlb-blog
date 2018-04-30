import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import Topic from './Topic.jsx';
export default class Topics extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.match);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h2>主题列表</h2>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/rendering`}>使用 React 渲染</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/components`}>组件</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/props-v-state`}>属性 v. 状态</Link>
                    </li>
                </ul>

                <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
                <Route exact path={this.props.match.url} render={() => <h3>请选择一个主题。</h3>} />
            </div>
        );
    }
}
