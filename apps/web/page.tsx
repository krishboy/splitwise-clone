"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("http://localhost:8000/users");
      const data = await res.json();
      setUsers(data.users);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user, index) => (
        <p key={index}>{user}</p>
      ))}
    </div>
  );
}