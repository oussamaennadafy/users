import React from "react";
import classes from "./Overlay.module.css";

function Overlay({ display, hideOverlay, message }) {
  return (
    display && (
      <section className={classes.container}>
        <div className={classes.card}>
          <div className={classes.card_title}>Invalid input</div>
          <div className={classes.card_body}>
            <p className={classes.card_message}>{message}</p>
            <button
              className={classes.button}
              onClick={() => hideOverlay(false)}
            >
              Okey
            </button>
          </div>
        </div>
      </section>
    )
  );
}

export default Overlay;
