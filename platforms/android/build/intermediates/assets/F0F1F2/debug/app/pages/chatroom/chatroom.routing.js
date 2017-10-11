"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chatroom_component_1 = require("./chatroom.component");
var router_1 = require("nativescript-angular/router");
// noinspection TypeScriptValidateTypes
// export function loadChildren(path) { return System.import(path); };
exports.routes = [
    {
        path: '',
        redirectTo: 'chatroom',
        pathMatch: 'full'
    },
    {
        path: 'chatroom',
        component: chatroom_component_1.ChatroomComponent,
    },
];
exports.routing = router_1.NativeScriptRouterModule.forChild(exports.routes);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHJvb20ucm91dGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXRyb29tLnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyREFBeUQ7QUFFekQsc0RBQXVFO0FBRXZFLHVDQUF1QztBQUV2QyxzRUFBc0U7QUFFekQsUUFBQSxNQUFNLEdBQVc7SUFDNUI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLFNBQVMsRUFBRSxNQUFNO0tBQ2xCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsVUFBVTtRQUNoQixTQUFTLEVBQUUsc0NBQWlCO0tBQzdCO0NBQ0YsQ0FBQztBQUVXLFFBQUEsT0FBTyxHQUF3QixpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsY0FBTSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDaGF0cm9vbUNvbXBvbmVudCB9IGZyb20gJy4vY2hhdHJvb20uY29tcG9uZW50JztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuLy8gbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRWYWxpZGF0ZVR5cGVzXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBsb2FkQ2hpbGRyZW4ocGF0aCkgeyByZXR1cm4gU3lzdGVtLmltcG9ydChwYXRoKTsgfTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgcmVkaXJlY3RUbzogJ2NoYXRyb29tJyxcbiAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xuICB9LFxuICB7XG4gICAgcGF0aDogJ2NoYXRyb29tJyxcbiAgICBjb21wb25lbnQ6IENoYXRyb29tQ29tcG9uZW50LFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHJvdXRpbmc6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcbiJdfQ==