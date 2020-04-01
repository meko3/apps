import { storiesOf, moduleMetadata } from "@storybook/angular";

import { MainComponent } from "./component";

storiesOf("Sample", module).add("usecase", () => ({
  component: MainComponent,
  props: {}
}));
