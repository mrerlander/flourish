import React from 'react';
import {VictoryChart, VictoryLine} from 'victory';

const LineGraph = props => (

<VictoryChart>
<VictoryLine
  style={{
    data: { stroke: "#c43a31" },
    parent: { border: "1px solid #ccc"},
  }}
  data={[
    { x: 0, y: 0 },  
    { x: 1, y: (props.monthlyGoal) },
    { x: 2, y: (props.monthlyGoal * 2) },
    { x: 3, y: (props.monthlyGoal * 3) },
    { x: 4, y: (props.monthlyGoal * 4) },
    { x: 5, y: (props.monthlyGoal * 5) },
    { x: 6, y: (props.monthlyGoal * 6) },
    { x: 7, y: (props.monthlyGoal * 7) },
    { x: 8, y: (props.monthlyGoal * 8) },
    { x: 9, y: (props.monthlyGoal * 9) },
    { x: 10, y: (props.monthlyGoal * 10) },
    { x: 11, y: (props.monthlyGoal * 11) },
    { x: 12, y: (props.monthlyGoal * 12) }
  ]}
/>
</VictoryChart>

)

export default LineGraph;