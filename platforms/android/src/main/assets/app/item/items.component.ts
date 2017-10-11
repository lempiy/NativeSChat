import { Component, OnInit } from "@angular/core";
import { TnsSideDrawer } from 'nativescript-sidedrawer';

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    i:any;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }
    
    ngOnInit(): void {
        this.items = this.itemService.getItems();
        TnsSideDrawer.build({
            templates: [{
                title: 'Home',
                
            }, {
                title: 'Judgment Day',
                
            }, {
                title: 'Bank Roll',
                
            }, {
                title: 'Fix Stuff',
                
            }, {
                title: 'This Is Me',
                
            }],
            title: 'This App Name',
            subtitle: 'is just as awesome as this subtitle!',
            listener: (index) => {
                this.i = index
            },
            context: this,
        })
        //TnsSideDrawer.toggle()
    }
}