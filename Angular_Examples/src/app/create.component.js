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
var CreateComponent = (function () {
    function CreateComponent(_employeeService) {
        this._employeeService = _employeeService;
    }
    CreateComponent.prototype.onClick = function (id, name, salary, dept) {
        var _this = this;
        console.log('created record');
        this._employeeService.createRow(id, name, salary, dept)
            .subscribe(function (resEmployeeData) { return _this.employees = (resEmployeeData); });
        console.log(this.employees);
        if (id == '') {
            this.status = 'Record not Created ';
        }
        else {
            this.status = 'Record Created Successfully';
        }
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: 'create-list',
            template: "\n\n<h2 align=\"center\"><font><strong>Create Record</strong></font>\n<table align=\"center\" cellpadding=\"5\" cellspacing=\"5\" border=\"1\">\n<tr bgcolor=\"#27dfe5\">\n<td><b>ID<input type=\"text\" #id></b></td>\n<td><b>NAME<input type=\"text\" #name></b></td>\n<td><b>SALARY<input type=\"text\" #salary></b></td>\n<td><b>DEPT<input type=\"text\" #dept></b></td>\n</tr><br>\n</table>\n<button (click)=\"onClick(id.value,name.value,salary.value,dept.value)\">create</button> \n {{status}}\n  \n",
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map