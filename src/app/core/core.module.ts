import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FooterComponent } from "./components/footer/footer.component";
import { CatalogButtonComponent } from "./components/header/catalog-button/catalog-button.component";
import { CommunicationsComponent } from "./components/header/communications/communications.component";
import { HeaderCartComponent } from "./components/header/header-cart/header-cart.component";
import { HeaderComponent } from "./components/header/header.component";
import { LocationComponent } from "./components/header/location/location.component";
import { LogoComponent } from "./components/header/logo/logo.component";
import { NavbarMenuComponent } from "./components/header/navbar-menu/navbar-menu.component";
import { SearchFieldComponent } from "./components/header/search-field/search-field.component";
import { UserAccountComponent } from "./components/header/user-account/user-account.component";
import { WorkingTimeComponent } from "./components/header/working-time/working-time.component";

const CoreComponents = [
  HeaderComponent,
  LocationComponent,
  CommunicationsComponent,
  WorkingTimeComponent,
  NavbarMenuComponent,
  FooterComponent,
  LogoComponent,
  CatalogButtonComponent,
  SearchFieldComponent,
  UserAccountComponent,
  HeaderCartComponent,
];

@NgModule({
  declarations: [CoreComponents],
  imports: [SharedModule],
  exports: [CoreComponents],
})
export class CoreModule {}
