import { NgModule } from "@angular/core";

import { GearModule } from "./gear/gear.module";

@NgModule({
  exports: [GearModule],
})
export class ComponentsModule {}
