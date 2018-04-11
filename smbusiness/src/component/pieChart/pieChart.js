import React from 'react';
import {VictoryPie} from 'victory';
import {Row, Col} from 'react-materialize';

const PieChart = props => (
    <Row>
        <Col 
            s={4}
            offset='s4'
        >
            <VictoryPie />
        </Col>
    </Row>
)

export default PieChart;