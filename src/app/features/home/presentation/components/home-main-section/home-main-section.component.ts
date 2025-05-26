import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-home-main-section",
  imports: [ButtonModule],
  templateUrl: "./home-main-section.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeMainSectionComponent {}
