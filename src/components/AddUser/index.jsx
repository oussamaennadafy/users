import React, { useState } from "react";
import classes from "./AddUser.module.css";

function AddUser({ setUsers, displayOverlay }) {
  const [userData, setUserData] = useState({
    userName: "",
    age: "",
  });

  const handleChange = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      /* validate form */
      if (!userData.userName.trim()) {
        throw new Error("please add a name", { cause: "invalid name" });
      }
      const age = Number(userData.age);
      if (age <= 0 || age >= 99) {
        throw new Error("please add a valid age", { cause: "invalid age" });
      }
      /* set users */
      setUsers((prevUsers) => {
        return [userData, ...prevUsers];
      });
      /* clear form */
      setUserData({
        userName: "",
        age: "",
      });
    } catch (err) {
      displayOverlay(err.cause, err.message);
    }
  };

  return (
    <section className={classes.section}>
      <form onSubmit={handleSubmit}>
        <label className={classes.label} htmlFor="userName">
          UserName
        </label>
        <input
          className={classes.input}
          type="text"
          name="userName"
          id="username"
          onChange={handleChange}
          value={userData.userName}
        />
        <label className={classes.label} htmlFor="age">
          Age (Years)
        </label>
        <input
          className={classes.input}
          onChange={handleChange}
          value={userData.age}
          type="number"
          name="age"
          id="age"
        />
        <button className={classes.button} type="submit">
          Add User
        </button>
      </form>
    </section>
  );
}

export default AddUser;
