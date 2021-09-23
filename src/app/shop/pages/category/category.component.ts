import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { Category } from "src/app/shared/models/category";
import { CategoriesService } from "src/app/shop/services/categories.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit {
  category!: Category;

  categoryTemp = new BehaviorSubject<Category | undefined>(undefined);

  currentUrl!: string;

  categoryId!: string;

  category$!: Observable<Category>;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.categoryId = this.activateRoute.snapshot.params.category;
    this.categoriesService
      .isCategoryValid(this.categoryId)
      .subscribe((answer) => {
        if (!answer) {
          this.router.navigate(["/"]);
        }
      });
    this.categoriesService.getCategoryById(this.categoryId).subscribe((cat) => {
      this.category = cat;
      this.categoryTemp.next(cat);
    });
  }
}
