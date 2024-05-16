import { useState } from "react";
import ProductCard from "./components/ProductCard"; // Importing ProductCard component
import MyModal from "./components/ui/MyModal"; // Importing MyModal component
import { colors, formInputList, productList } from "./data"; // Importing formInputList and productList from data file
import Button from "../src/components/ui/Button"; // Importing Button component
import Input from "../src/components/ui/Input"; // Importing Input component
import { Iproduct } from "./components/interfaces"; // Importing Iproduct interface
import { productValidation } from "./components/validation";
import ErrorMessage from "./components/ui/ErrorMessage";
import CircleColor from "./components/ui/CircleColor";
import { v4 as uuid } from "uuid";

const App = () => {
  const defaultProductObject = {
    // Default product object
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  // State variables
  const [isOpen, setIsOpen] = useState(false); // State for modal visibility
  const [tempColor, setTempColor] = useState<string[]>([]);
  //default error message
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [product, setProduct] = useState<Iproduct>(defaultProductObject); // State for product details
  const [products, setProducts] = useState<Iproduct[]>(productList);
  // Function to close modal
  const close = () => {
    setIsOpen(false);
  };

  // Function to open modal
  const open = () => {
    setIsOpen(true);
  };

  // Mapping product list to ProductCard components
  const productListView = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  // Mapping form input list to Input components
  const productFormInputView = formInputList.map((input) => (
    <div className={"flex flex-col"} key={input.id}>
      <label
        className="mb-[1px] text-sm font-medium text-gray-700"
        htmlFor={input.id}
      >
        {input.label}
      </label>
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={(e) => {
          onChangeEventHandler(e);
        }}
      />
      <ErrorMessage message={errors[input.name]} />
    </div>
  ));

  //Mapping from color list to color components
  const colorListView = colors.map((color) => (
    <CircleColor
      color={color}
      key={color}
      onClick={() => {
        {
          if (tempColor.includes(color)) {
            setTempColor((prev) => prev.filter((c) => c !== color));
            return;
          }
          setTempColor((prev) => [...prev, color]);
        }
      }}
    />
  ));

  // Function to handle cancel action
  const onCancel = () => {
    setProduct(defaultProductObject);
    close();
  };

  // Function to handle input change
  const onChangeEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Function to handle submit
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault(); // Prevent default form submission behavior
    const errors = productValidation({
      title: product.title,
      description: product.description,
      price: product.price,
      imageURL: product.imageURL,
    });
    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
    } else {
      setProducts((prev) => [
        ...prev,
        { ...product, id: uuid(), colors: tempColor },
      ]);
      setProduct(defaultProductObject);
      setTempColor([]);
      close();
    }
  };

  return (
    <main className="container m-auto">
      {/* Button to open modal */}
      <Button className="bg-indigo-700 cursor-pointer" onClick={open}>
        Add Product
      </Button>
      {/* Grid to display product cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 border border-zinc-600 rounded-md m-5 p-5 lg:p-2">
        {productListView}
      </div>
      {/* Modal for adding new product */}
      <MyModal
        isOpen={isOpen}
        closeModel={close}
        dialogTitle={"Add A New Product"}
      >
        <div className="space-y-3">
          {/* Render form inputs */}
          {productFormInputView}
          <div className="flex items-center space-x-2">{colorListView}</div>
          <div className="flex flex-wrap items-center space-x-1 cursor-pointer">
            {tempColor.map((color) => (
              <span
                key={color}
                style={{ background: color }}
                className="rounded-md text-white text-xs mb-1 p-1"
              >
                {color}
              </span>
            ))}
          </div>
          {/* Form for submitting or cancelling */}
          <form
            className="flex space-x-3"
            onSubmit={(event) => {
              onSubmitHandler(event);
            }}
          >
            {/* Submit button */}
            <Button className="bg-indigo-700 hover:bg-indigo-900 transition">
              Submit
            </Button>
            {/* Cancel button */}
            <Button
              onClick={onCancel}
              className="bg-gray-300 hover:bg-gray-500 transition"
            >
              Cancel
            </Button>
          </form>
        </div>
      </MyModal>
    </main>
  );
};

export default App;
