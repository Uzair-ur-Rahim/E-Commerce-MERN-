import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";


type CartItemsProps = {

  cartItem: any;

};

const CartItem = ({cartItem}:CartItemsProps) => {
  const {name, productId, quantity, price,photo} = cartItem
  return (

    <div className="cart-item" >
      <img src={photo} alt={name} />  

      <article>
        <Link to={`/product/${productId}`} >{name} </Link>
        <span>PKR{price}</span>
      </article>
      <div>
      <button>-</button>
      <p>{quantity}</p>
      <button>+</button>
      </div>

      <button>
      <FaTrash/>


      </button>



    </div>
  )
}

export default CartItem;