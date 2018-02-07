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
var employee_service_1 = require('./employee.service');
var core_1 = require('@angular/core');
var GetAllComponent = (function () {
    function GetAllComponent(_employeeService) {
        this._employeeService = _employeeService;
    }
    GetAllComponent.prototype.onClick = function () {
        var _this = this;
        console.log('Employee list');
        this._employeeService.getEmployees()
            .subscribe(function (resEmployeeData) { return _this.employees = (resEmployeeData); });
        console.log(this.employees);
    };
    GetAllComponent = __decorate([
        core_1.Component({
            selector: 'getall-list',
            template: "\n<h2 align=\"center\"><font><strong>Retrieve all details from database</strong></font>\n<button (click)=\"onClick()\">Get All Details</button></h2>\n<table align=\"center\" cellpadding=\"5\" cellspacing=\"5\" border=\"1\">\n<ul *ngFor=\"let emp of employees\"> \n<tr>\n\n</tr>\n<tr bgcolor=\"#CD5C5C\">\n<td><b>Id</b></td>\n<td><b>Name</b></td>\n<td><b>Salary</b></td>\n<td><b>Department</b></td>\n</tr>\n<tr bgcolor=\"#DEB887\">\n<td>{{emp.id}}</td>\n<td>{{emp.name}}</td>\n<td>{{emp.salary}}</td>\n<td>{{emp.dept}}</td>\n</tr>",
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService])
    ], GetAllComponent);
    return GetAllComponent;
}());
exports.GetAllComponent = GetAllComponent;
//# sourceMappingURL=getAll.component.js.map