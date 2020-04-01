import { storiesOf, moduleMetadata } from "@storybook/angular";
import { GearModule } from "./gear.module";

storiesOf("Components", module)
.addDecorator(moduleMetadata(
  { imports: [GearModule] }
))
.add("gear", () => ({
  template: `
    <app-gear [height]="height" [width]="width"></app-gear>
  `,
  props: {
    height: 50,
    width: 50,
  }
}));
