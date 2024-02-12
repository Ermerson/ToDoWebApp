import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TUI_SANITIZER } from "@taiga-ui/core";

import { MainComponent } from "./main.component";
import { MainRoutingModule } from "./main-routing.modules";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
  ],
  bootstrap: [MainComponent],
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})
export class MainModule { }
