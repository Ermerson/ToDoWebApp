import { NgModule } from "@angular/core";

import { MainComponent } from "./main.component";
import { BrowserModule } from "@angular/platform-browser";
import { MainRoutingModule } from "./main-routing.modules";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,
  ],
  bootstrap: [MainComponent]
})
export class MainModule { }
