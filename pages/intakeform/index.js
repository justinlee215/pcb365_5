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
import Checkbox from "../../components/Checkbox";

import Link from "next/link";

export default function Intakeform(props) {
  console.log("data", data);
  const [answer, setAnswer] = useState("");
  const [intakeform, setIntakeform] = useState({});

  const questionQuantity = 2;
  const [step, setStep] = useState(0);
  const [pageQuantity, setPageQuantity] = useState(questionQuantity);

  // const sessionData = localStorage.setItem("intakeform");
  // const sessionDataObject = JSON.parse(sessionData);

  const [checkedState1, setCheckedState1] = useState(
    new Array(data.questions[0].choices.length).fill(false)
  );

  const [checkedState9, setCheckedState9] = useState(
    new Array(data.questions[8].choices.length).fill(false)
  );

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
    console.log("answer: ", answer);
    console.log("IntakeForm: ", intakeform);
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

  const FirstSelection = () => {
    const handleChangeCheckbox = (id, i) => {
      console.log("index: ", i);

      let mapped = checkedState1.map((ele, ind) => {
        if (i == ind) {
          return !ele;
        }
        return ele;
      });

      console.log("mapped state: ", mapped);
      setCheckedState1(mapped);
      setIntakeform({ ...intakeform, [id]: mapped });

      console.log("Intakeform: ", intakeform);
      console.log("CheckedState: ", checkedState1);
    };
    return (
      <>
        <h3>Select all that apply</h3>
        <div className="">
          {data.questions[0].choices.map((choice, i) => (
            <Checkbox
              key={i + choice}
              checked={intakeform[1]?.[i]}
              name={data.questions[0].id}
              label={choice}
              value={i + 1}
              handleChangeCheckbox={() =>
                handleChangeCheckbox(data.questions[0].id, i)
              }
            />
          ))}
        </div>
      </>
    );
  };

  const SecondSelection = () => {
    const [neitherOption, setNeitherOption] = useState("");

    console.log("ChekedState: ", checkedState9);

    const handleChangeCheckbox = (idx, index) => {
      console.log("index: ", index);

      let mapped = checkedState9.map((ele, ind) => {
        if (index == ind) {
          return !ele;
        }
        return ele;
      });

      console.log("mapped state: ", mapped);
      setCheckedState9(mapped);
      setIntakeform({ ...intakeform, [idx]: mapped });

      console.log("Intakeform: ", intakeform);
      console.log("CheckedState: ", checkedState9);
    };

    const handleChangeOption = (e) => {
      setNeitherOption(e.target.value);
      setIntakeform({ ...intakeform, [e.target.name]: e.target.value });
      console.log("neitherOption: ", neitherOption);
      console.log("IntakeForm: ", intakeform);
    };

    return (
      <div className="">
        {data.questions.slice(1, 3).map((question, idx) => (
          <div key={question + idx}>
            <h3>{question.question}</h3>
            {question.choices.map((choice, i) => (
              <div key={choice + i}>
                <Radio
                  value={i + 1}
                  checked={i + 1 == intakeform[question.id]}
                  label={choice}
                  name={question.id}
                  handleChange={handleChange}
                />
              </div>
            ))}
          </div>
        ))}
        {data.questions.slice(4, 8).map((question, idx) => (
          <div key={question + idx}>
            <h3>{question.question}</h3>
            {question.type == "radioButton" ? (
              question.choices.map((choice, i) => (
                <div key={choice + i}>
                  <Radio
                    value={i + 1}
                    checked={i + 1 == intakeform[question.id]}
                    label={choice}
                    name={question.id}
                    handleChange={handleChange}
                  />
                </div>
              ))
            ) : question.type == "select" ? (
              <Select
                choices={question.choices}
                question={question.question}
                name={question.id}
              />
            ) : question.type == "date" ? (
              <Input type={"date"} />
            ) : null}
          </div>
        ))}

        <h3>{data.questions[8].question}</h3>
        {data.questions[8].choices.map((choice, i) => (
          <Checkbox
            key={i + choice}
            checked={intakeform[9]?.[i]}
            name={data.questions[8].id}
            label={choice}
            value={i + 1}
            handleChangeCheckbox={() =>
              handleChangeCheckbox(data.questions[8].id, i)
            }
          />
        ))}

        <h3>{data.questions[9].question}</h3>
        <Input
          type="text"
          name={data.questions[9].id}
          onChange={handleChangeOption}
          value={neitherOption}
        />
      </div>
    );
  };

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
          disabled={intakeform[step + 1] ? false : true}
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
          disabled={
            intakeform[step + 1]?.some((ele) => ele === true) ? false : true
          }
        >
          NEXT
        </Button>
      )}
    </section>
  );

  const wizards = [<FirstSelection />, <SecondSelection />];

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
            <h1>Get a Quote</h1>
            <ProgressBar
              now={20}
              label={`20 of 100`}
              style={{ transition: "width 1s ease" }}
            />
            {wizards[step]}
            <Buttons />
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
