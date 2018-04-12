import React from 'react';
import {VictoryPie} from 'victory';
import {Row, Col} from 'react-materialize';

const PieChart = props => (
    <Row>
        <Col 
            s={6}
            offset='s3'
        >
            <VictoryPie
            padding={50}
            colorScale={["tomato", "navy", "green" ]} 
            data={[
                { x: (props.fixed > 0) ? "Fixed" : "", y: ((props.fixed / props.revenue) * 100) },
                { x: (props.variable > 0) ? "Variable" : "", y: ((props.variable / props.revenue) * 100) },
                { x: (props.revenue > 0) ? "Profit" : "", y: (((props.revenue - props.fixed - props.variable) / props.revenue) * 100) }
              ]}/>
        </Col>
    </Row>
)

export default PieChart;