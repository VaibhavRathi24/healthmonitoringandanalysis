import { Component } from 'react';

import './App.css';

class TablularData extends Component {

    render() {
        const data = this.props.data;

        return (
            <div className="TablularData">
                <table>
                    <tr>
                        {Object.entries(data[0]).map(([key, value]) => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                {Object.entries(data[key]).map(([dictKey, value]) => (
                                    <td key={dictKey}>{value}</td>
                                ))}
                            </tr>
                        )
                    })}
                </table>
            </div>
          );
    }
}

export default TablularData;