import lamp from "../assets/hanging-lamp.png";
import vase from "../assets/flower-vase.png";
import chair1 from "../assets/modern-chair.png";
import chair2 from "../assets/lounge-chair.png";
import table from "../assets/side-table.png";
import category1 from "../assets/category1.jpg";
import category2 from "../assets/category2.jpg";
import category3 from "../assets/category3.jpg";
import category4 from "../assets/category4.jpg";

export const products = [
    {
      id: 1,
      title: "lighting",
      name: "aura pendent lamp",
      img: lamp,
      price: 30.0,
    },
    {
      id: 2,
      title: "accessories",
      name: "flower vase decor",
      img: vase,
      price: 20.0,
    },
    {
      id: 3,
      title: "seating",
      name: "modern chair",
      img: chair1,
      price: 100.0,
    },
    {
      id: 4,
      title: "seating",
      name: "Embrace lounge chair",
      img: chair2,
      price: 200.0,
    },
    { id: 5, title: "tables", name: "side table", img: table, price: 150.0 },
  ];

  export const furniture = [
      { title: "Seating", image: category1 },
      { title: "Lighting", image: category2 },
      { title: "Tables", image: category3 },
      { title: "Accessories", image: category4 },
    ];
