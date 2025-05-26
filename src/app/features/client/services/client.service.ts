import { Injectable, signal } from "@angular/core";
import { of } from "rxjs";

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface CreateClient {
  name: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: "root",
})
export class ClientService {
  private clients = signal(new Map<number, Client>());
  private clientId = 0;

  constructor() {
    this.getCharacters();
  }

  private getCharacters(): void {
    const clients: Client[] = [
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "555-1234",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "555-5678",
      },
      {
        id: 3,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        phone: "555-9012",
      },
    ];

    of(clients).subscribe((data) => {
      data.forEach((client) => {
        this.clients().set(client.id, client);
      });
    });
  }

  getFormattedClients(): Client[] {
    return Array.from(this.clients().values());
  }

  getClientById(id: number): Client | undefined {
    return this.clients().get(id);
  }

  createClient(client: CreateClient): void {
    const newId = this.clientId + 1;
    const newClient: Client = {
      id: newId,
      ...client,
    };
    this.clients().set(newId, newClient);
    this.clientId = newId;
  }

  updateClient(id: number, updatedClient: Partial<Client>): void {
    const client = this.clients().get(id);
    if (client) {
      const updatedData = { ...client, ...updatedClient };
      this.clients().set(id, updatedData);
    }
  }

  deleteClient(id: number): void {
    this.clients().delete(id);
  }
}
