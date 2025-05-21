import { cn } from "@/core/utils";
import {
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  Renderer2,
} from "@angular/core";

const labelClasses =
  "text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block";

@Directive({
  selector: "[appLabel]",
  standalone: true,
})
export class LabelDirective {
  readonly class = input<string | undefined>(undefined);

  readonly el = inject(ElementRef);
  readonly renderer = inject(Renderer2);

  constructor() {
    effect(() => {
      this.applyClasses(cn(labelClasses, this.class()));
    });
  }

  private applyClasses(classes: string) {
    this.renderer.setAttribute(this.el.nativeElement, "class", classes);
  }
}
