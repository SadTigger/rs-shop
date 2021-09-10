import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { CommunicationsComponent } from "./components/header/communications/communications.component";
import { HeaderComponent } from "./components/header/header.component";
import { LocationComponent } from "./components/header/location/location.component";
import { WorkingTimeComponent } from "./components/header/working-time/working-time.component";

const CoreComponents = [
  HeaderComponent,
  LocationComponent,
  CommunicationsComponent,
  WorkingTimeComponent,
];

@NgModule({
  declarations: [CoreComponents],
  imports: [SharedModule],
  exports: [CoreComponents],
})
export class CoreModule {}
