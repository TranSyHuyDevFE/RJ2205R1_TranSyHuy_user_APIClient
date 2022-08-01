import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Create() {
  const [user, setUser] = useState({
    id: " ",
    name: " ",
  });

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
        alert(` Create user ${JSON.stringify(res.data)} successfully!!!`);
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
      <Link to="/read">
        <button className="btn btn-warning">Read</button>
      </Link>

      <div className="form-group">
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter ID"
          name="id"
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
          onChange={handleOnChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={sendDataToApi}>
        Submit
      </button>
    </form>
  );
}

export default Create;
