import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer
      className="mt-5"
      style={{
        backgroundColor: "#323232",
        color: "#fff",
      }}
    >
      <div className="container py-5" id="contact">
        <div className="row gy-5">

          {/* Left Section */}
          <div className="col-lg-5 col-md-12">
            <img
              src={assets.logo_1}
              alt="Savora"
              style={{ width: "180px" }}
            />

            <p
              className="mt-4"
              style={{
                color: "#d9d9d9",
                lineHeight: "1.8",
                maxWidth: "430px",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book.
            </p>

            <div className="d-flex gap-3 mt-4">
              <img
                src={assets.facebook_icon}
                alt="Facebook"
                style={{ width: "38px", cursor: "pointer" }}
              />

              <img
                src={assets.twitter_icon}
                alt="Twitter"
                style={{ width: "38px", cursor: "pointer" }}
              />

              <img
                src={assets.linkedin_icon}
                alt="LinkedIn"
                style={{ width: "38px", cursor: "pointer" }}
              />
            </div>
          </div>

          {/* Company */}
          <div className="col-lg-3 col-md-6">
            <h3
              className="fw-bold mb-4"
              style={{ fontSize: "1.4rem" }}
            >
              COMPANY
            </h3>

            <ul className="list-unstyled">
              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "#d9d9d9" }}
                >
                  Home
                </a>
              </li>

              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "#d9d9d9" }}
                >
                  About us
                </a>
              </li>

              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "#d9d9d9" }}
                >
                  Delivery
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "#d9d9d9" }}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6">
            <h3
              className="fw-bold mb-4"
              style={{ fontSize: "1.4rem" }}
            >
              GET IN TOUCH
            </h3>

            <ul className="list-unstyled">
              <li
                className="mb-3"
                style={{ color: "#d9d9d9" }}
              >
                +1-212-4560-7890
              </li>

              <li style={{ color: "#d9d9d9" }}>
                contact@savora.com
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <hr
          style={{
            borderColor: "#777",
            marginTop: "50px",
          }}
        />

        {/* Copyright */}
        <p
          className="text-center mb-0 pt-2"
          style={{
            color: "#d9d9d9",
          }}
        >
          Copyright 2026 © Savora.com - All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;