import { ButtonDirective } from "@/core/ui/directives";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-home-main-section",
  imports: [ButtonDirective],
  templateUrl: "./home-main-section.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeMainSectionComponent {}
