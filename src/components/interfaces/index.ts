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
  name: string;
  label: string;
  type: string;
}
