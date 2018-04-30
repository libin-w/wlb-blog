import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import IndexPage from './src/page/index.jsx';
import About from './src/page/About.jsx';
import Topic from './src/page/Topic.jsx';
import Topics from './src/page/Topics.jsx';

export default class Routers extends Component {
    render() {
        return (
            <Router basename="/chat/">
                <div>
                    <Route exact path="/" component={IndexPage} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} />
                </div>
            </Router>
        );
    }
}
