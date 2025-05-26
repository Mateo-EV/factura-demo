import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import {
  HomeIcon,
  LucideAngularModule,
  MenuIcon,
  MoveUpRightIcon,
  XIcon,
} from "lucide-angular";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-home-header",
  imports: [LucideAngularModule, ButtonModule, RouterLink],
  templateUrl: "./home-header.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeaderComponent {
  readonly HomeIcon = HomeIcon;
  readonly MenuIcon = MenuIcon;
  readonly XIcon = XIcon;
  readonly MoveUpRightIcon = MoveUpRightIcon;

  readonly menuItems = [
    { label: "Consulta Comprobante", href: "/consulta" },
    { label: "Ingresar", href: "/ingresar" },
    { label: "Probar demo", href: "/demo" },
  ];

  isMobileMenuOpen = signal<boolean>(false);

  toggleIsMobileMenuOpen(): void {
    this.isMobileMenuOpen.update((prev) => !prev);
  }
}
