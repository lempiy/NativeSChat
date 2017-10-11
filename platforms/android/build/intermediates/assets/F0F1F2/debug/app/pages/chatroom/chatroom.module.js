"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var chatroom_routing_1 = require("./chatroom.routing");
var chatroom_component_1 = require("./chatroom.component");
var forms_1 = require("nativescript-angular/forms");
var ChatroomModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function ChatroomModule() {
    }
    return ChatroomModule;
}());
ChatroomModule = __decorate([
    core_1.NgModule({
        imports: [chatroom_routing_1.routing, forms_1.NativeScriptFormsModule, nativescript_module_1.NativeScriptModule],
        declarations: [chatroom_component_1.ChatroomComponent],
        providers: []
    })
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
], ChatroomModule);
exports.ChatroomModule = ChatroomModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHJvb20ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdHJvb20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLGdGQUE4RTtBQUM5RSx1REFBNkM7QUFDN0MsMkRBQXlEO0FBQ3pELG9EQUFxRTtBQVdyRSxJQUFhLGNBQWM7SUFIM0I7O01BRUU7SUFDRjtJQUE4QixDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBQS9CLElBQStCO0FBQWxCLGNBQWM7SUFSMUIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsMEJBQU8sRUFBRSwrQkFBdUIsRUFBRSx3Q0FBa0IsQ0FBQztRQUMvRCxZQUFZLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztRQUNqQyxTQUFTLEVBQUUsRUFBRTtLQUNoQixDQUFDO0lBQ0Y7O01BRUU7R0FDVyxjQUFjLENBQUk7QUFBbEIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgcm91dGluZyB9IGZyb20gXCIuL2NoYXRyb29tLnJvdXRpbmdcIjtcbmltcG9ydCB7IENoYXRyb29tQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhdHJvb20uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW3JvdXRpbmcsIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLCBOYXRpdmVTY3JpcHRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0NoYXRyb29tQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQ2hhdHJvb21Nb2R1bGUgeyB9XG4iXX0=