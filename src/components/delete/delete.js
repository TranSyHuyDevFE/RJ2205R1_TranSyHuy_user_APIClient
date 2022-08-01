import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Delete() {
  const { userId } = useParams();
  useEffect(() => {
    if (userId) {
      axios
        .delete(`http://localhost:3001/api/users/${userId}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          throw err;
        });
    }
  }, [userId]);
  return <div>Deleted {userId}</div>;
}
