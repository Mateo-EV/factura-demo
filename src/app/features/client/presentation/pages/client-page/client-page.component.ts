import { ClientService } from "@/features/client/services/client.service";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from "@angular/core";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { TableModule } from "primeng/table";
import { ClientCreateFormComponent } from "@/features/client/presentation/components";

@Component({
  selector: "app-client-page",
  imports: [DialogModule, ButtonModule, TableModule, ClientCreateFormComponent],
  templateUrl: "./client-page.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientPageComponent {
  private readonly clientService = inject(ClientService);

  createModalIsOpen = signal(false);

  openCreateModal() {
    this.createModalIsOpen.set(true);
  }

  clients = computed(() => this.clientService.getFormattedClients());
}
