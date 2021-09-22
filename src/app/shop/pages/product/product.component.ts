import { Component, Input } from "@angular/core";
import { Product } from "src/app/shared/models/product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent {
  @Input() product!: Product;

  testProduct: Product = {
    id: "LGGAB491SJQL",
    name: "Холодильник с морозильником LG GA-B491SJQL",
    imageUrls: [
      "https://cdn21vek.by/img/galleries/785/539/preview_b/gab419sqjl_lg_6006f85541cb9.jpeg",
      "https://cdn21vek.by/img/galleries/785/539/preview_b/gab419sqjl_lg_5c04db850d2fd.jpeg",
      "https://cdn21vek.by/img/galleries/785/539/preview_b/gab419sqjl_lg_5c04db90dae64.jpeg",
    ],
    availableAmount: 3,
    price: 999,
    rating: 4,
    description:
      "Обзор Холодильник с морозильником LG GA-B491SJQL — быстрая заморозка не повреждает структуру продуктов, сохраняет их вкус, цвет и питательные свойства. При быстрой заморозке кристаллы льда в тканях образуются быстрее, равномернее и мельче по размеру. Эта функция особенно полезна для лучшего сохранения домашних заготовок.",
    isInCart: false,
    isFavorite: false,
    category: "appliances",
    subCategory: "refrigerators",
  };

  addToCart(): void {}

  addToFavorite(): void {}

  removeFromFavorite(): void {}
}
