import React from "react";

import { Carousel, Button } from "react-bootstrap";
import trade1 from "../../public/images/trade1.jpg";
import trade2 from "../../public/images/trade2.jpg";
import trade3 from "../../public/images/trade3.jpg";
// import trade4 from '../../public/images/trade4.jpg'
// import trade5 from '../../public/images/trade5.jpg'
// import trade6 from '../../public/images/trade6.jpg'

import Image from "next/image";

export default function CarouselMain() {
  return (
    <Carousel variant="dark" className="carousel">
      <Carousel.Item interval={3000}>
        <div className="largebox">
          <Image
            src={trade2}
            width={1350}
            height={800}
            priority
            className="mainImage"
          ></Image>
          {/* <Card /> */}
        </div>
        <Carousel.Caption>
          <h2 style={{ marginBottom: "2rem" }}>
            Submit all of your trade documents online
          </h2>
          <p style={{ marginBottom: "2rem" }}>
            Take control of your complex trade forms using our eForms
          </p>
          <input
            type="text"
            style={{ marginBottom: "2rem", borderRadius: "3px" }}
          />
          <button className="button" style={{ width: "100%" }}>
            Start
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="largebox">
          <Image
            src={trade1}
            width={1350}
            height={800}
            priority
            className="mainImage"
          ></Image>
          {/* <Card /> */}
        </div>
        <Carousel.Caption>
          <h2 style={{ marginBottom: "2rem" }}>
            Submit all of your trade documents online
          </h2>
          <p style={{ marginBottom: "2rem" }}>
            Take control of your complex trade forms using our eForms
          </p>
          <input
            type="text"
            style={{ marginBottom: "2rem", borderRadius: "3px" }}
          />
          <button className="button" style={{ width: "100%" }}>
            Start
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="largebox">
          <Image
            src={trade3}
            width={1350}
            height={800}
            priority
            className="mainImage"
          ></Image>
          {/* <Card /> */}
        </div>
        <Carousel.Caption>
          <h2 style={{ marginBottom: "2rem" }}>
            Submit all of your trade documents online
          </h2>
          <p style={{ marginBottom: "2rem" }}>
            Take control of your complex trade forms using our eForms
          </p>
          <input
            type="text"
            style={{ marginBottom: "2rem", borderRadius: "3px" }}
          />
          <button className="button" style={{ width: "100%" }}>
            Start
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
