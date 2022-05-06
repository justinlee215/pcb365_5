import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import styles from "./login.module.css";

import logo from "../../public/images/logo_color.png";
import googleLogo from "../../public/images/google_logo.png";
import facebookLogo from "../../public/images/facebook_logo.png";

import { ArrowLeftCircle } from "react-bootstrap-icons";

import { useTransition, useSpring, animated } from "react-spring";
import Link from "next/link";

import { Form, Button } from "react-bootstrap";

export default function LogIn() {
  const [forgot, setForgot] = useState(false);
  const [firstTime, setFirstTime] = useState(false);

  const handleClickForgot = () => {
    setForgot((forgot) => !forgot);
  };

  const handleClickFirstTime = () => {
    setFirstTime((firstTime) => !firstTime);
  };

  const transition = useTransition(forgot, {
    from: { x: 10, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
  });

  const transition2 = useTransition(forgot, {
    from: { x: 50, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
  });

  const transition3 = useTransition(forgot, {
    from: { x: 700, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: -300, y: 0, opacity: 0 },
  });

  const transition4 = useTransition(firstTime, {
    from: { x: 700, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: -300, y: 0, opacity: 0 },
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Log in - PCB365</title>
        <meta name="description" content="CSS Big Bang" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {firstTime ? (
        <Form className={styles.form}>
          <div className={styles.upperForm}>
            <div className={styles.upperFormBackButton}>
              <ArrowLeftCircle
                onClick={handleClickFirstTime}
                className={styles.backButton}
                size={20}
                aria-label="Back Button"
              />{" "}
            </div>
            <Link href="/">
              <Image
                src={logo}
                alt="PCB Logo"
                width={125}
                height={39}
                className={styles.logo}
              />
            </Link>
            <h2>Sign up</h2>
          </div>
          <p>Please enter your infomation to sign up.</p>
          <Form.Group className="mb-12" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter address" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <a className={styles.signupButton} onClick={handleClickFirstTime}>
            <p>Log in</p>
          </a>
          <Button variant="primary" type="submit">
            <div>Continue</div>
          </Button>
          <div className={styles.or}>or </div>
          <Button
            type="submit"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              backgroundColor: "white",
              border: "1px solid #002c71",
              color: "#002c71",
            }}
          >
            <div className="buttonLogo">
              Continue with
              <Image
                src={googleLogo}
                alt="Google Logo"
                width={42}
                height={42}
                className={styles.logo}
              />
            </div>
          </Button>
          <Button
            type="submit"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              backgroundColor: "white",
              border: "1px solid #002c71",
              color: "#002c71",
            }}
          >
            <div className="buttonLogo2">
              Continue with
              <Image
                src={facebookLogo}
                alt="Facebook Logo"
                width={25}
                height={25}
                className={styles.logoFacebook}
              />
            </div>
          </Button>
        </Form>
      ) : (
        <Form className={styles.form}>
          <div className={styles.upperForm}>
            {transition((style, item) =>
              item ? (
                <animated.div
                  style={style}
                  className={styles.upperFormBackButton}
                >
                  <ArrowLeftCircle
                    onClick={handleClickForgot}
                    className={styles.backButton}
                    size={20}
                    aria-label="Back Button"
                  />{" "}
                </animated.div>
              ) : (
                ""
              )
            )}
            <Link href="/">
              <a>
                <Image
                  src={logo}
                  alt="PCB Logo"
                  width={125}
                  height={39}
                  className={styles.logo}
                />
              </a>
            </Link>
            {transition2((style, item) =>
              item ? (
                <animated.h2 style={style}>Reset your password</animated.h2>
              ) : (
                ""
              )
            )}
            {transition2((style, item) =>
              item ? "" : <animated.h2 style={style}>Log in</animated.h2>
            )}
          </div>

          {transition3((style, item) =>
            item ? (
              <animated.div>
                <p>
                  Please enter your email address. We will send you an email to
                  reset your password.
                </p>
              </animated.div>
            ) : (
              ""
            )
          )}
          <Form.Group
            className="mb-12"
            // onChange={(e) => setUser({ ...user, username: e.target.value })}
            controlId="formBasicEmail"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter address" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          {transition3((style, item) =>
            item ? (
              ""
            ) : (
              <animated.div style={style}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <a className={styles.forgotButton} onClick={handleClickForgot}>
                  <p>Forgot password?</p>
                </a>
                <a
                  className={styles.signupButton}
                  onClick={handleClickFirstTime}
                >
                  <p>Sign Up</p>
                </a>
              </animated.div>
            )
          )}

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
          {forgot ? (
            <Button variant="primary" type="submit">
              <div>Send Email</div>
            </Button>
          ) : (
            <>
              <Button variant="primary" type="submit">
                <div>Continue</div>
              </Button>
              <div className={styles.or}>or </div>
              <Button
                type="submit"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "white",
                  border: "1px solid #002c71",
                  color: "#002c71",
                }}
              >
                <div className="buttonLogo">
                  Continue with
                  <Image
                    src={googleLogo}
                    alt="Google Logo"
                    width={42}
                    height={42}
                    className={styles.logo}
                  />
                </div>
              </Button>
              <Button
                type="submit"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "white",
                  border: "1px solid #002c71",
                  color: "#002c71",
                }}
              >
                <div className="buttonLogo2">
                  Continue with
                  <Image
                    src={facebookLogo}
                    alt="Facebook Logo"
                    width={25}
                    height={25}
                    className={styles.logoFacebook}
                  />
                </div>
              </Button>
            </>
          )}
        </Form>
      )}
    </div>
  );
}
