import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContextProvider";

const Order = () => {
  const { cartItems } = useContext(AppContext);

  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let sum = 0;

    cartItems.forEach((item) => {
      sum += item.price * item.quantity;
    });

    setSubtotal(sum);
  }, [cartItems]);

  const deliveryFee = cartItems.length ? 5 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="container my-5">
      <div className="row">

        {/* ================= LEFT SIDE - DELIVERY INFORMATION ================= */}
        <div className="col-md-7 pe-md-5">

          <h3 className="fw-bold mb-4">Delivery Information</h3>

          <form>
            <div className="row g-3">

              {/* First Name */}
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="First name"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Last name"
                  required
                />
              </div>

              {/* Email */}
              <div className="col-12">
                <input
                  type="email"
                  className="form-control py-2"
                  placeholder="Email address"
                  required
                />
              </div>

              {/* Street */}
              <div className="col-12">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Street"
                  required
                />
              </div>

              {/* City */}
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="City"
                  required
                />
              </div>

              {/* State */}
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="State"
                  required
                />
              </div>

              {/* Zip Code */}
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Zip code"
                  required
                />
              </div>

              {/* Country */}
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Country"
                  required
                />
              </div>

              {/* Phone */}
              <div className="col-12">
                <input
                  type="tel"
                  className="form-control py-2"
                  placeholder="Phone"
                  required
                />
              </div>

            </div>
          </form>
        </div>


        {/* ================= RIGHT SIDE - CART TOTALS ================= */}
        <div className="col-md-5 mt-5 mt-md-0">

          <h3 className="fw-bold mb-4">Cart Totals</h3>

          <table className="table">
            <tbody>

              {/* Subtotal */}
              <tr>
                <td className="text-secondary">Subtotal</td>

                <td className="text-end">
                  ${subtotal}.00
                </td>
              </tr>

              {/* Delivery Fee */}
              <tr>
                <td className="text-secondary">Delivery Fee</td>

                <td className="text-end">
                  ${deliveryFee}.00
                </td>
              </tr>

              {/* Total */}
              <tr className="fw-bold">
                <td>Total</td>

                <td className="text-end">
                  ${total}.00
                </td>
              </tr>

            </tbody>
          </table>

          {/* Proceed Button */}
          <button
            type="button"
            className="btn text-white px-5 py-2 mt-4 fw-medium"
            style={{
              backgroundColor: "#02ab95",
              borderRadius: "4px",
            }}
          >
            PROCEED TO PAYMENT
          </button>

        </div>

      </div>
    </div>
  );
};

export default Order;