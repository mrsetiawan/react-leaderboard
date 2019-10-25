import React, { Component } from 'react';
import {Col,Button,Row} from 'react-bootstrap';

class PlayerDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      score: this.props.score
    }
    this.incrementScore = this.incrementScore.bind(this);
  }

  incrementScore(){
    this.setState({
      score: this.state.score + 1
    })
  }

  decrementScore = () => {
    this.setState({
      score:this.state.score - 1
    })
  }

  render() {
    return (
      <Col>
        <Row>
          <Col md={8}>
            <p>{this.props.name}</p>
          </Col>
          <Col md={4} className='pr-0'>
            <Button variant='primary' onClick={this.decrementScore}> - </Button>
            <span className='p-3'>{this.state.score}</span>
            <Button onClick={this.incrementScore} variant='primary'> + </Button>
          </Col>
        </Row>
      </Col>
    )
  }
}

export default PlayerDetail