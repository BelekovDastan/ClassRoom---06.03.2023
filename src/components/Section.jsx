import React from "react";
import "./Section.css";

const Section = (props) => {
  console.log(props.users.names);
  return (
    <div id="section">
      <table>
        <tr>
          <td>LastName</td>
          <td>Name</td>
          <td>Age</td>
          <td>ID</td>
        </tr>
        <tr>
          <td>{props.users.lastName}</td>
          <td>{props.users.name}</td>
          <td>{props.users.age}</td>
          <td>{props.users.id}</td>
        </tr>
      </table>
    </div>
  );
};

export default Section;
