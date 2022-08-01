import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/api/users").then((getData) => {
      setApiData(getData.data);
    });
  });

  return (
    <div>
      <Link to="/">
        <button className="btn btn-primary">Create</button>
      </Link>
      <table className="table table-striped table-bordered" border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>
                  <Link to={`/delete/${data.id}`}>
                    <button className="btn btn-danger">Delete</button>
                  </Link>
                </td>
                <td>
                  <Link to={`/update/${data.id}`}>
                    <button className="btn btn-success">update</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
