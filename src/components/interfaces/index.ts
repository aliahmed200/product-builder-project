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
  name: TproductName;
  label: string;
  type: string;
}

export interface Icategory {
  id: string;
  name: string;
  imageURL: string;
}
