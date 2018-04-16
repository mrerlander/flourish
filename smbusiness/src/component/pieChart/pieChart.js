import React from 'react';
import {VictoryPie} from 'victory';
import {Col} from 'react-materialize';

const PieChart = props => (
        <Col 
            s={10}
            l={4}
            offset='s1 l1'
        >
            <VictoryPie
                padding={{top: 0, right: 100, bottom: 0, left: 100}}
                colorScale={["tomato", "navy", "green", "yellow" ]} 
                data={[
                    { x: (props.fixed > 0) ? `Fixed: $${props.fixed}` : null, y: ((props.fixed / props.revenue) * 100)},
                    { x: (props.variable > 0) ? `Variable: $${props.variable}` : null, y: ((props.variable / props.revenue) * 100)},
                    { x: (props.revenue > 0) ? `Profit: $${(props.revenue - props.fixed - props.variable - props.monthlyGoal)}` : null, y: (((props.revenue - props.fixed - props.variable - props.monthlyGoal) / props.revenue) * 100)},
                    { x: (props.monthlyGoal > 0) ? `Goal: $${props.monthlyGoal}` : null, y: ((props.monthlyGoal / props.revenue) * 100)}
                ]}
            />
        </Col>
)

export default PieChart;