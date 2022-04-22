import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class Chart extends PureComponent {

  render() {
	const CustomTooltip = ({ active, payload, label }) => {
		if (active && payload && payload.length) {
		  return (
			<div className="custom-tooltip">
			  <p className="label">{`${label} : ${payload[0].value}`}</p>
			  <p className="Latitude">Latitude: {payload[0].payload['Latitude']}</p>
			  <p className="Longitude">Longitude: {payload[0].payload['Longitude']}</p>
			</div>
		  );
		}
	  
		return null;
	  };

    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={this.props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" label={{ value: "timestamp", position: 'insideBottom' }} />
          <YAxis dataKey="BPM" label={ {value: "BPM", angle: -90, position: 'insideLeft'}} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="BPM" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
