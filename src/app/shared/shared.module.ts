import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SwiperModule } from "swiper/angular";
import { MaterialModule } from "./material/material.module";

const SharedModules = [
  CommonModule,
  MaterialModule,
  SwiperModule,
  FormsModule,
  ReactiveFormsModule,
];
@NgModule({
  declarations: [],
  imports: [SharedModules],
  exports: [SharedModules],
})
export class SharedModule {}
