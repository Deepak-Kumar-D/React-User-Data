import React, { useContext, useState } from "react";
import { contextHook } from "../App";
import { useParams } from "react-router";
import "../css/Create.css";
import axios from "axios";

function Edit() {
  const { id } = useParams();
  const { users, userData } = useContext(contextHook);
  const profile = userData.find((ele) => ele.id === id);
  const [name, setName] = useState(profile.name);
  const [age, setAge] = useState(profile.age);
  const [avatar, setAvatar] = useState(profile.avatar);

  const editPost = async (data) => {
    data.preventDefault();
    await axios.put(`https://609e2ac333eed80017957e36.mockapi.io/users/${id}`, {
      name: name,
      age: age,
      avatar:
        avatar === undefined
          ? "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
          : avatar,
    });

    users();
    alert("Profile Updated!");
  };
  return (
    <div className="create-user">
      <h1>{name}</h1>

      <form method="PUT" onSubmit={editPost}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          defaultValue={name}
          placeholder="name"
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="age">Age</label>
        <input
          name="age"
          type="text"
          defaultValue={age}
          placeholder="age"
          onChange={(event) => setAge(event.target.value)}
        />

        <label htmlFor="image">Image Link</label>
        <input
          name="image"
          type="text"
          defaultValue={avatar}
          placeholder="image link"
          onChange={(event) => setAvatar(event.target.value)}
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default Edit;
