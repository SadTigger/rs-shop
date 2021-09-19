import { Component, Input } from "@angular/core";
import { Product } from "src/app/shared/models/product";

@Component({
  selector: "app-card-product",
  templateUrl: "./card-product.component.html",
  styleUrls: ["./card-product.component.scss"],
})
export class CardProductComponent {
  @Input() product!: Product;

  testProduct: Product = {
    id: "612d47b2f748bc99cbc57b29",
    name: "Электрочайник Xiaomi Mi Electric Kettle / SKV4035GL",
    imageUrls: [
      "https://cdn21vek.by/img/galleries/807/357/preview_b/mielectrickettleskv4035gl_xiaomi_5c2376ad5ead5.jpeg",
      "https://cdn21vek.by/img/galleries/807/357/preview_b/mielectrickettleskv4035gl_xiaomi_5c52eb547726c.jpeg",
      "https://cdn21vek.by/img/galleries/807/357/preview_b/mielectrickettleskv4035gl_xiaomi_5c52e9c5e605b.jpeg",
    ],
    rating: 3,
    availableAmount: 17,
    price: 75,
    description:
      "dolor cupidatat consectetur aute aliqua deserunt consectetur quis occaecat esse adipisicing esse dolore duis magna amet aute minim nulla labore duis nostrud velit amet duis aliqua veniam sunt ullamco eu et ullamco sit ea eu veniam veniam anim enim enim",
    isInCart: true,
    isFavorite: true,
    category: "appliances",
    subCategory: "teapots",
  };

  addToCart(): void {}

  addToFavorite(): void {}

  removeFromFavorite(): void {}
}
