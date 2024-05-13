import { useState } from "react";
import ProductCard from "./components/ProductCard";
import MyModal from "./components/ui/MyModal";
import { productList } from "./data";
import Button from "../src/components/ui/Button";

const App = () => {
  let [isOpen, setIsOpen] = useState(false);

  function close() {
    setIsOpen(false);
  }
  function open() {
    setIsOpen(true);
  }
  const productListView = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <main className="container m-auto">
      <Button className="bg-indigo-700 cursor-pointer" onClick={open}>
        Add Product
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 border border-zinc-600 rounded-md m-5 p-5 lg:p-2">
        {productListView}
      </div>
      <MyModal
        isOpen={isOpen}
        closeModel={close}
        dialogTitle={"Add A New Product"}
      >
        <div className="flex space-x-3">
          <Button className="bg-indigo-700 hover:bg-indigo-900 transition">
            Submit
          </Button>
          <Button
            onClick={close}
            className="bg-gray-300 hover:bg-gray-500 transition"
          >
            Cancel
          </Button>
        </div>
      </MyModal>
    </main>
  );
};

export default App;
