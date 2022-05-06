import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo_color.png";
import favicon from "../../public/favicon.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container" id="footer">
        <footer className="pt-1 mt-5 my-md-5 pt-md-5 border-top ps-4 ">
          <div className="row">
            <div className="col-12 col-md">
              <Link className="navbar-brand" href="/">
                <a>
                  <Image src={logo} alt="PCB Logo" width={250} height={78} />
                </a>
              </Link>
              <small className="d-block mb-3 text-muted ps-2">
                &copy; 2022
              </small>
            </div>
            <div className="col-6 col-md ps-1">
              <h5 className="mb-3">Features</h5>
              <ul className="list-unstyled ">
                <li className="mb-3">Log in </li>
                <li className="mb-3">Sign up </li>
                <li className="mb-3 text-muted">eForms</li>
                <li className="mb-3 text-muted">Shipment</li>
                <li className="mb-3">Reports </li>
                <li className="mb-3">Documentation </li>
                <li className="mb-3">Your eForms List</li>
                <li className="mb-3">Your Documentation</li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5 className="mb-3">Resources</h5>
              <ul className="list-unstyled ">
                <li className="mb-3">
                  Photos from{" "}
                  <Link
                    className="text-muted"
                    href="https://www.unsplash.com/"
                    target="_blank"
                  >
                    Unsplash
                  </Link>
                </li>
                <li className="mb-3">Tables</li>
                <li className="mb-3">
                  Join our teams!{" "}
                  <Link className="text-muted" href="/" target="_blank">
                    {" "}
                  </Link>
                </li>
                <li className="mb-3">
                  {" "}
                  <Link className="text-muted" href="/" target="_blank">
                    {/* {" "} */}
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md ps-2">
              <h5 className="mb-3">About Us</h5>
              <ul className="list-unstyled ">
                <li>
                  <div className="text-muted mt-2 mb-4 d-flex">
                    <Link href="/" target="_blank">
                      <span className="mr-1">© PCB365 </span>
                    </Link>
                  </div>
                </li>
                <li className="mb-4">
                  <Link target="_blank" href="/">
                    <span className="mr-2">PCB</span>
                  </Link>
                </li>
                <li className="mt-2 mb-4">
                  <Link target="_blank" href="/">
                    <span className="mr-2">PCBUSA</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
