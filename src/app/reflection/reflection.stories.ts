import { storiesOf, moduleMetadata } from "@storybook/angular";
import { ReflectionModule } from "./reflection.module";

storiesOf("Components", module)
.add("1. 自己省察の前に", () => ({
  template: `<div>
    <div>リストから選ぶ前に6つの質問について考えてみてください。</div><br />
    <div>1.親に教えられたことはありますか？それを実際に行動に移していますか？</div><br />
    <div>2.幼いころや思春期におけるもっとも重要な出来事及び経験は何ですか？それらが自分の世界観にどう影響を与えましたか？</div><br />
    <div>3.職場や私生活で、どんな人達を一番尊敬していて、その人たちのどんなところを尊敬していますか？</div><br />
    <div>4.一番尊敬していないのはどんな人ですか？なぜそういう風に思いますか？</div><br />
    <div>5.これまで最高（最悪）の上司は誰ですか？そう思うのは、その上司が何をしたからですか？</div><br />
    <div>6.自分の子供を育てた地、他人を指導するにあたり、一番伝えたいのはどんな行動で、一番伝えたくないのはどんな行動ですか？</div><br />
  </div>
  `,
}));

storiesOf("Components", module)
.addDecorator(moduleMetadata({
  imports: [ReflectionModule],
}))
.add("2. 自己省察", () => ({
  template: `
    <app-reflection></app-reflection>
  `,
}));
