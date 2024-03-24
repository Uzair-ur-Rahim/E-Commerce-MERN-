import { FaPlus } from "react-icons/fa";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

// const server = "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SX342_.jpg"

const ProductCard = ({productId, photo, name, price, stock, handler}:ProductsProps) => {
  return <div className="product-card">

    <img src={photo} alt={name} />
    <p>{name}</p>
    <span>PKR{price}</span>


    <div>
      <button onClick={()=>handler()} >
        <FaPlus/>
      </button>

    </div>



  </div>;
};

export default ProductCard;
