import React, {Component} from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: [],
      searchField: ''
    };


  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ cats: users}));

  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }


  render() {
    const { cats, searchField } = this.state;
    const fileredcats = cats.filter( cat =>
       cat.name.toLowerCase().includes(searchField.toLowerCase() ));
    return (
      <div className="App">
        <h1> Cats Rolodex</h1>
        <SearchBox
        placeholder='Search cats'
        handleChange={ this.handleChange} />

        <CardList cats = {fileredcats}></CardList>

      </div>
    );
  }
}

export default App;
