import { NgModule } from "@angular/core";

import { ReflectionComponent } from "./reflection.component";
import { CommonModule } from '@angular/common';
import { DndModule } from "ngx-drag-drop";

import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [ReflectionComponent],
  exports: [ReflectionComponent],
  imports: [CommonModule, DndModule, MatCardModule],
})
export class ReflectionModule {}
