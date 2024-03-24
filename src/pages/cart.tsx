import { useState } from "react";
import { VscError } from "react-icons/vsc";

const cartItems = [];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setisValidCouponCode] = useState<boolean>(false);
  return (
    <div className="cart">
      <main></main>
      <aside>
        <p>Subtotal: PKR {subtotal}</p>
        <p>Shipping Charges: PKR {shippingCharges}</p>
        <p>Tax: PKR {tax}</p>

        <p>
          Discount: <em> PKR -{discount}</em>
        </p>
        <p>
          <b>Total: PKR {total} </b>
        </p>

        <input
          type="text"
          placeholder="Enter Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode && (isValidCouponCode ? (
          <span className="green">
            PKR{discount} off using the <code>{couponCode}</code>
          </span>
        ) : (
          <span className="red">
            Invalid Coupon <VscError />
          </span>
        ))}
      </aside>
    </div>
  );
};

export default Cart;
