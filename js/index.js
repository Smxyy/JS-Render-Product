import { CardComponent } from "../components/CardComponent.js";
import { products } from "../data/products.js";
let renderArea = document.querySelector("#renderArea");

//RENDER PRODUCTS
products.map((product) => (renderArea.innerHTML += CardComponent(product)));