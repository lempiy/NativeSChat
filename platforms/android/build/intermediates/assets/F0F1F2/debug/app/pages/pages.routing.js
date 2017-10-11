"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pages_component_1 = require("./pages.component");
var router_1 = require("nativescript-angular/router");
// noinspection TypeScriptValidateTypes
exports.routes = [
    {
        path: 'pages',
        component: pages_component_1.PagesComponent,
        children: [
            { path: '', redirectTo: 'chatroom', pathMatch: 'full' },
            { path: 'chatroom', loadChildren: '/pages/chatroom/chatroom.module#ChatroomModule' },
        ]
    },
];
exports.routing = router_1.NativeScriptRouterModule.forChild(exports.routes);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMucm91dGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2VzLnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxREFBbUQ7QUFFbkQsc0RBQXVFO0FBRXZFLHVDQUF1QztBQUcxQixRQUFBLE1BQU0sR0FBVztJQUM1QjtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsU0FBUyxFQUFFLGdDQUFjO1FBQ3pCLFFBQVEsRUFBRTtZQUNSLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7WUFDdkQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxnREFBZ0QsRUFBRTtTQUNyRjtLQUNGO0NBQ0YsQ0FBQztBQUVXLFFBQUEsT0FBTyxHQUF3QixpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsY0FBTSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlc0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuLy8gbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRWYWxpZGF0ZVR5cGVzXG5cblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJ3BhZ2VzJyxcbiAgICBjb21wb25lbnQ6IFBhZ2VzQ29tcG9uZW50LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnY2hhdHJvb20nLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICAgICAgeyBwYXRoOiAnY2hhdHJvb20nLCBsb2FkQ2hpbGRyZW46ICcvcGFnZXMvY2hhdHJvb20vY2hhdHJvb20ubW9kdWxlI0NoYXRyb29tTW9kdWxlJyB9LFxuICAgIF1cbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCByb3V0aW5nOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XG4iXX0=