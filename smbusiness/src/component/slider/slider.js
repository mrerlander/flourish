import React, { Component } from 'react';
import {Col} from 'react-materialize';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class GoalSlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 30
    }
  }

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  render () {
    const { value } = this.state

    const labels = {
        0: '0 months',
        180: '~6 months',
        365: '1 year'
      }

    const formatDays = value => value + ' days'

    return (
        <Col 
            className='slider'
            s={12}
            l={6}
        >
        <Slider
          min={0}
          max={365}
          value={value}
          labels={labels}
          format={formatDays}
          onChange={this.handleChange}
        />
        </Col>
    )
  }
}

export default GoalSlider