import { EmployeeService } from './employee.service';
import { Component} from '@angular/core';

@Component({
  selector: 'create-list',
  template: `

<h2 align="center"><font><strong>Create Record</strong></font>
<table align="center" cellpadding="5" cellspacing="5" border="1">
<tr bgcolor="#27dfe5">
<td><b>ID<input type="text" #id></b></td>
<td><b>NAME<input type="text" #name></b></td>
<td><b>SALARY<input type="text" #salary></b></td>
<td><b>DEPT<input type="text" #dept></b></td>
</tr><br>
</table>
<button (click)="onClick(id.value,name.value,salary.value,dept.value)">create</button> 
 {{status}}
  
`,


})
export class CreateComponent{
    status: string;
    employees: any[];
  
  
  constructor(private _employeeService: EmployeeService) {}

  
  
onClick(id:string,name:string,salary:string,dept:string){
    console.log('created record');
    this._employeeService.createRow(id,name,salary,dept)
      .subscribe(resEmployeeData => this.employees = (resEmployeeData));
    console.log(this.employees);
  if(id==''){

   this.status = 'Record not Created ';
  }else{ this.status = 'Record Created Successfully';  }
  }
}
  