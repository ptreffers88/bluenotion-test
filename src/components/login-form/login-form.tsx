import React from "react";
import { Formik, Form, Field, FormikErrors, FormikValues, ErrorMessage } from "formik";
import { ReactSVG } from "react-svg";
import { useSpring, animated } from "react-spring";

import arrowImage from "../../assets/img/arrow.svg";
import { Button } from "../button/button";

import styles from "./login-form.module.scss";

const LoginForm = (): JSX.Element => {
  const handleForgotPassword = (): void => {
    alert("Wachtwoord vergeten");
  };

  const formProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 700 });
  const circleProps = useSpring({ transform: "scale(1)", from: { transform: "scale(0)" }, delay: 700 });

  return (
    <animated.div style={formProps} className={styles.loginFormContainer}>
      <animated.span style={circleProps} className={styles.circleBg} />
      <div className={styles.loginForm}>
        <h1 className={styles.pageTitle}>
          welkom bij
          <br /> Entreo
        </h1>
        <p className={styles.description}>
          Heeft u al een account? Vul uw inloggegevens in om gebruik te maken van uw omgeving.
        </p>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors: FormikErrors<FormikValues> = {};
            if (!values.email) {
              errors.email = "Graag uw e-mailadres invullen";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = "Ongeldig e-mailadres";
            }
            if (!values.password) {
              errors.password = "Graag uw wachtwoord invullen";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={styles.email}>
                <Field type="text" name="email" placeholder="E-mailadres" />
                <ErrorMessage name="email" className={styles.error} component="div" />
              </div>

              <div className={styles.password}>
                <Field type="password" name="password" placeholder="Wachtwoord" />
                <ErrorMessage name="password" className={styles.error} component="div" />
              </div>
              <label className={styles.checkbox}>
                <Field type="checkbox" name="remeber device" />
                Onthoud deze browser
              </label>
              <div className={styles.bottomBar}>
                <Button link="" title="Wachtwoord vergeten?" variant="quaternary" onClick={handleForgotPassword} />
                <button type="submit" disabled={isSubmitting}>
                  <ReactSVG src={arrowImage} />
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </animated.div>
  );
};

export default LoginForm;
