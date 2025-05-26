import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { type CreateClient } from "@/features/client/services/client.service";
import { InputTextModule } from "primeng/inputtext";
import { LabelDirective } from "@/core/ui/directives";

type CreateClientForm = {
  [K in keyof CreateClient]: FormControl<CreateClient[K]>;
};

@Component({
  selector: "app-client-create-form",
  imports: [ButtonModule, ReactiveFormsModule, InputTextModule, LabelDirective],
  templateUrl: "./client-create-form.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCreateFormComponent {
  private readonly fb = inject(NonNullableFormBuilder);

  readonly clientCreateForm: FormGroup<CreateClientForm> =
    this.fb.group<CreateClientForm>({
      name: this.fb.control("", { validators: [Validators.required] }),
      email: this.fb.control("", {
        validators: [Validators.required, Validators.email],
      }),
      phone: this.fb.control("", {
        validators: [Validators.required, Validators.pattern("^[0-9]*$")],
      }),
    });
}
