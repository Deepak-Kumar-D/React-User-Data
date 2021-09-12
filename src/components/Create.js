import React, { useContext, useState } from "react";
import "../css/Create.css";
import axios from "axios";
import { contextHook } from "../App";
import { useHistory } from "react-router";

function Create() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [avatar, setAvatar] = useState();
  const { users } = useContext(contextHook);
  const history = useHistory();

  const createPost = async (data) => {
    data.preventDefault();
    await axios.post("https://609e2ac333eed80017957e36.mockapi.io/users", {
      name: name,
      age: age,
      avatar:
        avatar === undefined
          ? "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
          : avatar,
    });

    users();
    alert("New User Added!");
    history.push("/");
  };

  return (
    <div className="create-user">
      <h1>Create a User</h1>

      <form method="POST" onSubmit={createPost}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          placeholder="name"
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="age">Age</label>
        <input
          name="age"
          type="text"
          placeholder="age"
          onChange={(event) => setAge(event.target.value)}
        />

        <label htmlFor="image">Image Link</label>
        <input
          name="image"
          type="text"
          placeholder="image link"
          onChange={(event) => setAvatar(event.target.value)}
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default Create;
