import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
// import styles from '../styles/Home.module.scss'

import Layout from "../components/layout/Layout";

import logo from "../public/images/logo_black.png";

import { useSpring, animated } from "react-spring";
import Card from "../components/card/Card";
import CarouselMain from "../components/carousel/CarouselMain";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>PCB365</title>
        <meta name="description" content="CSS Big Bang" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <CarouselMain />
      </main>
    </Layout>
  );
}
