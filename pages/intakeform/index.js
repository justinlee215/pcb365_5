import intakeform from "./intakeform.module.css";
import { Form, Button, ProgressBar } from "react-bootstrap";
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

import { apiAddress } from "../../utils/apiAddress";

import data from "./DataIntakeform.js";

import axios from "axios";

import Input from "../../components/Input";
import Radio from "../../components/Radio";
import Select from "../../components/Select";

import Link from "next/link";

export default function Intakeform(props) {
  console.log("data", data);
  const [answer, setAnswer] = useState("");
  const [intakeform, setIntakeform] = useState({});

  const questionQuantity = 10;
  const [step, setStep] = useState(0);
  const [pageQuantity, setPageQuantity] = useState(questionQuantity);

  // const sessionData = localStorage.setItem("intakeform");
  // const sessionDataObject = JSON.parse(sessionData);

  useEffect(() => {
    console.log("answer: ", answer);
  }, [answer]);

  useEffect(() => {
    console.log("intakeform: ", intakeform);
  }, [intakeform]);

  useEffect(function mount() {
    function onScroll() {
      console.log("scroll!");
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const handleChange = (e) => {
    setAnswer(e.target.value);
    setIntakeform({ ...intakeform, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit clicked");

    //update sessionStorage
    if (sessionDataObject) {
      // sessionDataObject.intakeform = intakeform;
      // await sessionStorage.setItem(
      //   "intakeform",
      //   JSON.stringify(sessionDataObject)
      // );
      console.log("sessionStorage: ", sessionStorage.getItem("intakeform"));

      //update sessionData in MongoDB
      await updateSessionToMongoDB();
    }
  };

  const updateSessionToMongoDB = async () => {
    console.log("session data: ", sessionDataObject);

    const dataUpdate = async () => {
      await axios
        .put(HOST + "/api/forms/intakeform", sessionDataObject)
        .then((data) => {
          console.log("data from mongo saved: ", data);
          // return data
        })
        .catch((err) => console.log(err));
    };

    await dataUpdate();
    console.log("------ end of update session to mongoDB -------");
  };

  function firstSelection() {
    return (
      <>
        <div className="row g-4">
          <h5>I want to:</h5>
          <label>Select all that apply</label>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Import Into Canada" />
          </Form.Group>
          {/* {answers[idx + 1] == question.choices.length ? (
            <>
              <Input
                placeholder={question.detailText}
                onChange={handleChange}
                name={idx + 1 + "b"}
                value={answers[idx + 1 + "b"]}
              />
            </>
          ) : null} */}
          <Form.Group className="mb-3" controlId="formBasicCheckbox2">
            <Form.Check type="checkbox" label="Import Into the US" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox3">
            <Form.Check type="checkbox" label="Ship freight" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox4">
            <Form.Check type="checkbox" label="Speak With a Trade Advisor" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox5">
            <Form.Check type="checkbox" label="Other (text box opens)" />
          </Form.Group>
        </div>
        <Buttons />
      </>
    );
  }

  const Buttons = () => (
    <section className="buttonsPreGame">
      {step > 0 && (
        <Button
          type="button"
          onClick={() => {
            setStep(step - 1);
          }}
        >
          BACK
        </Button>
      )}
      {step === pageQuantity - 1 && (
        <Button
          onClick={handleSubmit}
          disabled={answers[step + 1] ? false : true}
        >
          SUBMIT
        </Button>
      )}

      {step < pageQuantity - 1 && (
        <Button
          type="button"
          onClick={() => {
            setStep(step + 1);
          }}
          disabled={intakeform[step + 1] ? false : true}
        >
          NEXT
        </Button>
      )}
    </section>
  );

  return (
    <div className={intakeform.container}>
      <Head>
        <title>Intakeform - PCB365</title>
        <meta name="description" content="intakeform" />
      </Head>
      <div className="container">
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
            <ProgressBar
              now={15}
              label={`15 of 100`}
              style={{ transition: "width 1s ease" }}
            />
            {firstSelection()}
          </div>
        </div>
        <Buttons />
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
