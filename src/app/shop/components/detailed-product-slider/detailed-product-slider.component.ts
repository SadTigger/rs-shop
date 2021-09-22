import { Component } from "@angular/core";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

@Component({
  selector: "app-detailed-product-slider",
  templateUrl: "./detailed-product-slider.component.html",
  styleUrls: ["./detailed-product-slider.component.scss"],
})
export class DetailedProductSliderComponent {
  productUrls: string[] = [
    "https://cdn21vek.by/img/galleries/785/539/preview_b/gab419sqjl_lg_6006f85541cb9.jpeg",
    "https://cdn21vek.by/img/galleries/785/539/preview_b/gab419sqjl_lg_5c04db850d2fd.jpeg",
    "https://cdn21vek.by/img/galleries/785/539/preview_b/gab419sqjl_lg_5c04db90dae64.jpeg",
  ];
}
