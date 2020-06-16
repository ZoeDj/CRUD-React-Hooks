import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";

const App = () => {
  const usersData = [
    { id: 1, name: "Luna", username: "cat#1" },
    { id: 2, name: "Sofia", username: "anime92" },
    { id: 3, name: "Mila", username: "pianist" },
  ];

  const initialFormState = { id: null, name: "" };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = user.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div class="flex-row">
        {editing ? (
          <div>
            <h3>Edit User</h3>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
            <h3>Add User</h3>
            <AddUserForm addUser={addUser} />
          </div>
        )}

        <div>
          <h3>View Users</h3>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
