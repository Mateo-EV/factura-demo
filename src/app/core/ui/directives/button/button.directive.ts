import { cn } from "@/core/utils";
import {
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  Renderer2,
} from "@angular/core";

import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-3xl px-8 py-6",
        icon: "h-9 w-9",
        link: "text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

@Directive({
  selector: "[appButton]",
  standalone: true,
})
export class ButtonDirective {
  readonly variant =
    input<VariantProps<typeof buttonVariants>["variant"]>("primary");
  readonly size = input<VariantProps<typeof buttonVariants>["size"]>("default");
  readonly class = input<string | undefined>(undefined);

  readonly el = inject(ElementRef);
  readonly renderer = inject(Renderer2);

  constructor() {
    effect(() => {
      this.applyClasses(
        cn(
          buttonVariants({ variant: this.variant(), size: this.size() }),
          this.class(),
        ),
      );
    });
  }

  private applyClasses(classes: string) {
    this.renderer.setAttribute(this.el.nativeElement, "class", classes);
  }
}
