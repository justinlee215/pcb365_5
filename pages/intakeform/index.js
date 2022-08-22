import intakeform from "./intakeform.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

import Link from "next/link";

export default function Intakeform(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOTP] = useState("");
  const [definitions, setDefinitions] = useState({
    emailChecked: false,
    loginExists: false,
    loginWaiting: false,
  });

  const [error, setError] = useState({
    text: "",
    status: false,
    class: "",
  });

  const [twofa, setTwofa] = useState(false);

  const submitInitialState = {
    text: "Next",
    disabled: false,
  };
  const [submitCreds, setsubmitCreds] = useState(submitInitialState);

  function renderEmailForm() {
    return (
      <>
        <div className="row g-4">
          <h5>I want to:</h5>
          {/* <h6>Select all that apply</h6> */}
          <div className="form-group">
            <label style={{ marginBottom: "0.4rem" }}>
              Select all that apply
            </label>
            <input
              type="checkbox"
              // style={{ marginBottom: "0.3rem" }}
              // className="form-control"
              value="importToCanada"
              name="importToCanada"
              onChange={(e) => console.log("toCanada checked!")}
            />
            <label for="importToCanada">Import Into Canada</label>
          </div>
          <div className="form-group">
            <label style={{ marginBottom: "0.4rem" }}>
              Select all that apply
            </label>
            <input
              type="checkbox"
              // style={{ marginBottom: "0.3rem" }}
              // className="form-control"
              value="importToCanada"
              name="importToCanada"
              onChange={(e) => console.log("toCanada checked!")}
            />
            <label for="importToCanada">Import Into Canada</label>
          </div>
          <div className="form-group">
            <label style={{ marginBottom: "0.4rem" }}>
              Select all that apply
            </label>
            <input
              type="checkbox"
              // style={{ marginBottom: "0.3rem" }}
              // className="form-control"
              value="importToCanada"
              name="importToCanada"
              onChange={(e) => console.log("toCanada checked!")}
            />
            <label for="importToCanada">Import Into Canada</label>
          </div>
          <div className="form-group">
            <label style={{ marginBottom: "0.4rem" }}>
              Select all that apply
            </label>
            <input
              type="checkbox"
              // style={{ marginBottom: "0.3rem" }}
              // className="form-control"
              value="importToCanada"
              name="importToCanada"
              onChange={(e) => console.log("toCanada checked!")}
            />
            <label for="importToCanada">Import Into Canada</label>
          </div>
          <div className="form-group">
            <label style={{ marginBottom: "0.4rem" }}>
              Select all that apply
            </label>
            <input
              type="checkbox"
              // style={{ marginBottom: "0.3rem" }}
              // className="form-control"
              value="importToCanada"
              name="importToCanada"
              onChange={(e) => console.log("toCanada checked!")}
            />
            <label for="importToCanada">Import Into Canada</label>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="form-control btn btn-primary btn-block"
              disabled={submitCreds.disabled}
              onClick={() => console.log("hello world!")}
            ></button>
          </div>
        </div>
        <hr />
        or
        <hr />
      </>
    );
  }

  function renderAuthForm() {
    return (
      <>
        <div className="row g-2">
          <div className="form-group">
            <label>Logging in as:</label>
            <input
              type="text"
              className="form-control"
              value={email}
              disabled
              style={{ margin: "0.5rem 0" }}
            />
            <small>
              <a
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() =>
                  setDefinitions({
                    definitions,
                    emailChecked: false,
                    loginExists: false,
                    loginWaiting: false,
                  })
                }
              >
                change
              </a>
            </small>
          </div>
          <div className="form-group">
            <label style={{ margin: "0.3rem 0" }}>Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group text-center">
            <button
              type="submit"
              className="form-control btn btn-primary btn-block"
              style={{ margin: "0.5rem 0" }}
              disabled={twofa}
              onClick={async (e) => {
                e.target.disabled = true;
                await loginCreds();
                e.target.disabled = false;
              }}
            >
              Login
            </button>
          </div>
          {twofa && (
            <div className="form-group">
              <label>Six (6) Digit Two-Factor Authentication</label>
              <input
                type="text"
                className="form-control"
                value={otp}
                placeholder="000000"
                onChange={(e) => setOTP(e.target.value)}
              />
            </div>
          )}
          <a
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              marginTop: "0.6rem",
            }}
            onClick={async (e) => {
              e.target.disabled = true;
              const send = await sendMagicLink({ username: email });
              console.log(send);
              setError({
                class: "alert-info",
                text: "If the email is valid, you will receive an email shortly.",
                status: true,
              });
              e.target.disabled = false;
            }}
          >
            Send a Login link to my email (password not required)
          </a>
          <a
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              margin: "1rem 0",
            }}
            onClick={() =>
              setDefinitions({ ...definitions, emailChecked: false })
            }
          >
            Forgot Pasword
          </a>
        </div>
      </>
    );
  }

  function renderRequestQuestion() {
    return (
      <div className="form-group text-center">
        <p>
          It looks like you don&apos;t have a valid username, would you like to
          register one?
        </p>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() =>
            setDefinitions({ ...definitions, emailChecked: false })
          }
        >
          Try again
        </button>
        &nbsp;&nbsp;&nbsp;
        <Link
          href={{
            pathname: "/login/request",
            query: { username: email },
          }}
          passHref
        >
          <button type="submit" className="btn btn-primary">
            Request an Account
          </button>
        </Link>
      </div>
    );
  }

  if (props.query?.error && error.status === false) {
    // If there is an error from BE but no other errors are being shown
    if (
      (typeof props.query?.error === "string" &&
        props.query.error === "CredentialsSignin") ||
      (Array.isArray(props.query.error) &&
        props.query.error.find((e) => e === "CredentialsSignin"))
    ) {
      setError({
        class: "alert-danger",
        text: "There was a problem with your login.",
        status: true,
      });
    }
  }

  return (
    <div className={intakeform.container}>
      <Head>
        <title>Intakeform - PCB365</title>
        <meta name="description" content="CSS Big Bang" />
      </Head>
      <div className={intakeform.content}>
        <div className={intakeform.imageSection}>
          <Link href={"/"}>
            <a className={intakeform.logoimage}>
              <Image
                src="/PCB-365-logo-white-358x100.png"
                priority
                unoptimized={true}
                quality="100"
                alt="PCB Logo"
                width={286.4}
                height={80}
              />
            </a>
          </Link>
          <h4>Pacific Customs Brokers</h4>
          <p>24/7 Your Trade Process Under Control</p>
        </div>
        <div className={intakeform.loginSection}>
          <div className={intakeform.loginSection_logo}>
            <Link href={"/"}>
              <a className={intakeform.logoimage}>
                <Image
                  src="/logo_color.png"
                  unoptimized={true}
                  quality="100"
                  alt="PCB Logo"
                  width={250.9}
                  height={86.45}
                />
              </a>
            </Link>
          </div>
          <div className={intakeform.loginSection_content}>
            <div className={intakeform.loginSection_error}>
              {renderEmailForm()}
              {/* {renderAuthForm()} */}
              {/* {renderRequestQuestion()} */}
              {error.status && (
                <div className={error.class + " alert"} role="alert">
                  {error.text}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      query: "hello world!",
    },
  };
}
