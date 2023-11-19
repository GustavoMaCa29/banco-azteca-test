import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {RangeBarComponent} from "./range-bar/range-bar.component";
import {NgForOf} from "@angular/common";
import {CardComponent} from "./card/card.component";

@NgModule({
  imports: [
    IonicModule,
    NgForOf
  ],
  declarations: [
    NavBarComponent,
    RangeBarComponent,
    CardComponent
  ],
  exports: [
    NavBarComponent,
    RangeBarComponent,
    CardComponent
  ],
})

export class AppComponentsModule {
}
