"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var employee_service_1 = require('./employee.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\n\n<table align=\"center\" cellpadding=\"5\" cellspacing=\"5\" border=\"1\">\n\n<tr bgcolor=\"#F5B950\">\n<nav>\n<td><b> <a href=\"http://localhost:3008/login\">logout</a></b></td>\n<td><b><a routerLink=\"/create\" routerLinkActive=\"active\">CREATE Record</a></b></td>\n<td><b><a routerLink=\"/update\" routerLinkActive=\"active\">UPDATE Record</a></b></td>\n<td><b><a routerLink=\"/delete\" routerLinkActive=\"active\">DELETE Record</a></b></td>\n<td><b><a routerLink=\"/getEmp\" routerLinkActive=\"active\">Search Employee</a></b></td>\n<td><b><a routerLink=\"/getAll\" routerLinkActive=\"active\">List of All Employees</a></b></td>\n</nav>\n</tr><br></table>\n\n  \n<router-outlet></router-outlet>",
            providers: [employee_service_1.EmployeeService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map