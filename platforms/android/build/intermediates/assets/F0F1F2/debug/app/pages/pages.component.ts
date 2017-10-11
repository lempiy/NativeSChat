import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Page } from 'ui/page';
import { PagesService } from "./pages.service";

@Component({
    selector: "ns-pages",
    moduleId: module.id,
    templateUrl: "./pages.component.html",
})
export class PagesComponent implements OnInit {

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(page: Page, router: Router, pages: PagesService) {
    }

    ngOnInit(): void {
    }
}