"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require("application-settings");
var LoginData = (function () {
    function LoginData() {
    }
    return LoginData;
}());
var AuthService = (function () {
    function AuthService() {
        this.loginData = {
            login: "",
            password: "",
        };
    }
    AuthService.prototype.getToken = function () {
        return appSettings.getString("login", "No string value");
    };
    AuthService.prototype.authorize = function () {
        var json = JSON.stringify(this.loginData);
        appSettings.setString("login", json);
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBS3BEO0lBQUE7SUFHQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUdELElBQWEsV0FBVztJQUVwQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDYixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxFQUFFO1NBQ2YsQ0FBQTtJQUNMLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDSSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUMzQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTs7R0FDQSxXQUFXLENBaUJ2QjtBQWpCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcbmNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XG5kZWNsYXJlIHZhciBqYXZhOiBhbnk7XG5cbmNsYXNzIExvZ2luRGF0YSB7XG4gICAgbG9naW46IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgIGxvZ2luRGF0YTogTG9naW5EYXRhO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxvZ2luRGF0YSA9IHtcbiAgICAgICAgICAgIGxvZ2luOiBcIlwiLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIGFwcFNldHRpbmdzLmdldFN0cmluZyhcImxvZ2luXCIsIFwiTm8gc3RyaW5nIHZhbHVlXCIpO1xuICAgIH1cbiAgICBcbiAgICBhdXRob3JpemUoKSB7XG4gICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh0aGlzLmxvZ2luRGF0YSlcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwibG9naW5cIiwganNvbik7XG4gICAgfVxufVxuIl19