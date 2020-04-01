import { Component, Input } from "@angular/core";

@Component({
  selector: "app-gear",
  templateUrl: "./gear.component.html",
  styleUrls: ["./gear.component.scss"]
})
export class GearComponent {
  @Input() height;
  @Input() width;
}
