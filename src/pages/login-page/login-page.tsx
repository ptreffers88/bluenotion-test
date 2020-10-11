import React, { useEffect } from "react";
import { ReactSVG } from "react-svg";

import LoginForm from "../../components/login-form/login.form";
import logoImage from "../../assets/img/logo.svg";
import { Register } from "../../components/register/register";
import { Circle } from "../../components/circle/circle";

import styles from "./login-page.module.scss";

const LoginPage = (): JSX.Element => {
  const circles = document.querySelectorAll(".circle");
  useEffect(() => {
    setTimeout(() => {
      circles.forEach((circle) => circle.classList.add("fadeIn"));
    }, 500);
  }, [circles]);

  return (
    <div className={styles.loginPage}>
      <Circle className={`${styles.circle} ${styles.circleGreen}`} size={214} color="#70A9A1" />
      <Circle className={`${styles.circle} ${styles.circleBlue}`} size={522} color="#5972D9" />
      <Circle className={`${styles.circle} ${styles.circleOrange}`} size={600} color="#F6AE2D" />
      <Circle className={styles.circle} size={380} color="#FFFFFF" title="gym access in your pocket" />
      <LoginForm />
      <div className={styles.logo}>
        <ReactSVG src={logoImage} />
      </div>
      <div className={styles.register}>
        <Register />
      </div>
    </div>
  );
};

export { LoginPage };
