export interface Iproduct {
  id?: string | undefined;
  title: string;
  imageURL: string;
  description: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

export interface IformProduct {
  id: string;
  name: "title" | "description" | "imageURL" | "price";
  label: string;
  type: string;
}
