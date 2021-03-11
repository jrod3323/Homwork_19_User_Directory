import React, {useState, useEffect, Component} from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import DirectoryContext from "./components/utils/DirectoryContext";
import people from "./directory.json";

function App () {
  const [pageState, setPageState] = useState({
    directory : people,
    search:"",
  })

  useEffect(()=> {
    if(!pageState.search){
      setPageState({...pageState, directory: people})
    }else{
      setPageState({...pageState, directory: people.filter(user=> (`${user.name.first} ${user.name.last}`).toLowerCase().includes(pageState.search) === true)})
    }
  },[pageState])

    return (
            <DirectoryContext.Provider value={pageState}>
              <Header />
              <SearchBar/>
              <Table/>
            </DirectoryContext.Provider>
    );
  
}

export default App;