import React from 'react';
import {VictoryPie} from 'victory';
import {Row, Col} from 'react-materialize';

const PieChart = props => (
    <Row>
        <Col 
            s={4}
            offset='s4'
        >
            <VictoryPie
                padding={{top: 0, right: 100, bottom: 20, left: 100}}
                colorScale={["tomato", "navy", "green" ]} 
                data={[
                    { x: (props.fixed > 0) ? "Fixed" : null, y: ((props.fixed / props.revenue) * 100)},
                    { x: (props.variable > 0) ? "Variable" : null, y: ((props.variable / props.revenue) * 100)},
                    { x: (props.revenue > 0) ? "Profit" : null, y: (((props.revenue - props.fixed - props.variable) / props.revenue) * 100)}
                ]}
            />
        </Col>
    </Row>
)

export default PieChart;