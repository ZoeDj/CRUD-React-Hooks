import React from "react";

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <td>
          <h4>Name</h4>
        </td>
        <td>
          <h4>Username</h4>
        </td>
        <td>
          <h4>Actions</h4>
        </td>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td>No Users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
