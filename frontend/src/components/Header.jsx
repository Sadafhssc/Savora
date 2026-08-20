import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Header = () => {
  return (
    <div
      className="container mt-3 mt-md-4 px-0"
      id="about"
      style={{
        height: "clamp(420px, 34vw, 600px)",
        minHeight: "420px",
        borderRadius: "20px",
        background: `url(${assets.header_img}) no-repeat center center/cover`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "20px",
          background:
            "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.08))",
        }}
      ></div>

      {/* Content */}
      <div
        className="px-4 px-sm-5"
        style={{
          position: "absolute",
          left: "0",
          bottom: "10%",
          width: "100%",
          maxWidth: "900px",
          color: "#fff",
          zIndex: 2,
          textAlign: "left",
        }}
      >
        {/* Heading */}
        <h3
          className="mb-3 mb-md-4"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: "700",
            lineHeight: "1.1",
            color: "#fff",
          }}
        >
          Order your <br />
          favourite food here
        </h3>

        {/* Paragraph */}
        <p
          className="mb-3 mb-md-4"
          style={{
            fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
            lineHeight: "1.7",
            color: "#f5f5f5",
            maxWidth: "700px",
          }}
        >
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>

        {/* Button */}
        <button
          className="btn"
          style={{
            background: "#fff",
            color: "#444",
            border: "none",
            borderRadius: "50px",
            padding: "clamp(9px, 1.5vw, 14px) clamp(22px, 3vw, 34px)",
            fontWeight: "500",
            fontSize: "clamp(13px, 1.5vw, 16px)",
            display: "inline-block",
          }}
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;