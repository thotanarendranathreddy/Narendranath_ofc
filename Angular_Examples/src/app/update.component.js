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
var UpdateComponent = (function () {
    function UpdateComponent(_employeeService) {
        this._employeeService = _employeeService;
    }
    UpdateComponent.prototype.onClick = function (id1, name1, salary1, dept1) {
        var _this = this;
        console.log('created record');
        this._employeeService.update(id1, name1, salary1, dept1)
            .subscribe(function (resEmployeeData) { return _this.employees = (resEmployeeData); });
        console.log(this.employees);
        if (id1 == '') {
            this.status = 'Record not Updated ';
        }
        else {
            this.status = 'Record Updated Successfully';
        }
    };
    UpdateComponent = __decorate([
        core_1.Component({
            selector: 'update-list',
            template: "\n<!-- update operation --> \n  \n <h3 align=\"center\"><font><strong>Update Record by ID</strong></font>\n<table align=\"center\" cellpadding=\"5\" cellspacing=\"5\" border=\"1\">\n<tr bgcolor=\"#27dfe5\">\n<td><b>ID<input type=\"text\" #id1></b></td>\n<td><b>NAME<input type=\"text\" #name1></b></td>\n<td><b>SALARY<input type=\"text\" #salary1></b></td>\n<td><b>DEPT<input type=\"text\" #dept1></b></td>\n</tr><br>\n</table>\n<button (click)=\"onClick(id1.value,name1.value,salary1.value,dept1.value)\">Update</button> \n {{status}}\n  ",
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService])
    ], UpdateComponent);
    return UpdateComponent;
}());
exports.UpdateComponent = UpdateComponent;
//# sourceMappingURL=update.component.js.map