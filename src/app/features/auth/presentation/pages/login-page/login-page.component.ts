import { LabelDirective } from "@/core/ui/directives";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { HomeIcon, LucideAngularModule } from "lucide-angular";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: "app-login-page",
  imports: [LucideAngularModule, LabelDirective, ButtonModule, InputTextModule],
  templateUrl: "./login-page.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  readonly HomeIcon = HomeIcon;
}
