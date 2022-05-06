import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../../components/layout/Layout";

import { Button, Alert } from "react-bootstrap";

import styles from "./uscustomsinvoice.module.css";

import { dbConnect } from "../../../utils/dbConnect";
import USCustomsInvoice from "../../../models/USCustomsInvoice";

import { apiAddress } from "../../../utils/apiAddress";

export default function ({ usCustomsInvoices }) {
  console.log("usCustomsInvoices: ", usCustomsInvoices);
  return (
    <Layout>
      <Head>
        <title>US Customs Invoice</title>
        <meta name="description" content="Complex Forms" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <div className={styles.createNewBox}>
          <h1 className={styles.title}>US Customs Invoices</h1>
          <Link href={`/forms/uscustomsinvoice/new`}>
            <Button className={styles.button}>Create New</Button>
          </Link>
        </div>
        <div className={styles.formBox}>
          {usCustomsInvoices.map((invoice) => (
            <div key={invoice._id}>
              <div className={styles.grid}>
                <Link href={`/forms/uscustomsinvoice/${invoice._id}`}>
                  <a className={styles.card}>
                    <h2>{invoice.formType} &rarr;</h2>
                    <div className={styles.formLine}>
                      <span className={styles.lineTitle}>Shipper Name: </span>
                      {invoice.shipperName}
                    </div>
                    <div className={styles.formLine}>
                      <span className={styles.lineTitle}>
                        Shipper Contact:{" "}
                      </span>
                      {invoice.shipperContact}
                    </div>
                    <div className={styles.formLine}>
                      <span className={styles.lineTitle}>
                        Shipper Address:{" "}
                      </span>
                      {invoice.shipperAddress}
                    </div>
                    {/* <p>Updated at {invoice.createdAt}</p>
                      <p>Updated at {invoice.updatedAt}</p> */}
                    {/* <p>{ObjectId("621e23407d301fa19a38b548").getTimestamp()}</p> */}
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  await dbConnect();

  const result = await USCustomsInvoice.find({});

  const usCustomsInvoices = result.reverse().map((doc) => {
    const invoice = doc.toObject();
    invoice._id = doc._id.toString();
    return invoice;
  });

  return {
    props: { usCustomsInvoices: usCustomsInvoices },
  };
}

// export async function getServerSideProps() {
//   await dbConnect();

//   const result = await USCustomsInvoice.find({});

//   const usCustomsInvoices = result.reverse().map((doc) => {
//     const invoice = doc.toObject();
//     invoice._id = doc._id.toString();
//     return invoice;
//   });

//   return { props: { usCustomsInvoices: usCustomsInvoices } };
// }
