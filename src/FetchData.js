import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";

function FetchData() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setusers(res.data));
  });
  return (
    <div style={{ listStyle: "none" }}>
      <h1>Fetching Data from API</h1>
      {users.map((user, key) => (
        <Table user={user} key={key}></Table>
      ))}
    </div>
  );
}

export default FetchData;
