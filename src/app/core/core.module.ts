import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./header/header.component";

const CoreComponents = [HeaderComponent];

@NgModule({
  declarations: [CoreComponents],
  imports: [SharedModule],
  exports: [CoreComponents],
})
export class CoreModule {}
