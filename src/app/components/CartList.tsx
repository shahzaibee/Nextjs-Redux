"use client";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { deletecart } from "../store/slices/cart";

const CartList = () => {
  const cart = useAppSelector((state) => state.cartArray);
  const dispatch = useAppDispatch();
  return (
    <div>
      {cart.map((val, i) => {
        return (
          <div
            key={i}
            className="grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center items-center md:pl-10 sm:pl-10 lg:pl-10 bg-emerald-400 font-bold py-2"
          >
            <div>{val.name}</div>
            <div>{val.category}</div>
            <div>{val.qty}</div>
            <div>
              <button
                onClick={() => dispatch(deletecart(val.name))}
                className="bg-black/95 text-white p-3 rounded-2xl hover:rounded-xl px-4 py-4 "
              >
                Delete to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartList;
