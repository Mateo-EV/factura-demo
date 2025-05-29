import { FormErrorMessageComponent } from "@/core/ui/components/form/form-error-message/form-error-message.component";
import {
  Client,
  ClientService,
  EditClient,
} from "@/features/client/services/client.service";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
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

type EditClientForm = {
  [K in keyof EditClient]: FormControl<EditClient[K]>;
};

@Component({
  selector: "app-client-edit-form",
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    MessageModule,
    FormErrorMessageComponent,
  ],
  templateUrl: "./client-edit-form.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientEditFormComponent implements OnInit {
  private readonly fb = inject(NonNullableFormBuilder);

  readonly clientId = input.required<number>();

  readonly clientEditForm: FormGroup<EditClientForm> =
    this.fb.group<EditClientForm>({
      name: this.fb.control("", {
        validators: [Validators.required],
      }),
      email: this.fb.control("", {
        validators: [Validators.required, Validators.email],
      }),
      phone: this.fb.control("", {
        validators: [Validators.required, Validators.pattern("^[0-9]*$")],
      }),
    });

  ngOnInit() {
    const client = this.clientService.getClientById(this.clientId())!;

    this.clientEditForm.reset({
      name: client.name,
      email: client.email,
      phone: client.phone,
    });
  }

  private readonly clientService = inject(ClientService);

  readonly onSubmitCancelled = output<void>();
  readonly onSubmitSuccess = output<void>();

  onSubmit() {
    if (!this.clientEditForm.valid) {
      Object.values(this.clientEditForm.controls).forEach((control) =>
        control.markAsDirty(),
      );
      return;
    }

    this.clientService.updateClient(this.clientId(), {
      name: this.clientEditForm.value.name!,
      email: this.clientEditForm.value.email!,
      phone: this.clientEditForm.value.phone!,
    });

    this.clientEditForm.reset({
      name: this.clientEditForm.value.name!,
      email: this.clientEditForm.value.email!,
      phone: this.clientEditForm.value.phone!,
    });
    this.onSubmitSuccess.emit();
  }
}
