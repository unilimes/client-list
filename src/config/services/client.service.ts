import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Client} from "../../class/client";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClientService {

    public selectedClient: any;
    private clientsUrl = './data/clients-data.json';

    constructor( private http: Http ){}

    getClientsList(): Promise<Client[]> {
        return this.http.get( this.clientsUrl ).toPromise()
            .then(response => response.json() as Client[])
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    setSelectedClient(client){
        this.selectedClient = client;
    }

    getSelectedClient(){
        return this.selectedClient;
    }

}