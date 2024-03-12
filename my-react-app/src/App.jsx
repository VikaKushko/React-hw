import React, { Component } from 'react';
import './App.css';

class App extends Component{
    render() {
        return(
            <ul className='list-group'>
                {React.Children.map(this.props.children, (child, index) => (
                    <li key={index} className="list-group-item">
                        {child}
                    </li>
                ))}
            </ul>



        );
    }
}

export default App;




