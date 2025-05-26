import { cn } from "@/core/utils";
import { Directive, computed, inject, input, signal } from "@angular/core";
import { type VariantProps, cva } from "class-variance-authority";
import type { ClassValue } from "clsx";

export const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block",
);
export type LabelVariants = VariantProps<typeof labelVariants>;

@Directive({
  selector: "[appLabel]",
  standalone: true,
  host: {
    "[class]": "_computedClass()",
  },
})
export class LabelDirective {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  public readonly error = input<boolean | undefined>(false, {
    alias: "hasError",
  });

  private readonly _additionalClasses = signal<ClassValue>("");

  protected readonly _computedClass = computed(() =>
    cn(labelVariants(), this.userClass(), this.error() && "text-red-500"),
  );

  public setClass(classes: string): void {
    this._additionalClasses.set(classes);
  }
}
