import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Table(props) {
  return (
    <table>
        <tr> 
            <th>Picture</th>
            <th>Name</th>
            <th>Email</th>
            <th>Cell</th>
        </tr>
        <tr> 
            <th><img src={"https://randomuser.me/api/portraits/thumb/men/46.jpg"} alt={"Jared Ackley"}></img></th>
            <th>Jared Ackley</th>
            <th>jrod3323@gmail.com</th>
            <th>(419)584-6006</th>
        </tr>
    </table>
  );
}

export default Table;