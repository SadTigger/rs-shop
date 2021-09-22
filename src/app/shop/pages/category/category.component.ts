import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Category } from "src/app/shared/models/category";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit {
  @Input() category!: Category;

  currentUrl!: string;

  testCategory: Category = {
    id: "appliances",
    name: "Бытовая техника",
    subCategories: [
      {
        id: "refrigerators",
        name: "Холодильники",
      },
      {
        id: "cookers",
        name: "Кухонные плиты",
      },
      {
        id: "dishwashers",
        name: "Посудомоечные машины",
      },
      {
        id: "freezers",
        name: "Морозильники",
      },
      {
        id: "microwaves",
        name: "Микроволновые печи",
      },
      {
        id: "teapots",
        name: "Электрочайники",
      },
      {
        id: "washing-machines",
        name: "Стиральные машины",
      },
      {
        id: "irons",
        name: "Утюги",
      },
      {
        id: "vacuum",
        name: "Пылесосы",
      },
    ],
  };

  categoryId!: string;

  constructor(private router: Router, private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.categoryId = this.activateRoute.snapshot.params.category;
    /*
      TODO
      Check is categoryId is valid or not by response to 'http://localhost:3004/categoriesor Input obj
      if (this.category.id !== this.categoryId) {
        this.router.navigate(['/']);
      }
    */
    if (this.categoryId !== "appliances") {
      this.router.navigate(["/"]);
    }
  }
}
