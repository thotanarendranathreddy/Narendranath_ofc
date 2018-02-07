import { EmployeeService } from './employee.service';
import { Component} from '@angular/core';

@Component({
  selector: 'getemp-list',
  template: `
  <!-- search operation --> 

<h3 align="center"><font><strong>Retrieve Particular Record from database</strong></font>
<input type="text" #temp>
<button (click)="onClick(temp.value)">Search record from Database</button></h3>{{status}}
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
</tr>  
  
`,
  })
export class GetEmpComponent{
    status: string;
  employees: any[];
  constructor(private _employeeService: EmployeeService) {}
  
  onClick(temp:string){
  console.log(temp);

    this._employeeService.getEmp(temp)
      .subscribe(resEmployeeData => this.employees = (resEmployeeData));
    console.log(this.employees);
    if(temp==''){

   this.status = 'Please Provide ID';
  }else{ this.status = ''; }
  
  }  
  }