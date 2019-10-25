import React, { Component } from 'react';
import {Col,Button,InputGroup,FormControl} from 'react-bootstrap';

class AddPlayer extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
  }

  handleInput = (e) => {
    this.setState ({
      name: e.target.value
    })
  }

  addPlayer = () => {
    this.props.onAdd(this.state.name)
    this.setState({
      name:''
    })
  }

  render() {
    return(
      <Col xs={12}>
        <InputGroup className="mb-3" onChange={this.handleInput}>
          <FormControl
            placeholder="Add Player"
            aria-label="Add Player"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={this.addPlayer}>Add Player</Button>
          </InputGroup.Append>
        </InputGroup>
      </Col>
    )
  }
}

export default AddPlayer