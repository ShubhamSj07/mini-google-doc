import React, { useState } from "react";
import classes from "./styles.module.scss";

const Tooltip = props => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 300);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className={classes["tooltip_wrapper"]}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && <div className={classes["tooltip"]}>{props.content}</div>}
    </div>
  );
};

export default Tooltip;
