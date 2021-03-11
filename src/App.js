import React, {useState, useEffect, Component} from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import DirectoryContext from "./components/utils/DirectoryContext";
import people from "./directory.json"

function App () {

  const [directory, setDirectory] = useState(people)

    return (
            <DirectoryContext.Provider value={directory}>
              <Header />
              <SearchBar/>
              <Table/>
            </DirectoryContext.Provider>
    );
  
}

export default App;