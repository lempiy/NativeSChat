"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_sidedrawer_1 = require("nativescript-sidedrawer");
var item_service_1 = require("./item.service");
var ItemsComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.itemService.getItems();
        nativescript_sidedrawer_1.TnsSideDrawer.build({
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
            listener: function (index) {
                _this.i = index;
            },
            context: this,
        });
        //TnsSideDrawer.toggle()
    };
    return ItemsComponent;
}());
ItemsComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./items.component.html",
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELG1FQUF3RDtBQUd4RCwrQ0FBNkM7QUFPN0MsSUFBYSxjQUFjO0lBSXZCLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCxpQ0FBUSxHQUFSO1FBQUEsaUJBMkJDO1FBMUJHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6Qyx1Q0FBYSxDQUFDLEtBQUssQ0FBQztZQUNoQixTQUFTLEVBQUUsQ0FBQztvQkFDUixLQUFLLEVBQUUsTUFBTTtpQkFFaEIsRUFBRTtvQkFDQyxLQUFLLEVBQUUsY0FBYztpQkFFeEIsRUFBRTtvQkFDQyxLQUFLLEVBQUUsV0FBVztpQkFFckIsRUFBRTtvQkFDQyxLQUFLLEVBQUUsV0FBVztpQkFFckIsRUFBRTtvQkFDQyxLQUFLLEVBQUUsWUFBWTtpQkFFdEIsQ0FBQztZQUNGLEtBQUssRUFBRSxlQUFlO1lBQ3RCLFFBQVEsRUFBRSxzQ0FBc0M7WUFDaEQsUUFBUSxFQUFFLFVBQUMsS0FBSztnQkFDWixLQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQTtZQUNsQixDQUFDO1lBQ0QsT0FBTyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFBO1FBQ0Ysd0JBQXdCO0lBQzVCLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFwQ0QsSUFvQ0M7QUFwQ1ksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7S0FDeEMsQ0FBQztxQ0FPbUMsMEJBQVc7R0FObkMsY0FBYyxDQW9DMUI7QUFwQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUbnNTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXNpZGVkcmF3ZXInO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBJdGVtW107XG4gICAgaTphbnk7XG5cbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSkgeyB9XG4gICAgXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgICAgIFRuc1NpZGVEcmF3ZXIuYnVpbGQoe1xuICAgICAgICAgICAgdGVtcGxhdGVzOiBbe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnSG9tZScsXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdKdWRnbWVudCBEYXknLFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnQmFuayBSb2xsJyxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0ZpeCBTdHVmZicsXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUaGlzIElzIE1lJyxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgdGl0bGU6ICdUaGlzIEFwcCBOYW1lJyxcbiAgICAgICAgICAgIHN1YnRpdGxlOiAnaXMganVzdCBhcyBhd2Vzb21lIGFzIHRoaXMgc3VidGl0bGUhJyxcbiAgICAgICAgICAgIGxpc3RlbmVyOiAoaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmkgPSBpbmRleFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMsXG4gICAgICAgIH0pXG4gICAgICAgIC8vVG5zU2lkZURyYXdlci50b2dnbGUoKVxuICAgIH1cbn0iXX0=