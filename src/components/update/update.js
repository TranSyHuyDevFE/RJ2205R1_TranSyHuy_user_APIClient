import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Update() {
  const { userId } = useParams();
  const [user, setUser] = useState({
    id: " ",
    name: " ",
  });
  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:3001/api/users/${userId}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          throw err;
        });
    }
  }, [userId]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const sendDataToApi = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users", user)
      .then((res) => {
        alert(` Edit user ${JSON.stringify(res.data)} successfully!!!`);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <form>
      <div>
        <h3>Create CRUD</h3>
      </div>
      <div className="form-group">
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter ID"
          name="id"
          value={user.id}
          onChange={handleOnChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Name"
          name="name"
          value={user.name}
          onChange={handleOnChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={sendDataToApi}>
        Submit
      </button>
    </form>
  );
}
