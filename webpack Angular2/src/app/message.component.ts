import {Component} from '@angular/core';


@Component({
selector: 'display-message',
template: '<h1>{{message}}</h1>'
})

export class MessageComponent {
public message: string = '';

var1:string;
var2: number;
status1:number;
status2:number;
temp1:string;
temp2:string;

constructor() {}


 check(name: string){
	 return 'welcome '+ name;
	}
 
 

getFriends()
{
 
    return [{"id":7767,"name":"narendranath","salary":2452,"dept":"sdvsd"},
            {"id":7766,"name":"dvdsv","salary":2452,"dept":"sdvsd"},
            {"id":66066,"name":"fff","salary":42353,"dept":"dfhdh"}];
}  


setMessage(newMessage: string) {
this.message = newMessage;
}


clearMessage() {
this.message = '';
}




onOrder(order:string,no: number) {
    this.var1=order;
    this.var2=no;                 
     
}
onSearch(temp:number){            

  this.status1 = temp;
 
}  

onDelete(temp1:number){           
this.status2=temp1;

}






}