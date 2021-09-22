import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";
import { CardProductComponent } from "./components/card-product/card-product.component";
import { CategoryCardsComponent } from "./components/category-cards/category-cards.component";
import { DetailedProductSliderComponent } from "./components/detailed-product-slider/detailed-product-slider.component";
import { MainSliderComponent } from "./components/main-slider/main-slider.component";
import { StockStatusDirective } from "./directives/stock-status.directive";
import { CategoryComponent } from "./pages/category/category.component";
import { MainComponent } from "./pages/main/main.component";
import { ProductComponent } from "./pages/product/product.component";
import { SubCategoryComponent } from "./pages/sub-category/sub-category.component";

const shopRoutes = [
  { path: "", component: MainComponent },
  {
    path: ":category",
    component: CategoryComponent,
  },
  {
    path: ":category/:subcategory",
    component: SubCategoryComponent,
  },
  {
    path: ":category/:subcategory/:id",
    component: ProductComponent,
  },
];
@NgModule({
  declarations: [
    MainComponent,
    MainSliderComponent,
    CardProductComponent,
    StockStatusDirective,
    CategoryCardsComponent,
    CategoryComponent,
    SubCategoryComponent,
    ProductComponent,
    DetailedProductSliderComponent,
  ],
  imports: [RouterModule.forChild(shopRoutes), CoreModule, SharedModule],
  exports: [RouterModule],
})
export class ShopModule {}
