import React, { useContext } from "react";
import "./style.css";
import DirectoryContext from "../utils/DirectoryContext"

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Table() {

  const pageState = useContext(DirectoryContext)

  return (
    <table className="container">
        <tr> 
            <th>Picture</th>
            <th className="sort" onClick={event => pageState.directory = pageState.directory.sort((function(a, b) {return a.name.first > b.name.first ? 1:-1;}))}>Name ⬇️</th>
            <th className="sort" onClick={event => pageState.directory = pageState.directory.sort((function(a, b) {return a.email > b.email ? 1:-1;}))}>Email ⬇️</th>
            <th>Cell</th>
        </tr>
        {pageState.directory.map(user => (
        <tr> 
            <td><img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`}></img></td>
            <td>{`${user.name.first} ${user.name.last}`}</td>
            <td>{user.email}</td>
            <td>{user.cell}</td>
        </tr>))}
    </table>
  );
}

export default Table;