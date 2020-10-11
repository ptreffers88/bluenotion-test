import React, { useEffect, useState } from "react";
import { Formik, Form, Field, FormikErrors, FormikValues, ErrorMessage } from "formik";
import { ReactSVG } from "react-svg";

import { Button } from "../button/button";
import arrowImage from "../../assets/img/arrow.svg";

import styles from "./login-form.module.scss";

const LoginForm = (): JSX.Element => {
  const [screenSize, setScreenSize] = useState({ height: window.innerHeight, width: window.innerWidth });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return (): void => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleForgotPassword = () => {
    alert("Wachtwoord vergeten");
  };

  return (
    <div className={styles.loginFormContainer}>
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
                {screenSize.width > 768 ? "Onthoud deze browser" : "Onthoud deze mobiel"}
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
    </div>
  );
};

export default LoginForm;
