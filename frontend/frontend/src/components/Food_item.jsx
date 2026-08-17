import React, { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { AppContext } from "../context/AppContextProvider";

const Food_item = ({ id, image, name, price, description }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(AppContext);
  // Find current item in cart
  const cartItem = cartItems.find((item) => item._id === id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="col">
      <div
        className="card border-0 shadow-sm h-100"
        style={{
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        {/* Food Image */}
        <div className="position-relative">
          <img
            src={image}
            alt={name}
            className="card-img-top"
            style={{
              height: "220px",
              objectFit: "cover",
            }}
          />

          {/* Add Button */}
          {quantity === 0 ? (
            <button
              className="btn bg-white rounded-circle shadow position-absolute d-flex align-items-center justify-content-center"
              style={{
                width: "42px",
                height: "42px",
                right: "15px",
                bottom: "15px",
                color: "#00C2A8",
                fontSize: "24px",
              }}
              onClick={() => addToCart(id)}
            >
              +
            </button>
          ) : (
            <div
              className="position-absolute bg-white shadow d-flex align-items-center px-2 py-1"
              style={{
                right: "15px",
                bottom: "15px",
                borderRadius: "50px",
                gap: "10px",
              }}
            >
              <button
                className="btn p-0 border-0 bg-transparent"
                onClick={() => removeFromCart(id)}
              >
                <img
                  src={assets.remove_icon_red}
                  alt="Remove"
                  width="28"
                />
              </button>

              <span className="fw-semibold">{quantity}</span>

              <button
                className="btn p-0 border-0 bg-transparent"
                onClick={() => addToCart(id)}
              >
                <img
                  src={assets.add_icon_green}
                  alt="Add"
                  width="28"
                />
              </button>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="mb-0 fw-semibold">{name}</h5>

            <img
              src={assets.rating_starts}
              alt="Rating"
              width="85"
            />
          </div>

          <p className="text-secondary small">
            {description}
          </p>

          <h5
            style={{
              color: "#00C2A8",
              fontWeight: "700",
            }}
          >
            ${price}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Food_item;