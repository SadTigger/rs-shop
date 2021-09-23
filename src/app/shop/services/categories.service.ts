import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { Category } from "src/app/shared/models/category";
import { SubCategory } from "src/app/shared/models/subcategory";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  api: string = "http://localhost:3004";

  categoryUrl: string;

  category!: Category;

  subcategory!: SubCategory;

  constructor(private http: HttpClient) {
    this.categoryUrl = `${this.api}/categories`;
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl);
  }

  getCategoryById(id: string) {
    return this.getCategories().pipe(
      map((data) => {
        return data.find((el) => el.id === id);
      }),
      switchMap((data) => {
        if (!data) {
          return throwError(new Error(`There is no category. ${id}`));
        }
        return of(data);
      })
    );
  }

  getSubcategories(categoryId: string) {
    return this.getCategoryById(categoryId).pipe(
      map((category) => category?.subCategories)
    );
  }

  getSubcategoryById(categoryId: string, subcategoryId: string) {
    return this.getSubcategories(categoryId).pipe(
      map((data) => {
        return data.find((el) => el.id === subcategoryId);
      }),
      switchMap((data) => {
        if (!data) {
          return throwError(
            new Error(
              `There is no category. ${categoryId} or subcategory. ${subcategoryId}`
            )
          );
        }
        return of(data);
      })
    );
  }

  isCategoryValid(categoryId: string): Observable<boolean> {
    return this.getCategoryById(categoryId).pipe(
      map((category) => Boolean(category))
    );
  }

  isSubcategoryValid(
    categoryId: string,
    subcategoryId: string
  ): Observable<boolean> {
    return this.getCategoryById(categoryId).pipe(
      map((category) => {
        if (!category) return false;
        return Boolean(
          category.subCategories.find((el) => el.id === subcategoryId)
        );
      })
    );
  }
}
