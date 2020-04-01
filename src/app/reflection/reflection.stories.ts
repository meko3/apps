import { storiesOf, moduleMetadata } from "@storybook/angular";
import { ReflectionComponent } from "./reflection.component";

storiesOf("Components", module)
.add("自己省察", () => ({
  component: ReflectionComponent,
}));
