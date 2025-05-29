import { FORM_ERRORS } from "@/core/config/form-errors.config";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { MessageModule } from "primeng/message";

@Component({
  selector: "app-form-error-message",
  imports: [MessageModule],
  template: ` @let message = errorMessage;
    @if (message) {
      <p-message severity="error" size="small" variant="simple" class="mt-1">{{
        message
      }}</p-message>
    }`,
})
export class FormErrorMessageComponent {
  readonly field = input<string | undefined>();
  readonly control = input.required<AbstractControl>();
  readonly controlName = input.required<string>();

  get errorMessage(): string | null {
    if (!this.control().errors || !this.control().dirty) {
      return null;
    }

    const errorKey = Object.keys(this.control().errors!)[0]!;

    const error = this.control()?.errors?.[errorKey];

    let template = this.getMessageTemplate(errorKey);

    return template
      .replace(/:field/g, this.field() ?? this.controlName())
      .replace(/:min/g, error?.requiredLength ?? "")
      .replace(/:max/g, error?.requiredLength ?? error?.max ?? "")
      .replace(/:actual/g, error?.actualLength ?? error?.actual ?? "");
  }

  private getMessageTemplate(errorKey: string): string {
    const messageDef = FORM_ERRORS[errorKey];
    if (typeof messageDef === "string") {
      return messageDef;
    }

    if (typeof messageDef === "object") {
      return messageDef[this.controlName()] ?? messageDef["default"] ?? "Error";
    }

    return "Error desconocido";
  }
}
