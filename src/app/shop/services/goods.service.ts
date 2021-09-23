import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { Product } from "src/app/shared/models/product";

@Injectable({
  providedIn: "root",
})
export class GoodsService {
  api: string = "http://localhost:3004";

  goodsUrl: string;

  goods = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {
    this.goodsUrl = `${this.api}/goods`;
  }

  getGoodsByCategories(
    category: string,
    subcategory: string
  ): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${this.goodsUrl}/category/${category}/${subcategory}`)
      .pipe(
        map((response) => response),
        mergeMap((data) => {
          this.goods.next(data);
          return this.goods.asObservable();
        })
      );
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.goodsUrl}/item/${id}`);
  }
}
