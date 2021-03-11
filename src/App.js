import React, {useState, useEffect, Component} from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import directory from "./directory.json"

class App extends Component {

  state = {
    directory
  }
  
  render(){
    return (
            <div>
              <Header />
              <SearchBar/>
              <Table
                picture = {directory.picture.thumbnail}
                name = {`${directory.name.first} ${directory.name.last}`}
                email = {directory.email}
                cell = {directory.cell}
              />
            </div>
    );
  }
  
}

export default App;