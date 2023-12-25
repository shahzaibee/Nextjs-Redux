import ProductLists from "../app/components/ProductList";
import CartList from "../app/components/CartList";

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-center items-center">
        <h1 className="mt-2 mb-3 py-2 text-lg">Redux Toolkit</h1>
      </div>
      <ProductLists />
      <h1 className="mb-6 mt-2 text-center text-lg">CartList</h1>
      <div className="mt-5">
        <CartList />
      </div>
    </main>
  );
}
