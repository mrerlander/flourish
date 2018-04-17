import React, { Component } from 'react';
import {Col} from 'react-materialize';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class GoalSlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 0
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
    
    const percentLabels = {
        0: '0%',
        5: '5%',
        10: '10%'
    }

    const formatDays = value => value + ' days';

    const formatPercent = value => value + '%';

    return (
        <Col 
            className='slider'
            s={12}
            l={6}
            style={{'maxHeight': '100px'}}
        >{(this.props.goalType === 1) ? <Slider
            min={0}
            max={10}
            value={value}
            labels={percentLabels}
            format={formatPercent}
            onChange={this.handleChange}
            onChangeComplete={() => this.props.sliderComplete(value, '%')}
          /> :
        <Slider
          min={0}
          max={365}
          value={value}
          labels={labels}
          format={formatDays}
          onChange={this.handleChange}
          onChangeComplete={() => this.props.sliderComplete(value, 'days')}
        />}
        </Col>
    )
  }
}

export default GoalSlider;