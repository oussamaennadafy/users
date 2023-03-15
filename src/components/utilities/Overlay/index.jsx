import React from "react";
import classes from "./Overlay.module.css";

function Overlay({ display, setDisplay, title, message }) {
  return (
    display && (
      <section className={classes.container}>
        <div className={classes.card}>
          <div className={classes.card_title}>{title}</div>
          <div className={classes.card_body}>
            <p className={classes.card_message}>{message}</p>
            <button className={classes.c} onClick={() => setDisplay(false)}>
              Okey
            </button>
          </div>
        </div>
      </section>
    )
  );
}

export default Overlay;
