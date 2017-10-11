"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_routing_1 = require("./auth.routing");
var auth_component_1 = require("./auth.component");
var auth_service_1 = require("./auth.service");
var forms_1 = require("nativescript-angular/forms");
var AuthModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    core_1.NgModule({
        imports: [auth_routing_1.routing, forms_1.NativeScriptFormsModule],
        declarations: [auth_component_1.AuthComponent],
        providers: [
            auth_service_1.AuthService
        ]
    })
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QywrQ0FBeUM7QUFDekMsbURBQWlEO0FBQ2pELCtDQUE2QztBQUM3QyxvREFBcUU7QUFhckUsSUFBYSxVQUFVO0lBSHZCOztNQUVFO0lBQ0Y7SUFBMEIsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUEzQixJQUEyQjtBQUFkLFVBQVU7SUFWdEIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsc0JBQU8sRUFBRSwrQkFBdUIsQ0FBQztRQUMzQyxZQUFZLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1FBQzdCLFNBQVMsRUFBRTtZQUNQLDBCQUFXO1NBQ2Q7S0FDSixDQUFDO0lBQ0Y7O01BRUU7R0FDVyxVQUFVLENBQUk7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyByb3V0aW5nIH0gZnJvbSBcIi4vYXV0aC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSBcIi4vYXV0aC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW3JvdXRpbmcsIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtBdXRoQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQXV0aFNlcnZpY2VcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXV0aE1vZHVsZSB7IH1cbiJdfQ==