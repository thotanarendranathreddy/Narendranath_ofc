import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { CreateComponent } from './create.component';
import { DeleteComponent } from './delete.component';
import { GetAllComponent } from './getAll.component';
import { GetEmpComponent } from './getemp.component';
import { LoginComponent } from './login.component';
import { UpdateComponent } from './update.component';



import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
@NgModule({
  imports:      [ BrowserModule,
                   HttpModule,
                   RouterModule.forRoot([
                   {path:'login', component:LoginComponent},
                   {path:'getAll', component:GetAllComponent},
                   {path:'create', component:CreateComponent},
                   {path:'update', component:UpdateComponent},
                   {path:'delete', component:DeleteComponent},
                   {path:'getEmp', component:GetEmpComponent}, 

                  ])
                  ],
  declarations: [ AppComponent,LoginComponent, GetAllComponent,CreateComponent,
                    UpdateComponent,DeleteComponent,GetEmpComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
