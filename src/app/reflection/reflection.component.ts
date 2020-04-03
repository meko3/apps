import { Component, OnInit } from "@angular/core";

import { DndDropEvent, DropEffect } from "ngx-drag-drop";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-reflection",
  templateUrl: "./reflection.component.html",
  styleUrls: ["./reflection.component.scss"]
})
export class ReflectionComponent implements OnInit {

  public values = [
    [ "受容", "ありのままの自分を受け入れてもらう" ],
    [ "正確", "自分の意見や信念正しく伝える" ],
    [ "達成", "なにか重要なことを達成する" ],
    [ "冒険", "新しくてワクワクする体験をする" ],
    [ "魅力", "身体的な魅力を保つ" ],
    [ "権威", "他者に対して責任を持って指導する" ],
    [ "自治", "人まかせにしないで自分で決める" ],
    [ "美的", "身のまわりの美しいものを味わう" ],
    [ "庇護", "他者のめんどうをみる" ],
    [ "挑戦", "難しい仕事や問題に取り組む" ],
    [ "変化", "変化に富んだバラエティ豊かな人生を送る" ],
    [ "快適", "喜びに満ちた快適な人生を送る" ],
    [ "誓約", "絶対に破れない約束や近いを結ぶ" ],
    [ "慈愛", "他者を心配して助ける" ],
    [ "貢献", "世界の役に立つことをする" ],
    [ "協調", "他者と強力して何かをする" ],
    [ "礼儀", "他者に対して誠実で礼儀正しく接する" ],
    [ "創造", "新しくて斬新なアイデアを生む" ],
    [ "信頼", "信用があって頼れる人間になる" ],
    [ "義務", "自分の義務と責任を果たす" ],
    [ "調和", "周囲の環境と調和しながら生きる" ],
    [ "興奮", "スリルと刺激に満ちた人生を送る" ],
    [ "貞節", "パートナーにウソをつかず誠実に生きる" ],
    [ "名声", "有名になって存在を認めれる" ],
    [ "家族", "幸福で愛に満ちた家庭を作る" ],
    [ "体力", "丈夫で強い身体を保つ" ],
    [ "柔軟", "新たな環境にも簡単になじむ" ],
    [ "許し", "他人を許しながら生きる" ],
    [ "友情", "親密で助け合える友人を作る" ],
    [ "愉楽", "遊んで楽しむこと" ],
    [ "寛大", "自分の物を他人にあたえる" ],
    [ "真実", "自分が正しいと思うとおりに行動する" ],
    [ "信教", "自分を超えた存在の意思を考える" ],
    [ "成長", "変化と成長を維持する" ],
    [ "健康", "健やかで体調よく生きる" ],
    [ "有益", "他人の役に立つこと" ],
    [ "正直", "ウソをつかず正直に生きる" ],
    [ "希望", "ポジティブで楽観的に生きる" ],
    [ "謙遜", "地味で控えめに生きる" ],
    [ "笑い", "人生や世界のユーモラスな側面を見る" ],
    [ "独立", "他者に依存しないで生きる" ],
    [ "勤勉", "自分の仕事に一生懸命取り組む" ],
    [ "平安", "自分の内面の平和を維持する" ],
    [ "親密", "プライベートな体験を他人とシェアする" ],
    [ "正義", "すべての人を公平に扱う" ],
    [ "知識", "価値ある知識を学ぶ、または生み出す" ],
    [ "余暇", "自分の時間をリラックスして楽しむ" ],
    [ "寵愛", "親しい人から愛される" ],
    [ "愛慕", "誰かに愛をあたえる" ],
    [ "熟達", "いつもの仕事・作業に習熟する" ],
    [ "現在", "いまの瞬間に集中して生きる" ],
    [ "適度", "過剰を避けてほどよいところを探す" ],
    [ "単婚", "唯一の愛し合える相手を見つける" ],
    [ "反抗", "権威やルールに疑問を持って挑む" ],
    [ "配慮", "他人を心づかって世話すること" ],
    [ "開放", "新たな体験、発想、選択肢に心を開く" ],
    [ "秩序", "整理されて秩序のある人生を送る" ],
    [ "情熱", "なんらかの発想、活動、人々に深い感情を抱く" ],
    [ "快楽", "良い気分になること" ],
    [ "人気", "多くの人に好かれる" ],
    [ "権力", "他人をコントロールする" ],
    [ "目的", "人生の意味を方向性を定める" ],
    [ "合理", "理性と論理に従う" ],
    [ "現実", "現実的、実践的にふるまう" ],
    [ "責任", "責任をもって行動する" ],
    [ "危険", "リスクを取ってチャンスを手に入れる" ],
    [ "恋愛", "興奮して燃えるような恋をする" ],
    [ "安全", "安心感を得る" ],
    [ "受諾", "ありのままの自分を受け入れる" ],
    [ "自制", "自分の行動を自分でコントロールする" ],
    [ "自尊", "自分に自信を持つ" ],
    [ "自知", "自分について深い理解を持つ" ],
    [ "献身", "誰かに奉仕する" ],
    [ "性愛", "活動的で満足のいく性生活を送る" ],
    [ "単純", "シンプルでミニマルな暮らしをする" ],
    [ "孤独", "他人から離れて１人でいられる時間と空間を持つ" ],
    [ "精神", "精神的に成長し成熟する" ],
    [ "安定", "いつも一定して変化のない人生を送る" ],
    [ "寛容", "自分と違う存在を尊重して受け入れる" ],
    [ "伝統", "過去から受け継がれてきたパターンを尊重する" ],
  ];

  public myValues: any[];

  constructor() { }

  ngOnInit() {
    this.myValues = [];
  }

  public setValue(value, index) {
    this.myValues[index] = {
      tag: index,
      index: this.myValues.length,
      data: value,
      effectAllowed: "move",
      disable: false,
      handle: false,
      children: {},
    };
  }

  public get restValues() {
    return this.values.length - this.myValues.length;
  }

  private currentDraggableEvent:DragEvent;

  onDragStart( event:DragEvent ) {

    this.currentDraggableEvent = event;
  }

  onDragged( item:any, list:any[], effect:DropEffect ) {

    if( effect === "move" ) {

      const index = list.indexOf( item );
      list.splice( index, 1 );
    }
  }

  onDragEnd( event:DragEvent ) {

    this.currentDraggableEvent = event;
  }

  onDrop( event:DndDropEvent, list?:any[] ) {

    if( list
      && (event.dropEffect === "copy"
        || event.dropEffect === "move") ) {

      let index = event.index;

      if( typeof index === "undefined" ) {

        index = list.length;
      }

      list.splice( index, 0, event.data );
    }
  }

}
