import { ChangeDetectionStrategy, Component } from "@angular/core";
import {
  HomeFooterComponent,
  HomeHeaderComponent,
  HomeMainSectionComponent,
} from "@/features/home/presentation/components";

@Component({
  selector: "app-main-page",
  imports: [HomeHeaderComponent, HomeMainSectionComponent, HomeFooterComponent],
  templateUrl: "./main-page.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {}
