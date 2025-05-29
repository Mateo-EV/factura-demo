import { ClientCreateFormComponent } from "@/features/client/presentation/components";
import { ClientService } from "@/features/client/services/client.service";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from "@angular/core";
import { LucideAngularModule, PencilIcon, Trash2Icon } from "lucide-angular";
import { ConfirmationService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DialogModule } from "primeng/dialog";
import { TableModule } from "primeng/table";
import { ClientEditFormComponent } from "../../components/client-edit-form/client-edit-form.component";

@Component({
  selector: "app-client-page",
  imports: [
    DialogModule,
    ButtonModule,
    TableModule,
    ClientCreateFormComponent,
    ClientEditFormComponent,
    LucideAngularModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService],
  templateUrl: "./client-page.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientPageComponent {
  private readonly clientService = inject(ClientService);
  private readonly confirmationService = inject(ConfirmationService);

  readonly editIcon = PencilIcon;
  readonly deleteIcon = Trash2Icon;

  createModalIsOpen = signal(false);
  clientIdToEdit = signal<number | null>(null);

  editModalIsOpen = computed(() => Boolean(this.clientIdToEdit()));

  openCreateModal() {
    this.createModalIsOpen.set(true);
  }

  closeCreateModal() {
    this.createModalIsOpen.set(false);
  }

  openEditModal(clientId: number) {
    const client = this.clientService.getClientById(clientId);
    if (client) {
      this.clientIdToEdit.set(client.id);
    }
  }

  closeEditModal() {
    this.clientIdToEdit.set(null);
  }

  private deleteClient(clientId: number): void {
    this.clientService.deleteClient(clientId);
  }

  confirmDelete(event: Event, clientId: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      accept: () => this.deleteClient(clientId),
      header: "Confirmar Eliminación",
      message: "¿Estás seguro de que deseas eliminar este cliente?",
      acceptLabel: "Eliminar",
      rejectLabel: "Cancelar",
      rejectButtonProps: {
        label: "Cancelar",
        severity: "secondary",
        outlined: true,
      },
      acceptButtonProps: {
        label: "Eliminar",
        severity: "danger",
      },
    });
  }

  clients = computed(() => this.clientService.getFormattedClients());
}
