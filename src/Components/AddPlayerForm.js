import React, { Component } from 'react';

export default class AddPlayerForm extends Component {
  constructor() {
    super();

    this.state = {
      name: ""
    };
  }
 
  render() {
    return (
      <div className="add-player-form">
        <form onSubmit = { this._onSubmit.bind(this) }>
          <input type="text" 
                  value={ this.state.name } 
                  onChange={ this._onNameChange.bind(this) } 
                  placeholder="Player Name"
          />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    ); 
  }

  _onSubmit(e) {
    e.preventDefault();

    if (this.state.name) {
      this.props.onAdd(this.state.name);
      this.setState({name: ""});
    }
  }

  _onNameChange(e) {
    this.setState({name: e.target.value});
  }
};
