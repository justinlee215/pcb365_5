import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../../../components/layout/Layout";

import { Button, Alert } from "react-bootstrap";

import styles from "../canadacustomsinvoice.module.css";

import { dbConnect } from "../../../../utils/dbConnect";
import CanadaCustomsInvoice from "../../../../models/CanadaCustomsInvoice";

import { apiAddress } from "../../../../utils/apiAddress";

import { useRouter } from "next/router";

export default function ({ canadaCustomsInvoice }) {
  console.log("canada: ", canadaCustomsInvoice);
  const router = useRouter();

  const handleClick = async () => {
    const invoice = canadaCustomsInvoice._id;
    console.log("invoice: ", invoice);

    try {
      const deleted = await fetch(
        `${apiAddress}/api/forms/CanadaCustomsInvoice/${invoice}`,
        {
          method: "DELETE",
        }
      );
      router.push("/forms/canadacustomsinvoice");
    } catch (error) {
      console.log("error: ", error.message);
    }
  };

  const {
    _id,
    formType,
    shipperName,
    shipperAddress,
    buyerIrs,
    shipperPhone,
    buyerAddress,
    buyerName,
    consigneeName,
    buyerIRS,
    shipperContact,
    exporterName,
    exporterAddress,
    exporterPhone,
    exporterContact,
    createdAt,
    updatedAt,
    buyerPhone,
    consigneeAddress,
    consigneeIRS,
    consigneePhone,
    otherRefNosName,
  } = canadaCustomsInvoice;

  return (
    <Layout home>
      <Head>
        <title>Canada Customs Invoice</title>
        <meta name="description" content="Complex Forms" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <div className={styles.createNewBox}>
          <h1 className={styles.title}>{formType}</h1>
          <div className="editDelete">
            <Link href={`/forms/canadacustomsinvoice/${_id}/edit`}>
              <Button className={styles.button}>Edit</Button>
            </Link>
            <Button className={styles.button2} onClick={handleClick}>
              Delete
            </Button>
          </div>
        </div>
        <h2>Shipper Name: {shipperName} </h2>
        <div className={styles.grid}>
          <div className={styles.formDetail}>
            <div className={styles.formLine}>
              <span className={styles.lineTitle}>Shipper Name: </span>
              {shipperName}
            </div>
            <div className={styles.formLine}>
              <span className={styles.lineTitle}>Shipper Contact: </span>
              {shipperContact}
            </div>
            <div className={styles.formLine}>
              <span className={styles.lineTitle}>Shipper Phone: </span>
              {shipperPhone}
            </div>
            <div className={styles.formLine}>
              <span className={styles.lineTitle}>Shipper Address: </span>
              {shipperAddress}
            </div>
            <br />
            <div className={styles.formLine}>
              <span className={styles.lineTitle}>Exporter Name: </span>
              {exporterName}
            </div>
            <div className={styles.formLine}>
              <span className={styles.lineTitle}>Exporter Contact: </span>
              {exporterContact}
            </div>
            <div className={styles.formLine}>
              <span className={styles.lineTitle}>Exporter Phone: </span>
              {exporterPhone}
            </div>
            <div className={styles.formLine}>
              <span className={styles.lineTitle}>Exporter Address: </span>
              {exporterAddress}
            </div>
            <br />
            <div className={styles.formLine}>
              <span className={styles.lineTitle}>Other Ref.Nos.: </span>
              {otherRefNosName}
            </div>
            <br />
            <div className={styles.formLine}>
              <span className={styles.lineTitle}>consignee Phone: </span>
              {consigneePhone}
            </div>
            <div className={styles.formLine}>
              <span className={styles.lineTitle}>consignee Address: </span>
              {consigneeAddress}
            </div>
            <br />
            <div className={styles.formLine}>
              <span className={styles.lineTitle}>Buyer Phone: </span>
              {buyerPhone}
            </div>
            <div className={styles.formLine}>
              <span className={styles.lineTitle}>Buyer Address </span>
              {buyerAddress}
            </div>
            <div className={styles.formLine}>
              <span className={styles.lineTitle}>Buyer IRS: </span>
              {buyerIRS}
            </div>
          </div>
          {/* <h2>{formType} &rarr;</h2>
              <div><p>{createdAt}</p></div> */}
          {/* <div><p>{shipperAddress}</p></div> */}
          {/* <p>Updated at {createdAt}</p>
              <p>Updated at {updatedAt}</p> */}
          {/* <p>{ObjectId("621e23407d301fa19a38b548").getTimestamp()}</p> */}
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ query: { id } }) {
  console.log("req: ", id);
  await dbConnect();

  const result = await CanadaCustomsInvoice.findById({ _id: id });
  const invoice = result.toObject();
  invoice._id = result._id.toString();

  return { props: { canadaCustomsInvoice: invoice } };
}
