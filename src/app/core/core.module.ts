import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { CommunicationsComponent } from "./header/communications/communications.component";
import { HeaderComponent } from "./header/header.component";
import { LocationComponent } from "./header/location/location.component";

const CoreComponents = [
  HeaderComponent,
  LocationComponent,
  CommunicationsComponent,
];

@NgModule({
  declarations: [CoreComponents],
  imports: [SharedModule],
  exports: [CoreComponents],
})
export class CoreModule {}
