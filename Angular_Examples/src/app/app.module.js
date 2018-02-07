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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var create_component_1 = require('./create.component');
var delete_component_1 = require('./delete.component');
var getAll_component_1 = require('./getAll.component');
var getemp_component_1 = require('./getemp.component');
var login_component_1 = require('./login.component');
var update_component_1 = require('./update.component');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'login', component: login_component_1.LoginComponent },
                    { path: 'getAll', component: getAll_component_1.GetAllComponent },
                    { path: 'create', component: create_component_1.CreateComponent },
                    { path: 'update', component: update_component_1.UpdateComponent },
                    { path: 'delete', component: delete_component_1.DeleteComponent },
                    { path: 'getEmp', component: getemp_component_1.GetEmpComponent },
                ])
            ],
            declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, getAll_component_1.GetAllComponent, create_component_1.CreateComponent,
                update_component_1.UpdateComponent, delete_component_1.DeleteComponent, getemp_component_1.GetEmpComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map