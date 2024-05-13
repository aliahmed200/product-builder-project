import Img from "../Img";
import Button from "../ui/Button";
import { Iproduct } from "../interfaces";
import { textSlicer } from "../../utils/function";
interface Iprops {
  product: Iproduct;
}

const index = ({ product }: Iprops) => {
  const { imageURL, title, description, price } = product;
  return (
    <div className="max-w-sm mx-auto md:mx-0 md:max-w-lg border border-zinc-300 rounded p-2 flex flex-col">
      <Img imageUrl={imageURL} alt={title} className="rounded-md mb-2" />
      <h3>{title}</h3>
      <p>{textSlicer(description)}</p>
      <div className="flex items-center my-4 space-x-2 cursor-pointer">
        <span className="w-5 h-5 rounded-full bg-red-500" />
        <span className="w-5 h-5 rounded-full bg-blue-500" />
        <span className="w-5 h-5 rounded-full bg-yellow-500" />
      </div>
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
          Submit
        </Button>
        <Button className="bg-red-700">Edit</Button>
      </div>
    </div>
  );
};

export default index;
