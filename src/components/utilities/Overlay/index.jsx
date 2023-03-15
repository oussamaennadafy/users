import React, { useRef } from "react";
import classes from "./Overlay.module.css";

function Overlay({ display, hideOverlay, title, message }) {
  const sectionRef = useRef();
  const buttonRef = useRef();
  const handleClick = (e) => {
    if (e.target === sectionRef.current || e.target === buttonRef.current)
      hideOverlay();
  };
  return (
    display && (
      <section
        ref={sectionRef}
        onClick={handleClick}
        className={classes.container}
      >
        <div className={classes.card}>
          <div className={classes.card_title}>{title}</div>
          <div className={classes.card_body}>
            <p className={classes.card_message}>{message}</p>
            <button ref={buttonRef} className={classes.button}>
              Okey
            </button>
          </div>
        </div>
      </section>
    )
  );
}

export default Overlay;
