import React, { useContext } from "react";
import DirectoryContext from "../utils/DirectoryContext";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBar(prop) {

  const directory = useContext(DirectoryContext)

  return (
    <form className="search container">
      <div className="form-group">
        <label htmlFor="user-choice">User Search:</label>
        <input
          name="user-choice"
          list="users"
          type="text"
          className="form-control"
          placeholder="Search for a User"
          id="user-choice"
        />
        <datalist id="users">
          {directory.map(user=> (
          <option value={`${user.name.first} ${user.name.last}`} key={`${user.name.first} ${user.name.last}`}/>
          ))}
        </datalist>
        
        <button type="submit" className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;