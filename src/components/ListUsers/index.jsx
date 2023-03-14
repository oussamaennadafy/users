import React from "react";
import User from "./User";
import calsses from "./ListUsers.module.css";

function ListUsers({ users }) {
  return (
    <section className={calsses.section}>
      <ul className={calsses.list}>
        {users.length > 0 ? (
          users?.map(({ userName, age }, index) => {
            return <User key={index} userName={userName} age={age} />;
          })
        ) : (
          <li>no user found</li>
        )}
      </ul>
    </section>
  );
}

export default ListUsers;
