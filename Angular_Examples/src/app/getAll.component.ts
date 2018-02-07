
import { EmployeeService } from './employee.service';
import { Component} from '@angular/core';

@Component({
  selector: 'getall-list',
  template: `
<h2 align="center"><font><strong>Retrieve all details from database</strong></font>
<button (click)="onClick()">Get All Details</button></h2>
<table align="center" cellpadding="5" cellspacing="5" border="1">
<ul *ngFor="let emp of employees"> 
<tr>

</tr>
<tr bgcolor="#CD5C5C">
<td><b>Id</b></td>
<td><b>Name</b></td>
<td><b>Salary</b></td>
<td><b>Department</b></td>
</tr>
<tr bgcolor="#DEB887">
<td>{{emp.id}}</td>
<td>{{emp.name}}</td>
<td>{{emp.salary}}</td>
<td>{{emp.dept}}</td>
</tr>`,
})
export class GetAllComponent{

  employees: any[];
  constructor(private _employeeService: EmployeeService) {}


  onClick(){
    console.log('Employee list');
    this._employeeService.getEmployees()
      .subscribe(resEmployeeData => this.employees = (resEmployeeData));
    console.log(this.employees);
  }
  
  
  }