import intakeform from "./intakeform.module.css";
import { Form, Button, ProgressBar, Input } from "react-bootstrap"
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

import Link from "next/link";

export default function Intakeform(props) {

  function firstSelection() {
    return (
      <>
        <div className="row g-4">
          <h5>I want to:</h5>
          <label>
            Select all that apply
          </label>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Import Into Canada" />
          </Form.Group>
          {answers[idx + 1] == question.choices.length
            ?
            <>
              <Input placeholder={question.detailText} onChange={handleChange} name={idx + 1 + 'b'} value={answers[idx + 1 + 'b']} />
            </>
            :
            null
          }
          <Form.Group className="mb-3" controlId="formBasicCheckbox2">
            <Form.Check type="checkbox" label="Import Into USA" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox3">
            <Form.Check type="checkbox" label="Import Into Canada" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox4">
            <Form.Check type="checkbox" label="Import Into Canada" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox5">
            <Form.Check type="checkbox" label="Import Into Canada" />
          </Form.Group>
       
      
        </div>
      </>
    );
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
            {firstSelection()}
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