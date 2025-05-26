import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { HomeIcon, LucideAngularModule } from "lucide-angular";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  IconDefinition,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-home-footer",
  imports: [LucideAngularModule, RouterLink, FontAwesomeModule],
  templateUrl: "./home-footer.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFooterComponent {
  readonly HomeIcon = HomeIcon;

  readonly faFacebook = faFacebook;
  readonly faYoutube = faYoutube;
  readonly faInstagram = faInstagram;

  readonly footerLinks = [
    { label: "Términos y Condiciones", href: "/terms" },
    { label: "Libro de Reclamaciones", href: "/claims" },
    { label: "Blog", href: "/blog" },
    { label: "Centro de ayuda", href: "/help" },
  ];

  readonly footerSocialLinks: { icon: IconDefinition; href: string }[] = [
    { icon: this.faFacebook, href: "https://facebook.com/acme" },
    { icon: this.faInstagram, href: "https://instagram.com/acme" },
    { icon: this.faYoutube, href: "https://youtube.com/acme" },
  ];
}
