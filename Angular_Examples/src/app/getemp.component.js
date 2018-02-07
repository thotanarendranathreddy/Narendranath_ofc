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
var GetEmpComponent = (function () {
    function GetEmpComponent(_employeeService) {
        this._employeeService = _employeeService;
    }
    GetEmpComponent.prototype.onClick = function (temp) {
        var _this = this;
        console.log(temp);
        this._employeeService.getEmp(temp)
            .subscribe(function (resEmployeeData) { return _this.employees = (resEmployeeData); });
        console.log(this.employees);
        if (temp == '') {
            this.status = 'Please Provide ID';
        }
        else {
            this.status = '';
        }
    };
    GetEmpComponent = __decorate([
        core_1.Component({
            selector: 'getemp-list',
            template: "\n  <!-- search operation --> \n\n<h3 align=\"center\"><font><strong>Retrieve Particular Record from database</strong></font>\n<input type=\"text\" #temp>\n<button (click)=\"onClick(temp.value)\">Search record from Database</button></h3>{{status}}\n<table align=\"center\" cellpadding=\"5\" cellspacing=\"5\" border=\"1\">\n<ul *ngFor=\"let emp of employees\"> \n<tr>\n</tr>\n<tr bgcolor=\"#CD5C5C\">\n<td><b>Id</b></td>\n<td><b>Name</b></td>\n<td><b>Salary</b></td>\n<td><b>Department</b></td>\n</tr>\n<tr bgcolor=\"#DEB887\">\n<td>{{emp.id}}</td>\n<td>{{emp.name}}</td>\n<td>{{emp.salary}}</td>\n<td>{{emp.dept}}</td>\n</tr>  \n  \n",
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService])
    ], GetEmpComponent);
    return GetEmpComponent;
}());
exports.GetEmpComponent = GetEmpComponent;
//# sourceMappingURL=getemp.component.js.map