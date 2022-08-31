import intakeCSS from "./intakeform.module.css";
import { Form, Button, ProgressBar } from "react-bootstrap";
import { useState, useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

import Image from "next/image";
import Head from "next/head";

// import MongooseConnect from "be_libs/db/mongooseConnect";

// import Intakeform from "models/intakeform";
// import { useDebounce } from "fe_helpers/_functions";

// import IndicatorSave from "components/onboarding/IndicatorSave";

// import { updateIntakeform } from "fe_helpers/misc";

import data from "./DataIntakeform.js";

import axios from "axios";

import Input from "../../components/intakeform/Input";
import Radio from "../../components/intakeform/Radio";
import Select from "../../components/intakeform/Select";
import Checkbox from "../../components/intakeform/Checkbox";
import { HorizontalRadioBoxes } from "../../components/intakeform/HorizontalRadioBoxes";
import { VerticalRadioBoxes } from "../../components/intakeform/VerticalRadioBoxes";
import { VerticalCheckBoxes } from "../../components/intakeform/VerticalCheckBoxes";

import Link from "next/link";

export default function IntakeformPage(props) {
  // console.log("data", data);
  const [answer, setAnswer] = useState("");
  const [intakeform, setIntakeform] = useState({});

  const questionQuantity = 50;
  const [step, setStep] = useState(0);
  const [pageQuantity, setPageQuantity] = useState(questionQuantity);

  const [progress, setProgress] = useState(0);

  const [saving, setSaving] = useState(false);
  const [lastSaving, setLastSaving] = useState("");

  // const saveLoader = useDebounce(intakeform, 6000);
  // const debouncedIntakeform = useDebounce(intakeform, 7000);

  // const sessionData = sessionStorage.setItem("intakeform");
  // const sessionDataObject = JSON.parse(sessionData);

  //get Last saved duratioin time
  const getDuration = (currentSaving) => {
    const duration = currentSaving - lastSaving;
    return duration;
  };

  const [checkedState1, setCheckedState1] = useState(
    new Array(data.questions[0].choices.length).fill(false)
  );

  const [checkedState9, setCheckedState9] = useState(
    new Array(data.questions[8].choices.length).fill(false)
  );

  const [checkedState3, setCheckedState3] = useState(
    new Array(data.questions[35].choices.length).fill(false)
  );

  useEffect(() => {
    console.log("answer: ", answer);
  }, [answer]);

  useEffect(() => {
    console.log("intakeform: ", intakeform);
  }, [intakeform]);

  //calls debounced Hook to save the change automatically to MongoDB
  // useEffect(async () => {
  //     const dataUpdated = await updateIntakeform(intakeform);
  //     if (dataUpdated.status === 200) {
  //         setLastSaving(new Date());
  //     } else {
  //         // TODO => show error
  //     }
  //     setSaving(false);
  // }, [debouncedIntakeform]);

  // useEffect(() => {
  //     setSaving(true);
  // }, [saveLoader]);

  // useEffect(function mount() {
  //     function onScroll() {
  //         console.log("scroll!");
  //     }

  //     window.addEventListener("scroll", onScroll);

  //     return function unMount() {
  //         window.removeEventListener("scroll", onScroll);
  //     };
  // });

  // useEffect(() => {
  //     window.sessionStorage.setItem("intakeform", intakeform);

  //     console.log("initial sessionD: ", window.sessionStorage.setItem("intakeform", intakeform));
  // }, []);

  // useEffect(
  //     function sessionStorageSave() {
  //         let sessionData = window.sessionStorage.getItem("intakeform");

  //         console.log("sessionD: ", JSON.stringify(sessionData["3"]));
  //     },
  //     [intakeform]
  // );

  const handleChange = (e) => {
    setAnswer(e.target.value);
    setIntakeform({ ...intakeform, [e.target.name]: e.target.value });
    console.log("answer: ", answer);
    console.log("IntakeForm: ", intakeform);
  };

  const handleChangeCheckbox = (id, i) => {
    console.log("index: ", i);

    let mapped = checkedState3.map((ele, ind) => {
      if (i == ind) {
        return !ele;
      }
      return ele;
    });

    console.log("mapped state: ", mapped);
    setCheckedState3(mapped);
    setIntakeform({ ...intakeform, [id]: mapped });

    console.log("Intakeform: ", intakeform);
    console.log("CheckedState: ", checkedState3);
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

  const createSession = async () => {
    return await axios
      .post(HOST + "/api/intakeform", intakeform)
      .then((data) => {
        sessionStorage.setItem("intakeform", JSON.stringify(data));
        return data;
      })
      .catch((err) => console.log(err));
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
      <div>
        <h3 style={{ marginBottom: "2rem" }}>Select all that apply</h3>
        <div className={intakeCSS.checkboxContainer}>
          <VerticalCheckBoxes
            item={data.questions[0]}
            intakeform={intakeform}
            handleChangeCheckbox={handleChangeCheckbox}
            index={data.questions[0].id}
          />

          {/* {data.questions[0].choices.map((choice, i) => (
                        <div style={{ marginBottom: "1rem" }} key={i + data.questions[0].question}>
                            <Checkbox
                                checked={intakeform[1]?.[i]}
                                name={data.questions[0].id}
                                label={choice}
                                value={i + 1}
                                handleChangeCheckbox={() => handleChangeCheckbox(data.questions[0].id, i)}
                            />
                        </div>
                    ))} */}
        </div>
      </div>
    );
  };

  const SecondSelection = () => {
    const [neitherOption, setNeitherOption] = useState("");

    console.log("ChekedState: ", checkedState1);

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
      // setNeitherOption(e.target.value);
      setIntakeform({ ...intakeform, [e.target.name]: e.target.value });
    };

    return (
      <div className="">
        {/* {(checkedState1[0] || checkedState1[1]) &&
                    data.questions.slice(1, 3).map((question, idx) => (
                        <div style={{ marginBottom: "2rem" }} key={data.questions[1].question + idx}>
                            <h3 style={{ marginBottom: "1rem" }}>{question.question}</h3>
                            {question.choices.map((choice, i) => (
                                <div key={choice + i} style={{ marginBottom: "0.5rem" }}>
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
                    ))} */}
        {(checkedState1[0] || checkedState1[1]) &&
          data.questions.slice(1, 3).map((question, idx) => (
            <div
              style={{ marginBottom: "2rem" }}
              key={data.questions[1].question + idx}
            >
              <h3 style={{ marginBottom: "1rem" }}>{question.question}</h3>
              {/* {question.choices.map((choice, i) => (
                                <div key={choice + i} style={{ marginBottom: "0.5rem" }}>
                                    <Radio
                                        value={i + 1}
                                        checked={i + 1 == intakeform[question.id]}
                                        label={choice}
                                        name={question.id}
                                        handleChange={handleChange}
                                    />
                                </div>
                            ))} */}
              <HorizontalRadioBoxes
                item={question}
                intakeform={intakeform}
                handleChange={handleChange}
              />
            </div>
          ))}

        {checkedState1[2] &&
          data.questions.slice(4, 8).map((question, idx) => (
            <div
              key={question + idx}
              style={{ marginTop: "2rem", marginBottom: "1rem" }}
            >
              <h3>{question.question}</h3>
              {question.type == "radio" ? (
                // question.choices.map((choice, i) => (
                //     <div key={data.questions[2].question + i}>
                //         <Radio
                //             value={i + 1}
                //             checked={i + 1 == intakeform[question.id]}
                //             label={choice}
                //             name={question.id}
                //             handleChange={handleChange}
                //         />
                //     </div>
                // ))
                <VerticalRadioBoxes
                  item={question}
                  intakeform={intakeform}
                  handleChange={handleChange}
                />
              ) : question.type == "select" ? (
                <Select
                  choices={question.choices.map(choice => choice.name)}
                  question={question.question}
                  name={question.id}
                  value={intakeform[question.id]}
                  handleChange={handleChange}
                />
              ) : question.type == "date" ? (
                <Input
                  type={"date"}
                  value={intakeform[question.id]}
                  name={question.id}
                  handleChange={handleChange}
                />
              ) : null}
            </div>
          ))}

        {checkedState1[3] && (
          <div style={{ margin: "2rem 0" }}>
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
          </div>
        )}

        {checkedState1[4] && (
          <div>
            <h3>{data.questions[9].question}</h3>
            <Input
              type="text"
              name={data.questions[9].id}
              handleChange={handleChange}
              value={intakeform[10]}
              label={data.questions[9].question.label}
            />
          </div>
        )}
      </div>
    );
  };

  const dataDog = data.questions.slice(12, 21);
  const dataHorses = data.questions.slice(21, 24);
  const dataCars = data.questions.slice(24, 27);
  const dataCommercials = data.questions.slice(29, 49);

  const DogCat = dataDog.map((ele, i) => (
    <div key={ele + i}>
      {ele.id == 52 ? (
        <div>
          <p>ele.id: {ele.id}</p>

          {intakeform[51] == "1" ? (
            <>
              <h3>{ele.title}</h3>
              <h5>{ele.subtext}</h5>
              <p>{ele.content}</p>
              <p>{ele.paragraph}</p>
              <p>{ele.paragraphSecond}</p>
            </>
          ) : (
            <>
              <h3>{ele.titleb}</h3>
              <h5>{ele.subtextb}</h5>
              <p>{ele.contentb}</p>
              <p>{ele.paragraphb}</p>
              <p>{ele.paragraphSecondb}</p>
            </>
          )}
        </div>
      ) : ele.id == 56 ? (
        <div>
          <p>ele.id: {ele.id}</p>
          <h3>{ele.title}</h3>
          {intakeform[55] == "1" ? (
            <>
              <h5>{ele.subtext}</h5>
              <p>{ele.content}</p>
              <p>{ele.paragraph}</p>
              <p>{ele.paragraphSecond}</p>
              <h5>{ele.contentTitle}</h5>
              <h6>{ele.contentTitleSub}</h6>
              <h5>{ele.contentTitle2}</h5>

              <h5>{ele.contentTitle3}</h5>
              <h6>{ele.contentBold1}</h6>
              <p>{ele.content1}</p>
            </>
          ) : intakeform[55] == "2" ? (
            <>
              <h5>{ele.subtext1}</h5>
              <p>{ele.contentb}</p>
              <p>{ele.paragraphb}</p>
              <p>{ele.paragraphSecondb}</p>
              <h5>{ele.contentTitle}</h5>
              <h6>{ele.contentTitleSub}</h6>
              <h5>{ele.contentTitle2}</h5>

              <h5>{ele.contentTitle3}</h5>
              <p>{ele.content2}</p>
            </>
          ) : intakeform[55] == "3" ? (
            <>
              <h5>{ele.subtext2}</h5>
              <p>{ele.contentb}</p>
              <p>{ele.paragraphb}</p>
              <p>{ele.paragraphSecondb}</p>
              <h5>{ele.contentTitle}</h5>
              <h6>{ele.contentTitleSub}</h6>
              <p>{ele.content3}</p>
            </>
          ) : intakeform[55] == "4" ? (
            <>
              <h5>{ele.subtext3}</h5>
              <p>{ele.contentb}</p>
              <p>{ele.paragraphb}</p>
              <p>{ele.paragraphSecondb}</p>
              <h5>{ele.contentTitle}</h5>
              <h6>{ele.contentTitleSub}</h6>
              <p>{ele.content4}</p>
            </>
          ) : intakeform[55] == "5" ? (
            <>
              <h5>{ele.subtext4}</h5>
              <p>{ele.contentb}</p>
              <p>{ele.paragraphb}</p>
              <p>{ele.paragraphSecondb}</p>
              <h5>{ele.contentTitle}</h5>
              <h6>{ele.contentTitleSub}</h6>
              <p>{ele.content5}</p>
            </>
          ) : null
          }
        </div>
         ) : ele.id == 58 ? (
          <>
            <p>ele.id: {ele.id}</p>
           <h4>hello id 58!</h4>
              {
              intakeform[57] == "1" ? (
            <>
            57은 1을 골랐네
              <h5>{ele.subtext}</h5>
              <p>{ele.content}</p>
              <p>{ele.paragraph}</p>
              <p>{ele.paragraphSecond}</p>
              <h5>{ele.contentTitle}</h5>
              <h6>{ele.contentTitleSub}</h6>
              <h5>{ele.contentTitle2}</h5>

              <h5>{ele.contentTitle3}</h5>
              <h6>{ele.contentBold1}</h6>
              <p>{ele.content1}</p>
            </>
          ) : 
          intakeform[57] == "2" ? (
                <>57은 2를 골랐네</> 
      ) : null
        }
        </>)
        :
      (
        <>
          <p>ele.id: {ele.id}</p>

          <h3>{ele.title}</h3>
          <h5>{ele.subtext}</h5>
          <h5>{ele.subtext1}</h5>
          <h5>{ele.subtext2}</h5>
          <h5>{ele.subtext3}</h5>
          <h4>{ele.contentTitle}</h4>
          <h4>{ele.contentTitle2}</h4>
          <h4>{ele.contentTitle3}</h4>
          <p>{ele.content}</p>
          <p>{ele.content1}</p>
          <p>{ele.content2}</p>

          <div>
            <h5>{ele.question}</h5>
            {/* {ele.choices?.map((choice, idx) => (
              <div key={choice + idx} style={{ margin: "1rem 0" }}>
                <Radio
                  label={choice}
                  value={idx + 1}
                  name={ele.id}
                  checked={intakeform[ele.id] == idx + 1}
                  handleChange={(e) => {
                    setIntakeform({
                      ...intakeform,
                      [e.target.name]: e.target.value,
                    });
                    console.log("intakeform: ", intakeform);
                  }}
                />
              </div>
            ))} */}
                {ele.type == "radio" &&
                  <HorizontalRadioBoxes item={ele} intakeform={intakeform} handleChange={handleChange} />
                  // ele.choices.map((choice, idx) => (
                  //   <div key={choice + idx}>
                  //     <Radio label={choice} />
                  //   </div>
                  // ))
                }
                {ele.type == "text" && (
                  <div style={{ margin: "2rem 0" }}>
                    <Input
                      label={ele.label}
                      style={{ margin: "1rem 0" }}
                      value={intakeform[ele.id]}
                      name={ele.id}
                      handleChange={handleChange}
                    />
                  </div>
                )}
                {ele.type == "select" && (
                  <div style={{ margin: "2rem 0" }}>
                    <Select
                      label={ele.label}
                      style={{ margin: "1rem 0" }}
                      value={intakeform[ele.id]}
                      name={ele.id}
                      choices={ele.choices}
                      handleChange={handleChange}
                    />
                  </div>
                )}
                {ele.type == "form" &&
                  ele.forms.map((form, idx) => (
                    <div key={form + idx}>
                      <Input type={form.type} label={form.label} name={form.id} value={intakeform[form.id]} handleChange={handleChange} />
                    </div>
                  ))
                }
                {ele.type == "checkbox" &&
                  <VerticalCheckBoxes
                    index={ele.id}
                    item={ele}
                    intakeform={intakeform}
                    handleChangeCheckbox={handleChangeCheckbox}
                  />
                }
            {/* {ele.type == "button" && <button>{ele.buttonText}</button>} */}
          </div>
        </>
      )
     }
    </div>
  ));

  const Horses = dataHorses.map((ele, i) => (
    <div key={ele + i}>
      <div>page: {i + 1}</div>
      <h3>{ele.title}</h3>
      <h3>{ele.mainTitle}</h3>
      <h5>{ele.title1?.title}</h5>
      <h5>{ele.title2?.title}</h5>
      <h5>{ele.subtext}</h5>
      <h5>{ele.subtext1}</h5>
      <h5>{ele.subtext2}</h5>
      <h5>{ele.subtext3}</h5>
      <h4>{ele.contentTitle}</h4>
      <h4>{ele.contentTitle2}</h4>
      <h4>{ele.contentTitle3}</h4>

      <div>
        <h5>{ele.question}</h5>

        {ele.type == "radio" &&
          ele.choices.map((choice, idx) => (
            <div key={choice + idx}>
              <Radio label={choice} />
            </div>
          ))}
        {ele.type == "text" && (
          <div style={{ margin: "2rem 0" }}>
            <Input label={ele.label} style={{ margin: "1rem 0" }} />
          </div>
        )}
      </div>
    </div>
  ));

  const Cars = dataCars.map((ele, i) => (
    <div key={ele.id}>
      <div>page: {i + 1}</div>
      <h3>{ele.mainTitle}</h3>
      {ele.questions?.map((question, i) => (
        <div key={question + i}>
          <h4>{question.question}</h4>
          {question.type == "radio" &&
            question.choices.map((choice, idx) => (
              <div key={choice + idx}>
                <Radio label={choice} name={ele.mainTitle} />

                {question.type == "textarea" && (
                  <Input label={ele.label} type="textarea" />
                )}
              </div>
            ))}
        </div>
      ))}
    </div>
  ));

  const Personal = () => {
    const dataPersonal = data.questions[3];
    return (
      <>
        <h3>Personal</h3>
        <div className="">{dataPersonal.question}</div>
        {dataPersonal.choices.map((choice, i) => (
          <div
            key={choice + i}
            name={dataPersonal.id}
            value={i + 1}
            style={{
              border:
                intakeform[dataPersonal.id] == i + 1
                  ? "5px solid #a6192e"
                  : "1px solid #002d72",
              // backgroundColor: intakeform[dataPersonal.id] == i + 1 ? "#002d72" : "white",
              color:
                intakeform[dataPersonal.id] == i + 1 ? "#a6192e" : "#002d72",
              padding: "0.4rem",
              fontSize: intakeform[dataPersonal.id] == i + 1 ? "1rem" : "1rem",
            }}
            className={intakeCSS.radio}
            checked={intakeform[4] == i + 1}
            onClick={(e) => {
              console.log("hello world");
              setIntakeform({ ...intakeform, [dataPersonal.id]: i + 1 });
              console.log("intakeform: ", intakeform);
            }}
          >
            <Radio
              label={choice}
              name={dataPersonal.id}
              value={i + 1}
              checked={intakeform[4] == i + 1}
              handleChange={(e) => {
                setIntakeform({
                  ...intakeform,
                  [e.target.name]: e.target.value,
                });
                console.log("intakeform: ", intakeform);
              }}
            />
          </div>
        ))}
      </>
    );
  };

  const Commercial = () => {
    const dataCommercial = data.questions[29];

    return (
      <>
        <h3>Commercial</h3>

        < VerticalRadioBoxes item={dataCommercial} intakeform={intakeform} handleChange={handleChange}/>
        {/* {dataCommercial.choices.map((choice, i) => (
          <Radio
            key={choice + i}
            label={choice}
            name={dataCommercial.id}
            value={i + 1}
            checked={intakeform[2000] == i + 1}
            handleChange={(e) => {
              // setCommercial(e.target.value);
              setIntakeform({ ...intakeform, [e.target.name]: e.target.value });
              console.log("intakeform: ", intakeform);
            }}
          />
        ))} */}
      </>
    );
  };

  const CommercialPages = dataCommercials.map((ele, i) => (
    <div key={ele + i}>
      <div>Commercial page: {i + 1}</div>
      <h3>{ele.title}</h3>
      <h3>{ele.mainTitle}</h3>
      <h5>{ele.title1?.title}</h5>
      <h5>{ele.title2?.title}</h5>
      <h5>{ele.subtext}</h5>
      <h5>{ele.subtext1}</h5>
      <h5>{ele.subtext2}</h5>
      <h5>{ele.subtext3}</h5>
      <h4>{ele.contentTitle}</h4>
      <h4>{ele.contentTitle2}</h4>
      <h4>{ele.contentTitle3}</h4>

      <div>
        <h5>{ele.question}</h5>

        {ele.type == "radio" &&
          <HorizontalRadioBoxes item={ele} intakeform={intakeform} handleChange={handleChange}/>
          // ele.choices.map((choice, idx) => (
          //   <div key={choice + idx}>
          //     <Radio label={choice} />
          //   </div>
          // ))
          }
        {ele.type == "text" && (
          <div style={{ margin: "2rem 0" }}>
            <Input
              label={ele.label}
              style={{ margin: "1rem 0" }}
              value={intakeform[ele.id]}
              name={ele.id}
              handleChange={handleChange}
            />
          </div>
        )}
        {ele.type == "select" && (
          <div style={{ margin: "2rem 0" }}>
            <Select
              label={ele.label}
              style={{ margin: "1rem 0" }}
              value={intakeform[ele.id]}
              name={ele.id}
              choices={ele.choices}
              handleChange={handleChange}
            />
          </div>
        )}
        {ele.type == "form" &&
          ele.forms.map((form, idx) => (
            <div key={form + idx}>
              <Input type={form.type} label={form.label} name={form.id} value={intakeform[form.id]} handleChange={handleChange}/>
            </div>
          ))
        }
        {ele.type == "checkbox" &&
        <VerticalCheckBoxes 
            index={ele.id}
          item={ele}
          intakeform={intakeform}
          handleChangeCheckbox={handleChangeCheckbox}
        />
      }
      </div>
    </div>
  ));

  const QuoteContact = () => {
    const formData = data.questions[10];
    return (
      <>
        <h3>Quote</h3>
        {formData.form.map((question, i) => (
          <Input
            key={data.questions[10].title + i}
            type={question.type}
            label={question.label}
            as={question.as}
          />
        ))}

        <h4>Subscribe To PCB Emails</h4>
        <p>
          PCB Customs Brokers would like to send you regulatory updates, trade
          news and event notifications relevant to your business. Your privacy
          is important to us therefore your email will never be shared. You may
          unsubscribe at any time. For more information please visit our privacy
          policy. By providing your email you grant us consent to send you
          emails for a period of 6 months, beginning from your last business
          exchange with us under Implied consent, after which you will be
          removed from our mailing list.
        </p>
        <Checkbox label={data.questions[11].label} />
      </>
    );
  };

  const ThirdSelection = () => {
    return (
      <>
        <h3></h3>
        {intakeform[3] === "1" && <Personal />}
        {intakeform[3] === "2" && <Commercial />}
        {/* {intakeform[1][2] === true && <QuoteContact />} */}
      </>
    );
  };

  const Buttons = () => (
    <section className={intakeCSS.buttons}>
      <Button
        className={intakeCSS.backbutton}
        style={{ visibility: step == 0 ? `hidden` : `visible` }}
        type="button"
        onClick={() => {
          if (!progress == 0 || !progress == 100) {
            if (step == 19) {
              setStep(step - 17);
              setProgress((prev) => prev - 5);
              setIntakeform({ ...intakeform, [2001]: null });
              console.log("commercial go");
              console.log("step: ", step);
            } else if (step == 2) {
              setIntakeform({ ...intakeform, [2000]: null });
              setStep(step - 1);
              setProgress((prev) => prev - 5);
              console.log("step: ", step);
            } else {
              setStep(step - 1);
              setProgress((prev) => prev - 5);
              console.log("step: ", step);
            }
          }
        }}
      >
        BACK
      </Button>
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
          className={intakeCSS.button}
          style={{
            height: step == 5 || step == 7 ? `5rem` : "default",
            width: step == 5 || step == 7 ? `14rem` : `default`,
          }}
          type="button"
          onClick={() => {
            // console.log('progress: ', progress)
            if (step == 2 && intakeform[2000] && !intakeform[2001]) {
              setStep(step + 17);
              if (progress !== 100) {
                setProgress((prev) => prev + 5);
              }
              console.log("commercial go");
              console.log("step: ", step);
            } else if (step == 2 && intakeform[4] == 2 ) {
              setStep(step + 10);
              if (progress !== 100) {
                setProgress((prev) => prev + 5);
              }
              console.log("horse go");
              console.log("step: ", step);
            }else if (step == 2 && intakeform[4] == 3) {
              setStep(step + 13);
                if (progress !== 100) {
                  setProgress((prev) => prev + 5);
                }
              console.log("car go");
              console.log("step: ", step);
            }
            else {
              setStep(step + 1);
              if (progress !== 100) {
                setProgress((prev) => prev + 5);
              }
            }
          }}
          // disabled={
          //     intakeform[step + 1] == undefined ||
          //     intakeform[step + 1] == "" ||
          //     (Array.isArray(intakeform[step + 1]) && !intakeform[step + 1].some((ele) => ele === true))
          // }
        >
          {step == 5
            ? `I understand that I may require the services of a Customs Broker.`
            : step == 7
            ? `I Understand the Import Requirements.`
            : `NEXT`}
        </Button>
      )}
    </section>
  );

  const wizards = [
    <FirstSelection />,
    <SecondSelection />,
    <ThirdSelection />,
    ...DogCat,
    ...Horses,
    ...Cars,
    ...CommercialPages,
  ];

  // useEffect(() => console.log("wizards: ", wizards), [wizards]);


  return (
    <div className={intakeCSS.containerbox}>
      <Head>
        <title>Intakeform - PCB365</title>
        <meta name="description" content="intakeform" />
      </Head>
      <div className={intakeCSS.containerbox}>
        <div className={intakeCSS.content}>
          <div className={intakeCSS.imageSection}>
            <Link href={"/"}>
              <a className={intakeCSS.logoimage}>
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
            {/* <IndicatorSave saving={saving} getDuration={getDuration} /> */}
          </div>
          <div className={intakeCSS.formSection}>
            <h1>Get a Quote</h1>
            step: {step}
            <ProgressBar
              now={progress}
              // label={`${progress}`}
              variant="danger"
              style={{
                transition: "width 1s ease",
                marginBottom: "2rem",
                height: "1.8rem",
                fontSize: "1.3rem",
              }}
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
  // await MongooseConnect();

  return {
    props: {
      query: "hello world!",
    },
  };
}
