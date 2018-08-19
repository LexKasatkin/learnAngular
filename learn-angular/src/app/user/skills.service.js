"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var SkillsService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.users = [
            { name: "Aleksey Kasatkin" },
            { name: "Ivan Fyodorov" },
            { name: "Igor Filimonov" },
            { name: "Igor Filimonov" }
        ];
    }
    UsersService.prototype.getUsers = function () {
        return this.http.get('http://jsonplaceholder.typicode.com/posts')
            .pipe(operators_1.map(function (response) {
            return response.json();
        }));
    };
    UsersService = __decorate([
        core_1.Injectable()
    ], UsersService);
    return UsersService;
}());
exports.UsersService = SkillsService;
