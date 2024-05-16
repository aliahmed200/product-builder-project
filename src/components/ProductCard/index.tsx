import Img from "../Img";
import Button from "../ui/Button";
import { Iproduct } from "../interfaces";
import { textSlicer } from "../../utils/function";
import CircleColor from "../ui/CircleColor";
interface Iprops {
  product: Iproduct;
}

const index = ({ product }: Iprops) => {
  const { imageURL, title, description, price, colors } = product;

  const colorListView = colors.map((color) => ( 
    <CircleColor color={color} key={color} />
  ));

  return (
    <div className="max-w-sm mx-auto md:mx-0 md:max-w-lg border border-zinc-300 rounded p-2 flex flex-col">
      <Img imageUrl={imageURL} alt={title} className="rounded-md mb-2" />
      <h3>{title}</h3>
      <p>{textSlicer(description)}</p>
      <div className="flex items-center space-x-2">{colorListView}</div>
      <div className="flex items-center justify-between">
        <span>${price}</span>
        <Img
          imageUrl={imageURL}
          alt={title}
          className="w-9 h-9 rounded-full object-center"
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button
          onClick={() => {
            alert("clicked");
          }}
          className="bg-indigo-700"
        >
          Delete
        </Button>
        <Button className="bg-red-700">Edit</Button>
      </div>
    </div>
  );
};

export default index;
