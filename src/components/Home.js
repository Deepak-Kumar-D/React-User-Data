import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextHook } from "../App";
import "../css/Home.css";

function Home() {
  const { users, userData } = useContext(contextHook);

  const deleteUser = async (id, name) => {
    await axios.delete(
      `https://609e2ac333eed80017957e36.mockapi.io/users/${id}`
    );
    alert(`${name.toUpperCase()} is deleted!`);
    users();
  };
  return (
    <section className="user-container">
      <h1>List of User(s)</h1>
      <div className="user-box">
        {userData.map((ele) => {
          return (
            <div key={ele.id} className="user-data">
              <div className="user-avatar">
                <img src={ele.avatar} alt={ele.name} />
              </div>
              <p>{ele.name}</p>

              <Link to={`/edit/${ele.id}`}>
                <button className="edit-user">Edit</button>
              </Link>

              <button
                className="delete-user"
                onClick={() => deleteUser(ele.id, ele.name)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Home;
