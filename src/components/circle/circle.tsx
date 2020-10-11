import React from "react";

import styles from "./circle.module.scss";

export interface ICircleProps {
  size: number;
  color: string;
  title?: string;
  className?: string;
}

const Circle = (props: ICircleProps): JSX.Element => {
  return (
    <div
      className={`${styles.circle} ${props.className}`}
      style={{
        width: `${props.size}px`,
        height: `${props.size}px`,
        background: `radial-gradient(circle, transparent 40%, ${props.color} 40%)`,
      }}
    >
      {props.title && <h2 style={{ fontSize: `${props.size / 5}px` }}>{props.title}</h2>}
    </div>
  );
};

export { Circle };
