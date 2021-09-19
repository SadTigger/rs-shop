import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";
import { MainSliderComponent } from "./components/main-slider/main-slider.component";
import { MainComponent } from "./pages/main/main.component";
import { CardProductComponent } from "./components/card-product/card-product.component";

const shopRoutes = [{ path: "", component: MainComponent }];
@NgModule({
  declarations: [MainComponent, MainSliderComponent, CardProductComponent],
  imports: [RouterModule.forChild(shopRoutes), CoreModule, SharedModule],
  exports: [RouterModule],
})
export class ShopModule {}
