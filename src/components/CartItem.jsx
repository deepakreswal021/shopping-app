
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div >

      <div className="flex flex-col items-center
     ease-in gap-3 p-4 mt-10 ml-10 rounded-xl ">

        <div className="h-[180px]">
          <img src={item.image} className="h-full w-full "/>
        </div>
        <div>
        <p className="text-gray-700 font-semibold text-left   mt-1">{item.title}</p>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
          <div>
            <p>{item.price}</p>
            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
