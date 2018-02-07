import { EmployeeService } from './employee.service';
import { Component} from '@angular/core';

@Component({
  selector: 'delete-list',
  template: `
<!-- Delete operation --> 
<h3 align="center"><font><strong>Delete Record from database</strong></font>
<input type="text" #temp1>
<button (click)="onClick(temp1.value)">Delete</button></h3>{{status}}
`,


})
export class DeleteComponent{
  status: string;
  employees: any[];
  
  
  constructor(private _employeeService: EmployeeService) {}
  
  onClick(temp1:string){

    this._employeeService.delete(temp1)
      .subscribe(resEmployeeData => this.employees = (resEmployeeData));
    console.log(this.employees);
     
  if(temp1==''){

   this.status = 'Record not Deleted ';
  }else{ this.status = 'Record Deleted Successfully'; }
  }  
  }