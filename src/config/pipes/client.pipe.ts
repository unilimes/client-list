import {Pipe, Injectable, PipeTransform} from "@angular/core";
import {ClientService} from "../services/client.service";

@Pipe({
    name: 'inputfilter',
    pure: false
})

@Injectable()
export class ClientPipe implements PipeTransform {
    private filteredList: any;

    constructor( private clientService: ClientService ){  }

    transform(items: any[], args: any): any {
        if(!args)
            return items;

        if(items){
           this.filteredList = items.filter(item => {
                return ((item.general.firstName.toUpperCase().indexOf(args.toUpperCase(), 0) > -1) || (item.general.lastName.toUpperCase().indexOf(args.toUpperCase(), 0) > -1));
            });

            this.clientService.setSelectedClient(this.filteredList[0]);
            return this.filteredList;
        }
    }
    
}