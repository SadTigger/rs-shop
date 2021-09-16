import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SwiperModule } from "swiper/angular";
import { MaterialModule } from "./material/material.module";

const SharedModules = [CommonModule, MaterialModule, SwiperModule];
@NgModule({
  declarations: [],
  imports: [SharedModules],
  exports: [SharedModules],
})
export class SharedModule {}
