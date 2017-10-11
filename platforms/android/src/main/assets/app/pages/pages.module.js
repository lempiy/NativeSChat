"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pages_routing_1 = require("./pages.routing");
var pages_component_1 = require("./pages.component");
var pages_service_1 = require("./pages.service");
var forms_1 = require("nativescript-angular/forms");
var PagesModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    core_1.NgModule({
        imports: [pages_routing_1.routing, forms_1.NativeScriptFormsModule],
        declarations: [pages_component_1.PagesComponent],
        providers: [
            pages_service_1.PagesService
        ]
    })
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
], PagesModule);
exports.PagesModule = PagesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLGlEQUEwQztBQUMxQyxxREFBbUQ7QUFDbkQsaURBQStDO0FBQy9DLG9EQUFxRTtBQWFyRSxJQUFhLFdBQVc7SUFIeEI7O01BRUU7SUFDRjtJQUEyQixDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBQTVCLElBQTRCO0FBQWYsV0FBVztJQVZ2QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyx1QkFBTyxFQUFFLCtCQUF1QixDQUFDO1FBQzNDLFlBQVksRUFBRSxDQUFDLGdDQUFjLENBQUM7UUFDOUIsU0FBUyxFQUFFO1lBQ1AsNEJBQVk7U0FDZjtLQUNKLENBQUM7SUFDRjs7TUFFRTtHQUNXLFdBQVcsQ0FBSTtBQUFmLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IHJvdXRpbmcgfSBmcm9tIFwiLi9wYWdlcy5yb3V0aW5nXCI7XG5pbXBvcnQgeyBQYWdlc0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGFnZXNTZXJ2aWNlIH0gZnJvbSBcIi4vcGFnZXMuc2VydmljZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtyb3V0aW5nLCBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbUGFnZXNDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBQYWdlc1NlcnZpY2VcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgUGFnZXNNb2R1bGUgeyB9XG4iXX0=