import Img from "../Img";
import Button from "../ui/Button";
import { Iproduct } from "../interfaces";
import { textSlicer } from "../../utils/function";
import CircleColor from "../ui/CircleColor";
interface Iprops {
  product: Iproduct;
  setProductToEdit: (product: Iproduct) => void;
  openEdit: () => void;
  idx: number;
  setProductToEditIdx: (value: number) => void;
  openRemove: () => void;
}
const index = ({
  product,
  setProductToEdit,
  openEdit,
  openRemove,
  setProductToEditIdx,
  idx,
}: Iprops) => {
  const { imageURL, title, description, price, colors, category } = product;

  const colorListView = colors.map((color) => (
    <CircleColor color={color} key={color} />
  ));

  const EditProduct = () => {
    setProductToEdit(product);
    setProductToEditIdx(idx);
    openEdit();
  };

  const RemoveProduct = () => {
    setProductToEdit(product);
    openRemove();
  };

  return (
    <div className="max-w-sm mx-auto md:mx-0 md:max-w-lg space-y-3 border border-zinc-300 rounded p-2 flex flex-col">
      <Img
        imageUrl={imageURL}
        alt={title}
        className="rounded-md mb-2 h-[230px] bg-cover"
      />
      <h3 className="font-bold text-zinc-800">{title}</h3>
      <p className="break-words">{textSlicer(description)}</p>
      <div className="flex items-center space-x-2">{colorListView}</div>
      <div className="flex items-center justify-between">
        <span>${price}</span>
        <Img
          imageUrl={category.imageURL}
          alt={title}
          className="w-9 h-9 rounded-full object-center"
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button onClick={RemoveProduct} className="bg-red-700">
          Delete
        </Button>
        <Button className="bg-indigo-700" onClick={EditProduct}>
          Edit
        </Button>
      </div>
    </div>
  );
};

export default index;
