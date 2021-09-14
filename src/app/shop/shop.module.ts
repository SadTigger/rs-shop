import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";
import { MainComponent } from "./pages/main/main.component";

const shopRoutes = [{ path: "", component: MainComponent }];
@NgModule({
  declarations: [MainComponent],
  imports: [RouterModule.forChild(shopRoutes), CoreModule, SharedModule],
  exports: [RouterModule],
})
export class ShopModule {}
