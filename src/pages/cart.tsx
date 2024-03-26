import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cartItems = [ 
  {
    productId: "asdas",
    photo: "https://m.media-amazon.com/images/I/61KBIj28ZUL._AC_SX342_.jpg",
    name: "Macbook",
    price: 3000,
    quantity: 4,
    stock :10
  }
 ];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setisValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setisValidCouponCode(true);
      else setisValidCouponCode(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
      setisValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? cartItems.map((i, idx) => (
          <CartItem key={idx} cartItem={i} />
        )): <h1>No items</h1>  }
      </main>
      <aside>
        <p>Subtotal: PKR {subtotal}</p>
        <p>Shipping Charges: PKR {shippingCharges}</p>
        <p>Tax: PKR {tax}</p>

        <p>
          Discount: <em className="red" > PKR -{discount}</em>
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

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              PKR{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}

            {
              cartItems.length > 0 && <Link to="/shipping" >Checkout</Link>
            }

      </aside>
    </div>
  );
};

export default Cart;
