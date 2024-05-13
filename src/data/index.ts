// import { v4 as uuid } from "uuid";
import { v4 as uuid } from "uuid";
import { Iproduct } from "../components/interfaces";
export const productList: Iproduct[] = [
  {
    id: uuid(),
    title: "2022 Genesis GV70 Nominee",
    imageURL:
      "https://images.hgmsites.net/hug/2022-genesis-gv70_100801180_h.jpg",
    description:
      "As Luxury brands go, South Korea's Genesis is still in its infancy, having emerged as a premium automotive marque only in 2015. Despite its youth, Genesis has quickly gained recognition for its elegant design, advanced technology, and refined performance, positioning itself as a formidable contender in the luxury car market.",
    price: "50000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "car",
      imageURL:
        "https://images.hgmsites.net/hug/2022-genesis-gv70_100801180_h.jpg",
    },
  },
  {
    id: uuid(),
    title: "2023 Audi A6 Prestige",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Z9cNm0YYYbYqi006W6uuSg4pphMntdnC-AQlXjhPpg&s",
    description:
      "The 2023 Audi A6 Prestige embodies luxury and performance. With its sleek design and cutting-edge technology, this sedan offers an unparalleled driving experience. Experience the thrill of the road like never before with the Audi A6 Prestige.",
    price: "60000",
    colors: ["#000000", "#FFFFFF", "#FF0000"],
    category: {
      name: "car",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Z9cNm0YYYbYqi006W6uuSg4pphMntdnC-AQlXjhPpg&s",
    },
  },
  {
    id: uuid(),
    title: "2024 BMW 5 Series",
    imageURL:
      "https://hips.hearstapps.com/hmg-prod/images/p90505005-646d1a20c69ba.jpeg?crop=1xw:1xh;center,top&resize=980:*",
    description:
      "Introducing the 2024 BMW 5 Series, a perfect blend of luxury and performance. With its sophisticated design and advanced features, this sedan redefines driving pleasure. Elevate your driving experience with the BMW 5 Series.",
    price: "55000",
    colors: ["#0000FF", "#FFFFFF", "#00FF00"],
    category: {
      name: "car",
      imageURL:
        "https://hips.hearstapps.com/hmg-prod/images/p90505005-646d1a20c69ba.jpeg?crop=1xw:1xh;center,top&resize=980:*",
    },
  },
  {
    id: uuid(),
    title: "2022 Mercedes-Benz E-Class",
    imageURL:
      "https://media.ed.edmunds-media.com/mercedes-benz/e-class/2023/oem/2023_mercedes-benz_e-class_sedan_amg-e-53_fq_oem_1_1280.jpg",
    description:
      "Experience luxury like never before with the 2022 Mercedes-Benz E-Class. With its elegant design and advanced technology, this sedan offers a truly refined driving experience. Indulge in the luxury of Mercedes-Benz.",
    price: "65000",
    colors: ["#000000", "#FFFFFF", "#FF0000"],
    category: {
      name: "car",
      imageURL:
        "https://media.ed.edmunds-media.com/mercedes-benz/e-class/2023/oem/2023_mercedes-benz_e-class_sedan_amg-e-53_fq_oem_1_1280.jpg",
    },
  },
  {
    id: uuid(),
    title: "2023 Lexus LS 500",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJm1k3sENOBtuUmTCz-z7Z3ZKtd2IUBBq3z1IKGZqrdw&s",
    description:
      "Unleash the power of luxury with the 2023 Lexus LS 500. With its bold design and uncompromising performance, this sedan sets new standards for excellence. Experience luxury redefined with the Lexus LS 500.",
    price: "70000",
    colors: ["#000000", "#FFFFFF", "#0000FF"],
    category: {
      name: "car",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJm1k3sENOBtuUmTCz-z7Z3ZKtd2IUBBq3z1IKGZqrdw&s",
    },
  },
  {
    id: uuid(),
    title: "2024 Porsche Panamera",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_3xbrtc_QpPhGw89mOtYhW17nCYm-lBENS72OeIW_0w&s",
    description:
      "Introducing the 2024 Porsche Panamera, the epitome of luxury and performance. With its iconic design and cutting-edge technology, this sedan offers an exhilarating driving experience. Elevate your journey with the Porsche Panamera.",
    price: "80000",
    colors: ["#000000", "#FFFFFF", "#FF0000"],
    category: {
      name: "car",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_3xbrtc_QpPhGw89mOtYhW17nCYm-lBENS72OeIW_0w&s",
    },
  },
  {
    id: uuid(),
    title: "2023 Jaguar XJ",
    imageURL:
      "https://hips.hearstapps.com/hmg-prod/images/2023-jaguar-xf-sedan-front-1663006302.jpg?crop=0.844xw:0.949xh;0.0130xw,0.0146xh&resize=768:*",
    description:
      "Experience luxury in motion with the 2023 Jaguar XJ. With its sleek design and powerful performance, this sedan delivers an unforgettable driving experience. Indulge in the elegance of Jaguar.",
    price: "75000",
    colors: ["#000000", "#FFFFFF", "#0000FF"],
    category: {
      name: "car",
      imageURL:
        "https://hips.hearstapps.com/hmg-prod/images/2023-jaguar-xf-sedan-front-1663006302.jpg?crop=0.844xw:0.949xh;0.0130xw,0.0146xh&resize=768:*",
    },
  },
  {
    id: uuid(),
    title: "2022 Tesla Model S Plaid",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpEdQ-V2KLQwXkm2fDuEPN6sF_zEo9ig-9h6j1YK7tYg&s",
    description:
      "Experience the future of driving with the 2022 Tesla Model S Plaid. With its futuristic design and unmatched performance, this electric sedan redefines what's possible on the road. Embrace the power of Tesla.",
    price: "90000",
    colors: ["#000000", "#FFFFFF", "#00FF00"],
    category: {
      name: "car",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpEdQ-V2KLQwXkm2fDuEPN6sF_zEo9ig-9h6j1YK7tYg&s",
    },
  },
  {
    id: uuid(),
    title: "2023 Cadillac CT6",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfkPXIWIKBPPhM3QYMvrb5VxfqMp28DjjdqqRF9UicYQ&s",
    description:
      "Unleash the power of luxury with the 2023 Cadillac CT6. With its bold design and refined performance, this sedan offers a truly elevated driving experience. Experience luxury like never before with Cadillac.",
    price: "70000",
    colors: ["#000000", "#FFFFFF", "#FF0000"],
    category: {
      name: "car",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfkPXIWIKBPPhM3QYMvrb5VxfqMp28DjjdqqRF9UicYQ&s",
    },
  },
  {
    id: uuid(),
    title: "2024 Lincoln Continental",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuQmxpioKuf6HJSY8JrmqfvnKuOJ1UM2dG6cz1A7QpCA&s",
    description:
      "Indulge in luxury with the 2024 Lincoln Continental. With its elegant design and advanced features, this sedan offers a refined driving experience. Elevate your journey with Lincoln.",
    price: "65000",
    colors: ["#000000", "#FFFFFF", "#0000FF"],
    category: {
      name: "car",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuQmxpioKuf6HJSY8JrmqfvnKuOJ1UM2dG6cz1A7QpCA&s",
    },
  },
];
