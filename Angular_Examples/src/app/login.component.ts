import { Component } from '@angular/core';



@Component({
  selector: 'login-app',
  template: `
<marquee><h1>Hello {{name}}</h1></marquee>
<table align="center" cellpadding="5" cellspacing="5" border="1">
<tr bgcolor="#e55a27">
<td><b>User name<input type="text" #userName></b></td>
</tr><br>
<tr bgcolor="#e55a27">
<td><b>Password <input type="passWord" #passWord></b></td>
</tr><br>
<tr bgcolor="#e5273d">
<td><b><button (click)="onClick(userName.value,passWord.value)">submit</button>  {{status}}</b></td>
</tr><br></table>

`,
 })

export class LoginComponent {
    name = 'User';
  status: string;

  onClick(username: string, pass: string) {
    if (username == 'user' && pass == 'user') {
      console.log(username);
      this.status = 'Login Success';
    }
    else {
      this.status = 'Login Fail';
    }
  }
}
 