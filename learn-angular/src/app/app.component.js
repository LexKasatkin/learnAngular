"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var users_service_1 = require("./users.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(usersService) {
        this.usersService = usersService;
        this.title = 'Портфолио Касаткин А.С.';
        this.users = [];
        this.users = this.usersService.users;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.usersService.getUsers().subscribe(function (users) {
            console.log(users);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [users_service_1.UsersService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
