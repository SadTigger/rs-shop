import { Component, Input } from "@angular/core";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

@Component({
  selector: "app-detailed-product-slider",
  templateUrl: "./detailed-product-slider.component.html",
  styleUrls: ["./detailed-product-slider.component.scss"],
})
export class DetailedProductSliderComponent {
  @Input() productUrls: string[] = [];
}
