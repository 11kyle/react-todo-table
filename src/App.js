import React, { Component } from 'react';
import Table from './Components/Table';
import Form from './Components/Form';
import './App.css';

class App extends Component {
  state = {
    characters: [
      {
          'name': 'Charlie',
          'job': 'Janitor'
      },
      {
          'name': 'Mac',
          'job': 'Bouncer'
      },
      {
          'name': 'Dee',
          'job': 'Aspring actress'
      },
      {
          'name': 'Dennis',
          'job': 'Bartender'
      }
    ]
  };

  removeCharacter = index => {
    this.setState({
      characters: this.state.characters.filter((character, i) => {
        return i !== index;
      })
    });
  }

  onSubmit = (character) => {
    this.setState({
      characters: [...this.state.characters, character]
    });
  }

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.onSubmit}/>
        <Table
          characters={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
      </div>
    );
  }
}

export default App;
