import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import { Table, Badge } from "react-bootstrap";

import Layout from "../../../components/layout/Layout";
import { CloudDownload } from "react-bootstrap-icons";

export default function ShipmentsToCanada() {
  return (
    <Layout>
      <Head>
        <title>Shipments to Canada</title>
        <meta name="description" content="CSS Big Bang" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <h1>Recent Shipments to Canada</h1>
        <div id="wrapper">
          <table className="ble">
            <thead className=" ead">
              <tr className="rr">
                <th className="hh">File Number</th>
                <th className="hh">Trans Number</th>
                <th className="hh">Reference</th>
                <th className="hh">Customs Status Date/Time</th>
                <th className="hh">Status</th>
                <th className="hh">
                  <CloudDownload size={22} />
                </th>
                <th className="hh">Port of Entry</th>
                <th className="hh">Carrier</th>
                <th className="hh">Cargo/PARS Number</th>
                <th className="hh">View</th>
                <th className="hh">Client</th>
              </tr>
            </thead>
            <tbody>
              <tr className="rr">
                <td data-label="File Number" className="dd">
                  5008371
                </td>
                <td data-label="Trans Number" className="dd">
                  13292963424797
                </td>
                <td data-label="Reference" className="dd">
                  234324343
                </td>
                <td data-label="Customs Status Date/Time" className="dd">
                  N/A
                </td>
                <td data-label="Status" className="dd">
                  <Badge bg="info">Received</Badge>
                </td>
                <td data-label="Download" className="dd">
                  Yes
                </td>
                <td data-label="Port of Entryl" className="dd">
                  PACIFIC HWY/SURREY
                </td>
                <td data-label="Carrier" className="dd">
                  GRANDO LOGISTICS
                </td>
                <td data-label="Cargo/PARS Number" className="dd">
                  806SEU21CA220261 EITU9301816
                </td>
                <td data-label="View" className="dd">
                  Yes
                </td>
                <td data-label="Client" className="dd">
                  300884 BRITISH COLUMBIA LIMIT
                </td>
              </tr>
              <tr className="rr">
                <td data-label="File Number" className="dd">
                  1234
                </td>
                <td data-label="Trans Number" className="dd">
                  77777
                </td>
                <td data-label="Reference" className="dd">
                  234324343
                </td>
                <td data-label="Customs Status Date/Time" className="dd">
                  Dec 11/2021
                </td>
                <td data-label="Status" className="dd">
                  <Badge bg="success">Released</Badge>
                </td>
                <td data-label="Download" className="dd">
                  Yes
                </td>
                <td data-label="Port of Entryl" className="dd">
                  Archie
                </td>
                <td data-label="Carrier" className="dd">
                  Rainbow Inc.
                </td>
                <td data-label="Cargo/PARS Number" className="dd">
                  BSC2304902349
                </td>
                <td data-label="View" className="dd">
                  Yes
                </td>
                <td data-label="Client" className="dd">
                  {" "}
                  Vancouver City University
                </td>
              </tr>
              <tr className="rr">
                <td data-label="File Number" className="dd">
                  1234
                </td>
                <td data-label="Trans Number" className="dd">
                  77777
                </td>
                <td data-label="Reference" className="dd">
                  234324343
                </td>
                <td data-label="Customs Status Date/Time" className="dd">
                  Dec 11/2021
                </td>
                <td data-label="Status" className="dd">
                  <Badge bg="success">Released</Badge>
                </td>
                <td data-label="<CloudDownload />" className="dd">
                  Yes
                </td>
                <td data-label="Port of Entryl" className="dd">
                  Archie
                </td>
                <td data-label="Carrier" className="dd">
                  Rainbow Inc.
                </td>
                <td data-label="Cargo/PARS Number" className="dd">
                  BSC2304902349
                </td>
                <td data-label="View" className="dd">
                  Yes
                </td>
                <td data-label="Client" className="dd">
                  {" "}
                  Vancouver City University
                </td>
              </tr>
              <tr className="rr">
                <td data-label="File Number" className="dd">
                  1234
                </td>
                <td data-label="Trans Number" className="dd">
                  77777
                </td>
                <td data-label="Reference" className="dd">
                  234324343
                </td>
                <td data-label="Customs Status Date/Time" className="dd">
                  Dec 11/2021
                </td>
                <td data-label="Status" className="dd">
                  <Badge bg="success">Released</Badge>
                </td>
                <td data-label="<CloudDownload />" className="dd">
                  Yes
                </td>
                <td data-label="Port of Entryl" className="dd">
                  Archie
                </td>
                <td data-label="Carrier" className="dd">
                  Rainbow Inc.
                </td>
                <td data-label="Cargo/PARS Number" className="dd">
                  BSC2304902349
                </td>
                <td data-label="View" className="dd">
                  Yes
                </td>
                <td data-label="Client" className="dd">
                  {" "}
                  Vancouver City University
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  );
}
