import React from 'react';
import {Col} from 'react-materialize';
import {VictoryChart, VictoryLine} from 'victory';

const LineGraph = props => (

<Col s={12}>
<VictoryChart>
<VictoryLine
  padding={100}
  style={{
    data: { stroke: "#c43a31" },
    parent: { border: "1px solid #ccc"}
  }}
  data={[
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 }
  ]}
/>
</VictoryChart>
</Col>

)

export default LineGraph;