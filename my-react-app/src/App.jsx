import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        const { text, type } = this.props;
        const alertClass = `alert alert-${type}`;

        return (
            <div className={alertClass} role="alert">{text}</div>
        );
    }
}

export default App;
