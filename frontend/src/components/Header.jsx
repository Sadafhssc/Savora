import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Header = () => {
  return (
    <div
      className="container mt-4" 
      id="about"
      style={{
        height: "34vw",
        minHeight: "520px",
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
            "linear-gradient(to right, rgba(0,0,0,0.35), rgba(0,0,0,0.02))",
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: "absolute",
          left: "7%",
          bottom: "12%",
          top:"28%",
          width: "70%",
          color: "#fff",
          zIndex: 2,
          textAlign: "left",
        }}
      >
        <h3
          style={{
            fontSize: "3.4rem",
            fontWeight: "700",
            lineHeight: "1.1",
            marginBottom: "20px",
            color: "#fff",
          }}
        >
          Order your <br />
          favourite food here
        </h3>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: "28px",
            color: "#f5f5f5",
            marginBottom: "30px",
          }}
        >
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest<br />
          ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate<br />
          your dining experience, one delicious meal at a time.
          
        </p>

        <button
          className="btn"
          style={{
            background: "#fff",
            color: "#444",
            border: "none",
            borderRadius: "50px",
            padding: "14px 34px",
            fontWeight: "500",
            fontSize: "16px",
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