import { Component } from 'react';
import TablularData from './TablularData';
import bpmInfo from './bpmInfo.json'
import Chart from './Chart';
import './App.css';

class MainDisplay extends Component {

    render() {
        const data = bpmInfo.items;

        return (
            <div className="MainDisplay">
                {this.props.currentPage === 0 ? <TablularData data = {data} /> : null}
                {this.props.currentPage === 1 ? <Chart data = {data} /> : null}
            </div>
          );
    }
}

export default MainDisplay;