
import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'my-app',
  template: `


<table align="center" cellpadding="5" cellspacing="5" border="1">

<tr bgcolor="#F5B950">
<nav>
<td><b> <a href="http://localhost:3008/login">logout</a></b></td>
<td><b><a routerLink="/create" routerLinkActive="active">CREATE Record</a></b></td>
<td><b><a routerLink="/update" routerLinkActive="active">UPDATE Record</a></b></td>
<td><b><a routerLink="/delete" routerLinkActive="active">DELETE Record</a></b></td>
<td><b><a routerLink="/getEmp" routerLinkActive="active">Search Employee</a></b></td>
<td><b><a routerLink="/getAll" routerLinkActive="active">List of All Employees</a></b></td>
</nav>
</tr><br></table>

  
<router-outlet></router-outlet>`,
 providers: [EmployeeService]

})
export class AppComponent {

}
