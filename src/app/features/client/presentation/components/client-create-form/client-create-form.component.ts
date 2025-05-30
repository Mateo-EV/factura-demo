import { FormErrorMessageComponent } from "@/core/ui/components/form/form-error-message/form-error-message.component";
import {
  ClientService,
  type CreateClient,
} from "@/features/client/services/client.service";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { FloatLabelModule } from "primeng/floatlabel";
import { InputTextModule } from "primeng/inputtext";
import { MessageModule } from "primeng/message";

type CreateClientForm = {
  [K in keyof CreateClient]: FormControl<CreateClient[K]>;
};

@Component({
  selector: "app-client-create-form",
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    MessageModule,
    FormErrorMessageComponent,
  ],
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

  private readonly clientService = inject(ClientService);

  readonly onSubmitCancelled = output<void>();
  readonly onSubmitSuccess = output<void>();

  onSubmit() {
    if (!this.clientCreateForm.valid) {
      Object.values(this.clientCreateForm.controls).forEach((control) =>
        control.markAsDirty(),
      );
      return;
    }

    this.clientService.createClient({
      name: this.clientCreateForm.value.name!,
      email: this.clientCreateForm.value.email!,
      phone: this.clientCreateForm.value.phone!,
    });

    this.clientCreateForm.reset();
    this.onSubmitSuccess.emit();
  }
}
