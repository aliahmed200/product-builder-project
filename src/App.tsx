import { useState } from "react";
import ProductCard from "./components/ProductCard"; // Importing ProductCard component
import MyModal from "./components/ui/MyModal"; // Importing MyModal component
import { categories, colors, formInputList, productList } from "./data"; // Importing formInputList and productList from data file
import Button from "../src/components/ui/Button"; // Importing Button component
import Input from "../src/components/ui/Input"; // Importing Input component
import { Iproduct } from "./components/interfaces"; // Importing Iproduct interface
import { productValidation } from "./components/validation";
import ErrorMessage from "./components/ui/ErrorMessage";
import CircleColor from "./components/ui/CircleColor";
import { v4 as uuid } from "uuid";
import SelectMenu from "../src/components/ui/SelectMenu";

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
  const [isOpenEditModal, setIsOpenEditModal] = useState(false); // State for Editmodal visibility
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false); // State for removemodal visibility
  const [tempColor, setTempColor] = useState<string[]>([]);

  //default error message
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [product, setProduct] = useState<Iproduct>(defaultProductObject); // State for product details
  const [productToEdit, setProductToEdit] =
    useState<Iproduct>(defaultProductObject); // State for product details
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0); // State for product details
  const [products, setProducts] = useState<Iproduct[]>(productList);
  const [selected, setSelected] = useState(categories[0]);
  // Function to close modal
  const close = () => {
    setIsOpen(false);
  };

  // Function to open modal
  const open = () => {
    setIsOpen(true);
  };

  // Function to close Edit modal
  const closeEdit = () => {
    setIsOpenEditModal(false);
  };

  // Function to open Edit modal
  const openEdit = () => {
    setIsOpenEditModal(true);
  };

  const closeRemove = () => {
    setIsOpenConfirmModal(false);
  };

  // Function to open Edit modal
  const openRemove = () => {
    setIsOpenConfirmModal(true);
  };

  // Mapping product list to ProductCard components
  const productListView = products.map((product, idx) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEdit={openEdit}
      openRemove={openRemove}
      idx={idx}
      setProductToEditIdx={setProductToEditIdx}
    />
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
          if (productToEdit.colors.includes(color)) {
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

  const onCancelEdit = () => {
    setProductToEdit(productToEdit);
    closeEdit();
  };
  const onCancelRemove = () => {
    closeRemove();
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
  const onChangeEditHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value, name } = event.target;
    setProductToEdit({
      ...productToEdit,
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
        { ...product, id: uuid(), colors: tempColor, category: selected },
      ]);
      setProduct(defaultProductObject);
      setTempColor([]);
      close();
    }
  };
  // Function to handle submit
  const EditHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault(); // Prevent default form submission behavior
    const errors = productValidation({
      title: productToEdit.title,
      description: productToEdit.description,
      price: productToEdit.price,
      imageURL: productToEdit.imageURL,
    });
    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
    } else {
      const updateProducts = [...products];
      updateProducts[productToEditIdx] = {
        ...productToEdit,
        colors: tempColor.concat(productToEdit.colors),
      };
      setProducts(updateProducts);

      setProductToEdit(defaultProductObject);
      setTempColor([]);
      closeEdit();
    }
  };
  const removeProductHandler = () => {
    console.log(productToEdit.id);
    setProducts((prev) => prev.filter((p) => p !== productToEdit));
    closeRemove();
  };

  const viewProductErrorWithMsg = (
    id: string,
    label: string,
    name: TproductName
  ) => {
    return (
      <div className={"flex flex-col"}>
        <label
          className="mb-[1px] text-sm font-medium text-gray-700"
          htmlFor={id}
        >
          {label}
        </label>
        <Input
          type="text"
          id={id}
          name={name}
          value={productToEdit[name]}
          onChange={(e) => {
            onChangeEditHandler(e);
          }}
        />
        <ErrorMessage message={errors[name]} />
      </div>
    );
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
          <SelectMenu selected={selected} setSelected={setSelected} />
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

      {/* Modal for edit a product */}
      <MyModal
        isOpen={isOpenEditModal}
        closeModel={closeEdit}
        dialogTitle={"EDIT THIS PRODUCT"}
      >
        <div className="space-y-3">
          {viewProductErrorWithMsg("title", "product title", "title")}
          {viewProductErrorWithMsg(
            "description",
            "product description",
            "description"
          )}
          {viewProductErrorWithMsg("imageURL", "product image URL", "imageURL")}
          {viewProductErrorWithMsg("price", "product price", "price")}
          {/* Render form inputs */}
          {/* {productFormInputView} */}
          <SelectMenu
            selected={selected}
            setSelected={(value) =>
              setProductToEdit({ ...productToEdit, category: value })
            }
          />
          <div className="flex items-center space-x-2">{colorListView}</div>
          <div className="flex flex-wrap items-center space-x-1 cursor-pointer">
            {tempColor.concat(productToEdit.colors).map((color) => (
              <span
                key={color}
                style={{ background: color }}
                className="rounded-md text-white text-xs mb-1 p-1"
              >
                {color}
              </span>
            ))}
          </div>
          <form
            className="flex space-x-3"
            onSubmit={(event) => {
              event.preventDefault();
              EditHandler(event);
            }}
          >
            {/* Submit button */}
            <Button className="bg-indigo-700 hover:bg-indigo-900 transition">
              Edit
            </Button>
            {/* Cancel button */}
            <Button
              onClick={(event) => {
                onCancelEdit();
                event.preventDefault();
              }}
              className="bg-gray-300 hover:bg-gray-500 transition"
            >
              Cancel
            </Button>
          </form>
        </div>
      </MyModal>

      <MyModal
        isOpen={isOpenConfirmModal}
        closeModel={closeRemove}
        dialogTitle={
          "Are you sure you want to remove this Product from your Store?"
        }
      >
        <div className="space-y-3">
          <span className="text-gray-600 font-semibold">
            Deleting this product will permanently remove it from your
            inventory. This action cannot be undone. Please ensure that you have
            reviewed all associated details before proceeding.
          </span>
          <div className="flex gap-3">
            <Button
              className="bg-[#c2344d] hover:bg-red-800 transition"
              onClick={removeProductHandler}
            >
              Yes, remove
            </Button>
            <Button
              className="bg-gray-300 hover:bg-gray-600 transition text-gray"
              onClick={onCancelRemove}
            >
              close
            </Button>
          </div>
        </div>
      </MyModal>
    </main>
  );
};

export default App;
