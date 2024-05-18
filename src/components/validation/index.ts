/**
 * Validates product data.
 * @param {Object} product - The product object to validate.
 * @param {string} product.title - The title of the product.
 * @param {string} product.description - The description of the product.
 * @param {string} product.price - The price of the product.
 * @param {string} product.imageURL - The URL of the product image.
 * @returns {Object} - An object containing error messages for invalid fields.
 */
export const productValidation = (product: {
  title: string;
  description: string;
  price: string;
  imageURL: string;
}) => {
  //return an object

  const errors = {
    title: "",
    description: "",
    price: "",
    imageURL: "",
  };

  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

  //title validation
  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Product Description Must Be Between 10 And 80 Characters!";
  }

  //description validation
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 900
  ) {
    errors.description =
      "Product Description Must Be Between 10 And 900 Characters!";
  }

  //imageURL validation
  if (!product.description.trim() || !validUrl) {
    errors.imageURL = "Valid Image Url Is Required!";
  }

  //validation price
  if (
    !product.description.trim() ||
    isNaN(Number(product.price)) ||
    product.description.length > 900
  ) {
    errors.price = "Valid Price Is Required!";
  }
  
  return errors;
};
