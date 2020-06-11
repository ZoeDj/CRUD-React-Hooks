import React, { useState } from "react";
import UserTable from "./tables/UserTable";

const App = () => {
  const usersData = [
    { id: 1, name: "Luna", username: "cat#1" },
    { id: 2, name: "Sofia", username: "anime92" },
    { id: 3, name: "Mila", username: "pianist" },
  ];

  const [users, setUsers] = useState(usersData);

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div class="flex-row">
        <div>
          <h3>Add User</h3>
        </div>
        <div>
          <h3>View Users</h3>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;
