import { Component } from "@angular/core";
import SwiperCore, { Autoplay, Pagination } from "swiper";

SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: "app-main-slider",
  templateUrl: "./main-slider.component.html",
  styleUrls: ["./main-slider.component.scss"],
})
export class MainSliderComponent {}
