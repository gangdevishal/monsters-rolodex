import "./App.css";
import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "Learning React From Udemy JS-Mastery",
      monsters: [],
      searchField:"",
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => this.setState({ monsters: users }));
  }
  handleChange = (e) =>{
    this.setState({searchField : e.target.value})
  }
  render() {
    const {monsters , searchField} = this.state;
    const searchFilter = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    const placeholder = "Search Monsters...";
    return (
      
      <div className="App">
      <h1>Monster's Rolodex</h1>
      <SearchBox placeholder={placeholder} handleChange={this.handleChange}/>
        <CardList monster={searchFilter} />
      </div>
    );
  }
}

export default App;
