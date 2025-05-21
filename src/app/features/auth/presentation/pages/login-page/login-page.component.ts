import {
  ButtonDirective,
  InputDirective,
  LabelDirective,
} from "@/core/ui/directives";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LucideAngularModule, HomeIcon } from "lucide-angular";

@Component({
  selector: "app-login-page",
  imports: [
    LucideAngularModule,
    ButtonDirective,
    LabelDirective,
    InputDirective,
  ],
  templateUrl: "./login-page.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  readonly HomeIcon = HomeIcon;
}
