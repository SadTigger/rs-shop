import { Component, Input } from "@angular/core";
import { Product } from "src/app/shared/models/product";

@Component({
  selector: "app-category-cards",
  templateUrl: "./category-cards.component.html",
  styleUrls: ["./category-cards.component.scss"],
})
export class CategoryCardsComponent {
  @Input() products!: Product[];

  loadMore(): void {}
}
