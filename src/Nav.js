import { Component } from 'react';
import NavButton from './NavButton';

import './App.css';

class Nav extends Component {

    constructor (props) {
        super(props);
    }

    render() {
      return (
        <div className="Nav">
            <div>
                <NavButton 
                    key={0} 
                    value="View BPM values" 
                    active={this.props.toggleValues[0]} 
                    onClick={() => this.props.handleClick(0)} 
                />
                <NavButton 
                    key={1} 
                    value="View Daily Graph" 
                    active={this.props.toggleValues[1]} 
                    onClick={() => this.props.handleClick(1)} 
                />
                <NavButton 
                    key={2} 
                    value="View Analysis" 
                    active={this.props.toggleValues[2]} 
                    onClick={() => this.props.handleClick(2)} 
                />
            </div>
        </div>
      );
    }
}

export default Nav;