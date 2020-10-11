import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from "./button.module.scss";

export interface IButtonProps {
  link: string;
  title: string;
  variant?: ITypeVariant;
  onClick?: () => void;
  isExternalLink?: boolean;
}

type ITypeVariant = "primary" | "secondary" | "tertiary" | "quaternary";

const Button = (props: IButtonProps): JSX.Element => {
  const handleClick = (): void => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <>
      {props.isExternalLink ? (
        <a
          className={`${getButtonVariant(props.variant || "primary")}`}
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          {props.title}
        </a>
      ) : (
        <Link className={`${getButtonVariant(props.variant || "primary")}`} to={props.link} onClick={handleClick}>
          {props.title}
        </Link>
      )}
    </>
  );
};

const getButtonVariant = (variant: ITypeVariant) =>
  clsx(
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary,
    variant === "tertiary" && styles.tertiary,
    variant === "quaternary" && styles.quaternary
  );

export { Button };
