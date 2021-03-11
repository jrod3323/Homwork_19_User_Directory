import React, { useContext } from "react";
import "./style.css";
import DirectoryContext from "../utils/DirectoryContext"

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Table() {

  const directory = useContext(DirectoryContext)

  return (
    <table className="container">
        <tr> 
            <th>Picture</th>
            <th>Name</th>
            <th>Email</th>
            <th>Cell</th>
        </tr>
        {directory.map(user => (
        <tr> 
            <th><img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`}></img></th>
            <th>{`${user.name.first} ${user.name.last}`}</th>
            <th>{user.email}</th>
            <th>{user.cell}</th>
        </tr>))}
    </table>
  );
}

export default Table;