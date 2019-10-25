import React, { Component } from 'react';
import PlayerDetail from './PlayerDetail';

class Players extends Component {
  render() {
    return (
      <>
        {this.props.members.map(data => {
          return (
            <PlayerDetail key={data.id} name={data.name} score={data.score} />
          )
        })}
      </>
    )
  }
}

export default Players