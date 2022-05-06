import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import { Table, Badge } from 'react-bootstrap'

import Layout from "../../../components/layout/Layout";
import { CloudDownload } from "react-bootstrap-icons";

export default function ShipmentsToUS() {
  return (
    <Layout>
      <Head>
        <title>Shipments to US</title>
        <meta name="description" content="CSS Big Bang" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <h1>Recent Shipments to US</h1>
        <div id="wrapper" className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead className="thead-dark primary">
              <tr>
                <th scope="col">File Number</th>
                <th scope="col">Trans Number</th>
                <th scope="col">Reference</th>
                <th scope="col">Customs Status Date/Time</th>
                <th scope="col">Status</th>
                <th scope="col">
                  <CloudDownload size={22}/>
                </th>
                <th scope="col">Port of Entry</th>
                <th scope="col">Carrier</th>
                <th scope="col">Cargo/PARS Number</th>
                <th scope="col">View</th>
                <th scope="col">Client</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="File Number">1234</td>
                <td data-label="Trans Number">77777</td>
                <td data-label="Reference">234324343</td>
                <td data-label="Customs Status Date/Time">Dec 11/2021</td>
                <td data-label="Status"><Badge bg="info">Received</Badge></td>
                <td data-label="<CloudDownload />">Yes</td>
                <td data-label="Port of Entryl">Archie</td>
                <td data-label="Carrier">Rainbow Inc.</td>
                <td data-label="Cargo/PARS Number">BSC2304902349</td>
                <td data-label="View">Yes</td>
                <td data-label="Client"> Vancouver City University</td>
              </tr>
              <tr>
                <td data-label="File Number">1234</td>
                <td data-label="Trans Number">77777</td>
                <td data-label="Reference">234324343</td>
                <td data-label="Customs Status Date/Time">Dec 11/2021</td>
                <td data-label="Status"><Badge bg="info">Received</Badge></td>
                <td data-label="<CloudDownload />">Yes</td>
                <td data-label="Port of Entryl">Archie</td>
                <td data-label="Carrier">Rainbow Inc.</td>
                <td data-label="Cargo/PARS Number">BSC2304902349</td>
                <td data-label="View">Yes</td>
                <td data-label="Client"> Vancouver City University</td>
              </tr>
              <tr>
                <td data-label="File Number">5008371</td>
                <td data-label="Trans Number">13292963424797</td>
                <td data-label="Reference">234324343</td>
                <td data-label="Customs Status Date/Time">N/A</td>
                <td data-label="Status"><Badge bg="success">Released</Badge></td>
                <td data-label="<CloudDownload />">Yes</td>
                <td data-label="Port of Entryl">PACIFIC HWY/SURREY</td>
                <td data-label="Carrier">GRANDO LOGISTICS</td>
                <td data-label="Cargo/PARS Number">
                  806SEU21CA220261 EITU9301816
                </td>
                <td data-label="View">Yes</td>
                <td data-label="Client">300884 BRITISH COLUMBIA LIMIT</td>
              </tr>
              <tr>
                <td data-label="File Number">1234</td>
                <td data-label="Trans Number">77777</td>
                <td data-label="Reference">234324343</td>
                <td data-label="Customs Status Date/Time">Dec 11/2021</td>
                <td data-label="Status"><Badge bg="success">Released</Badge></td>
                <td data-label="<CloudDownload />">Yes</td>
                <td data-label="Port of Entryl">Archie</td>
                <td data-label="Carrier">Rainbow Inc.</td>
                <td data-label="Cargo/PARS Number">BSC2304902349</td>
                <td data-label="View">Yes</td>
                <td data-label="Client"> Vancouver City University</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  );
}
