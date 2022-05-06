import { ProgressBar } from "react-bootstrap";

import { useState } from "react";

import Footer from "../footer/Footer";
import NavBar from "../navBar/NavBar";

export default function Layout({ children }) {
  const [progress, setProgress] = useState(0);

  // const updateProgressHandler = setInterval(() => {
  //   if (progress >= 100) {
  //     setProgress(100);
  //     clearInterval(updateProgressHandler);
  //   }
  //   setProgress((s) => s + 1);
  // }, 0);

  return (
    <div className="appWrapper">
      <NavBar />
      <ProgressBar
        now={progress}
        variant="progressBar"
        style={{
          borderRadius: "0",
          height: "1rem",
          backgroundColor: "white",
          left: "0",
          top: "200",
        }}
      />
      {children}
      <Footer />
    </div>
  );
}
