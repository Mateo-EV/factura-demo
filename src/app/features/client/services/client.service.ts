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

export interface EditClient {
  name: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: "root",
})
export class ClientService {
  private state = signal({
    clients: new Map<number, Client>(),
  });
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
        this.state().clients.set(client.id, client);
        this.clientId++;
      });
    });
  }

  getFormattedClients(): Client[] {
    return Array.from(this.state().clients.values());
  }

  getClientById(id: number): Client | undefined {
    return this.state().clients.get(id);
  }

  createClient(client: CreateClient): void {
    const newId = this.clientId + 1;
    const newClient: Client = {
      id: newId,
      ...client,
    };
    this.state.update((clientsMap) => ({
      ...clientsMap,
      clients: clientsMap.clients.set(newId, newClient),
    }));
    this.clientId = newId;
  }

  updateClient(id: number, updatedClient: EditClient): void {
    const client = this.state().clients.get(id);
    if (client) {
      const updatedData = { ...client, ...updatedClient };
      this.state.update((clientsMap) => ({
        ...clientsMap,
        clients: clientsMap.clients.set(id, updatedData),
      }));
    }
  }

  deleteClient(id: number): void {
    this.state.update((clientsMap) => {
      const newClients = new Map(clientsMap.clients);
      newClients.delete(id);
      return {
        ...clientsMap,
        clients: newClients,
      };
    });
  }
}
