import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ComponentsModule } from "./components.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/component";
import { GearComponent } from "./gear/gear.component";

@NgModule({
  declarations: [AppComponent, MainComponent, GearComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
