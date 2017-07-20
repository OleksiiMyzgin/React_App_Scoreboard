// Libs
import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import Header from './Components/Header';
import Player from './Components/Player';
import AddPlayerForm from './Components/AddPlayerForm';

// CSS
// import './App.css';



// Component
export default class App extends Component {

  constructor() {
    super();

    this.state = {
      players: [
        { name: "JavaScript", score: 50, id: 1 },
        { name: "Angular", score: 35, id: 2 },
        { name: "React", score: 42, id: 3 },
      ],
      nextId: 4
    };
  }

  render() {
    const players = this._getPlayers() || [];

    return (
      <div className="scoreboard">

        <Header 
            title={this.props.title} 
            players={this.state.players}
        />

        <div className="players">
          { players }
        </div>

        <AddPlayerForm 
            onAdd={ this._onPlayerAdd.bind(this) }
        />

      </div>
    );
  }

  _getPlayers() {
    return this.state.players.map((player, index) => {
      return (<Player
              onScoreChange = { (delta) => { this._onScoreChange(index ,delta) }}
              onRemove={ () => { this._onRemovePlayer(index) }}
              name = { player.name }
              score = { player.score }
              key = { player.id }
                />);
    });
  }

  _onScoreChange(index, delta) {
    this.state.players[index].score += delta;
    this.setState(this.state);
  }

  _onPlayerAdd(name) {
    this.state.players.push({
      name: name,
      score: 0,
      id: this.state.nextId,
    });
    this.setState(this.state);
    this.setState({nextId: this.state.nextId + 1});
  }

  _onRemovePlayer(index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  }

}
App.propTypes = {
  title: PropTypes.string,
};
App.defaultProps = {
  title: "Scoreboard"
};


