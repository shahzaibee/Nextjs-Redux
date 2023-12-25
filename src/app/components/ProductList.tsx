"use client";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { addProduct } from "../store/slices/product";
import { addcart } from "../store/slices/cart";

const ProductLists = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [qty, setQty] = useState(0);

  const products = useAppSelector((state) => state.productArray);
  const cart = useAppSelector((state) => state.cartArray);

  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="grid grid-cols-4 gap3 bg-green-500 m-4 w-[85%] mx-auto p-4 gap-2 rounded-md">
        <input
          type="text"
          placeholder="Product name"
          className="p-3 bg-green-300 text-lg rounded-md placeholder:text-gray-400"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="category"
          className="p-3 bg-green-300 text-lg rounded-md placeholder:text-gray-400"
          value={category}
          onChange={(e: any) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="qty."
          className="p-3 bg-green-300 text-lg rounded-md placeholder:text-gray-400"
          value={qty}
          onChange={(e: any) => setQty(e.target.value)}
        />
        <button
          className="bg-blue-600 rounded-xl text-xl text-white"
          onClick={() =>
            dispatch(
              addProduct({ name: name, category: category, qty: qty }),
              setCategory(""),
              setName(""),
              setQty(0)
            )
          }
        >
          Add item
        </button>
      </div>
      <h1 className="flex justify-center text-xl">ProductList</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        {products.map((items, i) => {
          return (
            <div
              className="w-350 border rounded-md bg-slate-400 py-4 px-5  flex justify-between items-center text-center "
              key={i}
            >
                <div className="bg-gray-200 px-6 py-5 flex justify-between gap-10 rounded-2xl">
              <h1>{items.name}</h1>
              <p>{items.category}</p>
              <p>qty.{items.qty}</p>
              </div>
              <button
                onClick={() =>
                  dispatch(
                    addcart({
                      name: items.name,
                      category: items.category,
                      qty:items.qty,
                    })
                  )
                }
                className="bg-black/95 text-white p-3 mt-3 rounded-2xl hover:rounded-xl px-4 py-2"
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductLists;
