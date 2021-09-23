import { Component, DoCheck, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Category } from "src/app/shared/models/category";
import { Product } from "src/app/shared/models/product";
import { SubCategory } from "src/app/shared/models/subcategory";
import { CategoriesService } from "../../services/categories.service";
import { GoodsService } from "../../services/goods.service";

@Component({
  selector: "app-sub-category",
  templateUrl: "./sub-category.component.html",
  styleUrls: ["./sub-category.component.scss"],
})
export class SubCategoryComponent implements OnInit, DoCheck {
  category!: Category;

  subcategory!: SubCategory;

  goods!: Product[];

  categoryId!: string;

  subcategoryId!: string;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private categoriesService: CategoriesService,
    private goodsService: GoodsService
  ) {}

  ngDoCheck(): void {
    this.categoryId = this.activateRoute.snapshot.params.category;
    this.subcategoryId = this.activateRoute.snapshot.params.subcategory;
  }

  ngOnInit() {
    this.activateRoute.url.subscribe(() => {
      this.categoryId = this.activateRoute.snapshot.params.category;
      this.subcategoryId = this.activateRoute.snapshot.params.subcategory;

      this.categoriesService
        .isSubcategoryValid(this.categoryId, this.subcategoryId)
        .subscribe((answer) => {
          if (!answer) {
            this.router.navigate(["/"]);
          }
        });

      this.categoriesService
        .getSubcategoryById(this.categoryId, this.subcategoryId)
        .subscribe((cat) => {
          this.subcategory = cat;
        });

      this.goodsService
        .getGoodsByCategories(this.categoryId, this.subcategoryId)
        .subscribe((goods) => {
          this.goods = goods;
        });
    });
  }
}
