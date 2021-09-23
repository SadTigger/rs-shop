import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/shared/models/product";
import { GoodsService } from "../../services/goods.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  product!: Product;

  productId!: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private goodsService: GoodsService
  ) {}

  ngOnInit() {
    this.productId = this.activateRoute.snapshot.params.id;
    this.goodsService.getProductById(this.productId).subscribe((product) => {
      this.product = product;
    });
  }

  addToCart(): void {}

  addToFavorite(): void {}

  removeFromFavorite(): void {}
}
