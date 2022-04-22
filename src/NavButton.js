import { Component } from 'react';

import './App.css';

class NavButton extends Component {

    constructor (props) {
        super(props);
    }

    render() {

        let className;
        if (this.props.active === true) {
            className = "NavButton Activated"
        } else {
            className = "NavButton"
        }

        return (
            <div className={className} onClick={() => this.props.onClick()}>
                {this.props.value}
            </div>
        );
    }
}

export default NavButton;