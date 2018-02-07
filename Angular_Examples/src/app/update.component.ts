import { EmployeeService } from './employee.service';
import { Component} from '@angular/core';

@Component({
  selector: 'update-list',
  template: `
<!-- update operation --> 
  
 <h3 align="center"><font><strong>Update Record by ID</strong></font>
<table align="center" cellpadding="5" cellspacing="5" border="1">
<tr bgcolor="#27dfe5">
<td><b>ID<input type="text" #id1></b></td>
<td><b>NAME<input type="text" #name1></b></td>
<td><b>SALARY<input type="text" #salary1></b></td>
<td><b>DEPT<input type="text" #dept1></b></td>
</tr><br>
</table>
<button (click)="onClick(id1.value,name1.value,salary1.value,dept1.value)">Update</button> 
 {{status}}
  `,


})
export class UpdateComponent{
  status: string;
  employees: any[];
 
  
  constructor(private _employeeService: EmployeeService) {}
  
  onClick(id1:string,name1:string,salary1:string,dept1:string){
    console.log('created record');
    this._employeeService.update(id1,name1,salary1,dept1)
      .subscribe(resEmployeeData => this.employees = (resEmployeeData));
    console.log(this.employees);
  
 if(id1==''){

   this.status = 'Record not Updated ';
  }else{ this.status = 'Record Updated Successfully'; }
  }
  
  } 