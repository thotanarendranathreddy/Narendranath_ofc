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
var DeleteComponent = (function () {
    function DeleteComponent(_employeeService) {
        this._employeeService = _employeeService;
    }
    DeleteComponent.prototype.onClick = function (temp1) {
        var _this = this;
        this._employeeService.delete(temp1)
            .subscribe(function (resEmployeeData) { return _this.employees = (resEmployeeData); });
        console.log(this.employees);
        if (temp1 == '') {
            this.status = 'Record not Deleted ';
        }
        else {
            this.status = 'Record Deleted Successfully';
        }
    };
    DeleteComponent = __decorate([
        core_1.Component({
            selector: 'delete-list',
            template: "\n<!-- Delete operation --> \n<h3 align=\"center\"><font><strong>Delete Record from database</strong></font>\n<input type=\"text\" #temp1>\n<button (click)=\"onClick(temp1.value)\">Delete</button></h3>{{status}}\n",
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService])
    ], DeleteComponent);
    return DeleteComponent;
}());
exports.DeleteComponent = DeleteComponent;
//# sourceMappingURL=delete.component.js.map