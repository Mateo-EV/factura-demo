import { cn } from "@/core/utils";
import {
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  Renderer2,
} from "@angular/core";
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "flex h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
);

@Directive({
  selector: "[appInput]",
})
export class InputDirective {
  readonly class = input<string | undefined>(undefined);

  readonly el = inject(ElementRef);
  readonly renderer = inject(Renderer2);

  constructor() {
    effect(() => {
      this.applyClasses(cn(inputVariants({ class: this.class() })));
    });
  }

  private applyClasses(classes: string) {
    this.renderer.setAttribute(this.el.nativeElement, "class", classes);
  }
}
