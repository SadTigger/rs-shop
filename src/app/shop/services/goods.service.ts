import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "src/app/shared/models/product";

@Injectable({
  providedIn: "root",
})
export class GoodsService {
  api: string = "http://localhost:3004";

  goodsUrl: string;

  constructor(private http: HttpClient) {
    this.goodsUrl = `${this.api}/goods`;
  }

  getGoodsByCategories(category: string, subcategory: string) {
    return this.http.get<Product[]>(
      `${this.goodsUrl}/category/${category}/${subcategory}`
    );
  }

  getProductById(id: string) {
    return this.http.get<Product>(`${this.goodsUrl}/item/${id}`);
  }
}
