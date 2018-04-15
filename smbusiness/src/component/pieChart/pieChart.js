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
                padding={{top: 0, right: 70, bottom: 0, left: 70}}
                colorScale={["tomato", "navy", "green" ]} 
                data={[
                    { x: (props.fixed > 0) ? "Fixed" : null, y: ((props.fixed / props.revenue) * 100)},
                    { x: (props.variable > 0) ? "Variable" : null, y: ((props.variable / props.revenue) * 100)},
                    { x: (props.revenue > 0) ? "Profit" : null, y: (((props.revenue - props.fixed - props.variable) / props.revenue) * 100)}
                ]}
            />
        </Col>
)

export default PieChart;