import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { useSpring, animated } from "react-spring";

import logoImage from "../../assets/img/logo.svg";
import LoginForm from "../../components/login-form/login-form";
import { Register } from "../../components/register/register";
import { Circle } from "../../components/circle/circle";

import styles from "./login-page.module.scss";

const LoginPage = (): JSX.Element => {
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth });
  const mobileScreen = screenSize.width < 860;

  const propsCircleGreen = useSpring({
    top: mobileScreen ? "-5%" : "",
    left: mobileScreen ? "-25%" : "13%",
    from: { position: "absolute", top: mobileScreen ? "-10%" : "10%", left: mobileScreen ? "-30%" : "10%" },
    delay: 700,
  });
  const propsCircleBlue = useSpring({
    top: mobileScreen ? "55%" : "77%",
    left: mobileScreen ? "-10%" : "3%",
    from: { position: "absolute", top: mobileScreen ? "60%" : "70%", left: mobileScreen ? "-15%" : "7%" },
    delay: 700,
  });
  const propsCircleOrange = useSpring({
    top: mobileScreen ? "5%" : "16%",
    left: mobileScreen ? "80%" : "88%",
    from: { position: "absolute", top: mobileScreen ? "-5%" : "10%", left: mobileScreen ? "85%" : "85%" },
    delay: 700,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return (): void => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.loginPage}>
      <div className={styles.circleContainer}>
        <animated.div style={propsCircleGreen}>
          <Circle className={styles.circleGreen} size={214} color="#70A9A1" />
        </animated.div>
        <animated.div style={propsCircleBlue}>
          <Circle className={styles.circleBlue} size={522} color="#5972D9" />
        </animated.div>
        <animated.div style={propsCircleOrange}>
          <Circle className={styles.circleOrange} size={600} color="#F6AE2D" />
        </animated.div>
      </div>
      <Circle className={styles.circleWhite} size={380} color="#FFFFFF" title="gym access in your pocket" />
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
