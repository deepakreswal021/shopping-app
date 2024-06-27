import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="flex justify-evenly ">


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col ">

        <div>
          <div>Your Cart</div>
          <div>Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p>Total Amount: ${totalAmount}</p>
          <button>
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className=" font-bold text-xl flex flex-col justify-center items-center mt-[250px] gap-4">
      <div><h1>Cart Empty</h1></div>
      <div>
        <Link to={"/"}>
          <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">
            Shop Now
          </button>
        </Link>
      </div>
    </div>)
  }
    </div>
  );
};

export default Cart;
