"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var platform_1 = require("platform");
var chatroom_service_1 = require("../../shared/chatroom.service");
var colorModule = require("tns-core-modules/color");
var enums_1 = require("ui/enums");
var nativescript_sidedrawer_1 = require("nativescript-sidedrawer");
var ChatroomComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ChatroomComponent(page, router, chatroom, ngZone) {
        this.page = page;
        this.chatroom = chatroom;
        this.sendIcon = String.fromCharCode(0xf1d8);
        this.zone = ngZone;
    }
    ChatroomComponent.prototype.onItemTap = function ($event, item) {
        console.dir(item);
    };
    ChatroomComponent.prototype.showText = function () {
        var _this = this;
        var send = this.send.nativeElement;
        var textfield = this.textfield.nativeElement;
        var list = this.list.nativeElement;
        send.animate({
            backgroundColor: new colorModule.Color("#2cc151"),
            duration: 60,
            curve: enums_1.AnimationCurve.easeIn,
        })
            .then(function () {
            return send.animate({
                backgroundColor: new colorModule.Color("#6cc192"),
                duration: 60,
                curve: enums_1.AnimationCurve.easeIn,
            });
        });
        this.chatroom.messages.push(new chatroom_service_1.Message("Anton", this.newMessage));
        this.newMessage = "";
        textfield.android.clearFocus();
        textfield.android.setFocusable(false);
        textfield.android.setFocusableInTouchMode(true);
        textfield.dismissSoftInput();
        setTimeout(function () {
            list.scrollToIndex(_this.chatroom.messages.length - 1);
        });
    };
    ChatroomComponent.prototype.onTap = function (args) {
        var button = args.object;
        this.showText();
    };
    ChatroomComponent.prototype.onMenu = function () {
        nativescript_sidedrawer_1.TnsSideDrawer.toggle();
    };
    ChatroomComponent.prototype.submit = function (args) {
        var textview = args.object;
        alert("WOW");
        if (platform_1.isAndroid) {
            textview.android.clearFocus();
        }
    };
    ChatroomComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        nativescript_sidedrawer_1.TnsSideDrawer.close();
    };
    ChatroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.chatroom.connect('Anton', ['global'])
            .switchMap(function () { return _this.chatroom.getMessages('global'); })
            .switchMap(function (messages) {
            //ABC
            _this.zone.run(function () {
                _this.chatroom.messages = _this.chatroom.messages.concat(messages.map(function (message) { return new chatroom_service_1.Message(message.user.username, message.content); }));
            });
            return _this.chatroom.on('message', 'global');
        })
            .subscribe(function (message) {
            _this.zone.run(function () {
                _this.chatroom.messages.push(new chatroom_service_1.Message(message.user.username, message.content));
            });
        });
        nativescript_sidedrawer_1.TnsSideDrawer.build({
            templates: [{
                    title: 'General',
                }, {
                    title: 'Profile',
                }],
            backgroundColor: new colorModule.Color("#56b781"),
            headerBackgroundColor: new colorModule.Color("#31915b"),
            title: 'Go Chat',
            subtitle: 'Just for nice conversations.',
            listener: function (index) {
                console.log(index);
            },
            context: this,
        });
    };
    ChatroomComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sendButton = this.page.getViewById("send-button");
        var list = this.list.nativeElement;
        setTimeout(function () {
            list.scrollToIndex(_this.chatroom.messages.length - 1);
        });
    };
    return ChatroomComponent;
}());
__decorate([
    core_1.ViewChild("send"),
    __metadata("design:type", core_1.ElementRef)
], ChatroomComponent.prototype, "send", void 0);
__decorate([
    core_1.ViewChild("textfield"),
    __metadata("design:type", core_1.ElementRef)
], ChatroomComponent.prototype, "textfield", void 0);
__decorate([
    core_1.ViewChild("list"),
    __metadata("design:type", core_1.ElementRef)
], ChatroomComponent.prototype, "list", void 0);
ChatroomComponent = __decorate([
    core_1.Component({
        selector: "ns-chatroom",
        moduleId: module.id,
        templateUrl: "./chatroom.component.html"
    }),
    __metadata("design:paramtypes", [page_1.Page,
        router_1.Router,
        chatroom_service_1.ChatroomService,
        core_1.NgZone])
], ChatroomComponent);
exports.ChatroomComponent = ChatroomComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHJvb20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdHJvb20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBU3VCO0FBQ3ZCLDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFHL0IscUNBQXFDO0FBQ3JDLGtFQUF5RTtBQUd6RSxvREFBc0Q7QUFDdEQsa0NBQTBDO0FBRTFDLG1FQUF3RDtBQVV4RCxJQUFhLGlCQUFpQjtJQVkxQiw2SUFBNkk7SUFDN0ksaUhBQWlIO0lBQ2pILDJCQUNJLElBQVUsRUFDVixNQUFjLEVBQ2QsUUFBeUIsRUFDekIsTUFBYztRQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLE1BQU0sRUFBRSxJQUFJO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDckIsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFBQSxpQkE2QkM7UUE1QkcsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDekMsSUFBSSxTQUFTLEdBQWEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDdkQsSUFBSSxJQUFJLEdBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULGVBQWUsRUFBRSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ2pELFFBQVEsRUFBRSxFQUFFO1lBQ1osS0FBSyxFQUFFLHNCQUFjLENBQUMsTUFBTTtTQUUvQixD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O29EQUFDO0FBQzNCO0lBQWxCLGdCQUFTLENBQUMsTUFBTSxDQUFDOzhCQUFPLGlCQUFVOytDQUFDO0FBVjNCLGlCQUFpQjtJQUw3QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwyQkFBMkI7S0FDM0MsQ0FBQztxQ0FnQlksV0FBSTtRQUNGLGVBQU07UUFDSixrQ0FBZTtRQUNqQixhQUFNO0dBbEJULGlCQUFpQixDQTRIN0I7QUE1SFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXG4gICAgQ29tcG9uZW50LCBcbiAgICBPbkluaXQsIFxuICAgIElucHV0LCBcbiAgICBWaWV3Q2hpbGQsIFxuICAgIEVsZW1lbnRSZWYsIFxuICAgIEFmdGVyVmlld0luaXQsIFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIE5nWm9uZVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcInVpL3RleHQtdmlld1wiO1xuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tIFwidWkvbGlzdC12aWV3XCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IENoYXRyb29tU2VydmljZSwgTWVzc2FnZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY2hhdHJvb20uc2VydmljZVwiO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInVpL2J1dHRvblwiO1xuaW1wb3J0ICogYXMgY29sb3JNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIjtcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgVG5zU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1zaWRlZHJhd2VyJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJ1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWNoYXRyb29tXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NoYXRyb29tLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQ2hhdHJvb21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIGNoYXRyb29tOiBDaGF0cm9vbVNlcnZpY2VcbiAgICBuZXdNZXNzYWdlOiBzdHJpbmdcbiAgICBzZW5kSWNvbjogc3RyaW5nXG4gICAgcGFnZTogUGFnZVxuICAgIHNlbmRCdXR0b246IGFueVxuICAgIHpvbmU6IE5nWm9uZVxuICAgIHN1YjogU3Vic2NyaXB0aW9uXG4gICAgQFZpZXdDaGlsZChcInNlbmRcIikgc2VuZDogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwidGV4dGZpZWxkXCIpIHRleHRmaWVsZDogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwibGlzdFwiKSBsaXN0OiBFbGVtZW50UmVmO1xuXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHBhZ2U6IFBhZ2UsIFxuICAgICAgICByb3V0ZXI6IFJvdXRlciwgXG4gICAgICAgIGNoYXRyb29tOiBDaGF0cm9vbVNlcnZpY2UsXG4gICAgICAgIG5nWm9uZTogTmdab25lKSB7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2VcbiAgICAgICAgdGhpcy5jaGF0cm9vbSA9IGNoYXRyb29tXG4gICAgICAgIHRoaXMuc2VuZEljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjFkOClcbiAgICAgICAgdGhpcy56b25lID0gbmdab25lO1xuICAgIH1cblxuICAgIG9uSXRlbVRhcCgkZXZlbnQsIGl0ZW0pIHtcbiAgICAgICAgY29uc29sZS5kaXIoaXRlbSlcbiAgICB9XG5cbiAgICBzaG93VGV4dCgpIHtcbiAgICAgICAgbGV0IHNlbmQgPSA8Vmlldz50aGlzLnNlbmQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgbGV0IHRleHRmaWVsZCA9IDxUZXh0Vmlldz50aGlzLnRleHRmaWVsZC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBsZXQgbGlzdCA9IDxMaXN0Vmlldz50aGlzLmxpc3QubmF0aXZlRWxlbWVudDtcbiAgICAgICAgc2VuZC5hbmltYXRlKHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IGNvbG9yTW9kdWxlLkNvbG9yKFwiIzJjYzE1MVwiKSwgICAgXG4gICAgICAgICAgICBkdXJhdGlvbjogNjAsXG4gICAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluLFxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzZW5kLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IGNvbG9yTW9kdWxlLkNvbG9yKFwiIzZjYzE5MlwiKSwgICAgXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDYwLFxuICAgICAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW4sXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmNoYXRyb29tLm1lc3NhZ2VzLnB1c2gobmV3IE1lc3NhZ2UoXCJBbnRvblwiLCB0aGlzLm5ld01lc3NhZ2UpKVxuICAgICAgICB0aGlzLm5ld01lc3NhZ2UgPSBcIlwiXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGV4dGZpZWxkLmFuZHJvaWQuY2xlYXJGb2N1cygpO1xuICAgICAgICB0ZXh0ZmllbGQuYW5kcm9pZC5zZXRGb2N1c2FibGUoZmFsc2UpO1xuICAgICAgICB0ZXh0ZmllbGQuYW5kcm9pZC5zZXRGb2N1c2FibGVJblRvdWNoTW9kZSh0cnVlKTtcbiAgICAgICAgdGV4dGZpZWxkLmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgIGxpc3Quc2Nyb2xsVG9JbmRleCh0aGlzLmNoYXRyb29tLm1lc3NhZ2VzLmxlbmd0aCAtIDEpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9uVGFwKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgICBsZXQgYnV0dG9uID0gPEJ1dHRvbj5hcmdzLm9iamVjdDtcbiAgICAgICAgdGhpcy5zaG93VGV4dCgpO1xuICAgIH1cblxuICAgIG9uTWVudSgpIHtcbiAgICAgICAgVG5zU2lkZURyYXdlci50b2dnbGUoKVxuICAgIH1cblxuICAgIHN1Ym1pdChhcmdzKSB7XG4gICAgICAgIGxldCB0ZXh0dmlldzogVGV4dFZpZXcgPSA8VGV4dFZpZXc+YXJncy5vYmplY3Q7XG4gICAgICAgIGFsZXJ0KFwiV09XXCIpXG4gICAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgICAgIHRleHR2aWV3LmFuZHJvaWQuY2xlYXJGb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKVxuICAgICAgICBUbnNTaWRlRHJhd2VyLmNsb3NlKClcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLmNoYXRyb29tLmNvbm5lY3QoJ0FudG9uJywgWydnbG9iYWwnXSlcbiAgICAgICAgICAgIC5zd2l0Y2hNYXAoKCkgPT4gdGhpcy5jaGF0cm9vbS5nZXRNZXNzYWdlcygnZ2xvYmFsJykpXG4gICAgICAgICAgICAuc3dpdGNoTWFwKChtZXNzYWdlczogYW55W10pID0+IHtcbiAgICAgICAgICAgICAgICAvL0FCQ1xuICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXRyb29tLm1lc3NhZ2VzID0gdGhpcy5jaGF0cm9vbS5tZXNzYWdlcy5jb25jYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5tYXAobWVzc2FnZSA9PiBuZXcgTWVzc2FnZShtZXNzYWdlLnVzZXIudXNlcm5hbWUsIG1lc3NhZ2UuY29udGVudCkpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYXRyb29tLm9uKCdtZXNzYWdlJywgJ2dsb2JhbCcpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN1YnNjcmliZSgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXRyb29tLm1lc3NhZ2VzLnB1c2gobmV3IE1lc3NhZ2UobWVzc2FnZS51c2VyLnVzZXJuYW1lLCBtZXNzYWdlLmNvbnRlbnQpKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgVG5zU2lkZURyYXdlci5idWlsZCh7XG4gICAgICAgICAgICB0ZW1wbGF0ZXM6IFt7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdHZW5lcmFsJyxcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Byb2ZpbGUnLFxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBjb2xvck1vZHVsZS5Db2xvcihcIiM1NmI3ODFcIiksXG4gICAgICAgICAgICBoZWFkZXJCYWNrZ3JvdW5kQ29sb3I6IG5ldyBjb2xvck1vZHVsZS5Db2xvcihcIiMzMTkxNWJcIiksXG4gICAgICAgICAgICB0aXRsZTogJ0dvIENoYXQnLFxuICAgICAgICAgICAgc3VidGl0bGU6ICdKdXN0IGZvciBuaWNlIGNvbnZlcnNhdGlvbnMuJyxcbiAgICAgICAgICAgIGxpc3RlbmVyOiAoaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250ZXh0OiB0aGlzLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLnNlbmRCdXR0b24gPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJzZW5kLWJ1dHRvblwiKVxuICAgICAgICBsZXQgbGlzdCA9IDxMaXN0Vmlldz50aGlzLmxpc3QubmF0aXZlRWxlbWVudDtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgIGxpc3Quc2Nyb2xsVG9JbmRleCh0aGlzLmNoYXRyb29tLm1lc3NhZ2VzLmxlbmd0aCAtIDEpO1xuICAgICAgICB9KVxuICAgIH1cbn0iXX0=