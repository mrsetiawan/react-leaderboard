import React, { Component } from 'react';
import Players from './Players';
import {Container,Col,Card} from 'react-bootstrap';
import AddPlayer from './AddPlayer';

class LeaderBoard extends Component {
  constructor(props){
    super(props)
    const PLAYERS = [
      {id:1, name:"Brendan Eich", score:45},
      {id:2, name:"Christ Latten", score:24},
      {id:3, name:"Muhamad Rahmat Setiawan", score:38},
    ];

    this.state = {
      members:PLAYERS
    }
  }

  onAddPlayer = (name) => {
    let new_member = this.state.members;
    new_member.push({id:new_member.length + 1, name:name, score:0})
    this.setState({
      name:new_member
    })
  }

  render() {
    const style = {
      card : {
        padding: '15px'
      },
      pdCostum: {
        paddingBottom: '15px'
      }
    }

    return (
      <Container>
        <Col md={{ span: 6, offset: 3 }} className='p-4'>
          <Card style={style.card}>
            <Col style={style.pdCostum} className='text-center'>
              <h3>Leader Board</h3>
            </Col>
            <Players members={this.state.members} />
            <br />
            <AddPlayer onAdd={this.onAddPlayer} />
          </Card>
        </Col>
      </Container>
    )
  }
}

export default LeaderBoard