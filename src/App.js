import React from 'react';
import logo from './logo.svg';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  async componentDidMount(){
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await res.json();
    this.setState({ monsters:  users});
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value});
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return(
      <div className="App">
        <SearchBox
          placeholder = 'search monsters'
          handleChange = { this.handleChange }
        />
        <CardList monsters = {filteredMonsters}></CardList>
      </div>
    )
  }
}

export default App;
