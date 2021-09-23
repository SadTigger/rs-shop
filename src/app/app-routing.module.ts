import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/shop",
    pathMatch: "full",
  },
  {
    path: "main",
    redirectTo: "/shop",
    pathMatch: "full",
  },
  {
    path: "shop",
    loadChildren: () => import("./shop/shop.module").then((m) => m.ShopModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
