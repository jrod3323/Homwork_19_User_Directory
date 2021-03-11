import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBar(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="users">User Search:</label>
        <input
        //   value={props.search}
          name="users"
          list="users"
          type="text"
          className="form-control"
          placeholder="Search for a User"
          id="users"
        />
        <datalist id="users">
            <option value="Jared Ackley" key="Jared Ackley"/>
          {/* {props.directory.map(person => (
            <option value={`${props.first} ${props.last}`} key={`${props.first} ${props.last}`} />
          ))} */}
        </datalist>
        <button type="submit" className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;