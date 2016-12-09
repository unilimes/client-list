import {Component, OnInit} from "@angular/core";
import {ClientService} from "../../config/services/client.service";
import {Client} from "../../class/client";
import {ClientPipe} from "../../config/pipes/client.pipe";

@Component({
    selector: 'client-list',
    templateUrl: './client-list.component.html',
    styles: ['./client-list.component.sass']
})

export class ClientListComponent implements OnInit{
    private clients: Client[];
    private selectedClient: Client;
    private error: any;
    private name: string;


    constructor( private clientService: ClientService ){  }

    getClients(): void{
        this.clientService.getClientsList()
            .then(clients =>  {
                this.clients = clients;
                this.selectedClient = this.clients[0];
                this.clientService.setSelectedClient(this.clients[0]);
            })
            .catch(error => this.error = error);
    }

    ngOnInit() {
        this.getClients();
    }

    onSelect(client: Client): void {
        this.selectedClient = client;
        this.clientService.setSelectedClient(client);
    }
    onKey($event): void{
        this.selectedClient = this.clientService.getSelectedClient();
    }
}