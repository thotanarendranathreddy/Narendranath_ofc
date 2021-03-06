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
var LoginComponent = (function () {
    function LoginComponent() {
        this.name = 'User';
    }
    LoginComponent.prototype.onClick = function (username, pass) {
        if (username == 'user' && pass == 'user') {
            console.log(username);
            this.status = 'Login Success';
        }
        else {
            this.status = 'Login Fail';
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-app',
            template: "\n<marquee><h1>Hello {{name}}</h1></marquee>\n<table align=\"center\" cellpadding=\"5\" cellspacing=\"5\" border=\"1\">\n<tr bgcolor=\"#e55a27\">\n<td><b>User name<input type=\"text\" #userName></b></td>\n</tr><br>\n<tr bgcolor=\"#e55a27\">\n<td><b>Password <input type=\"passWord\" #passWord></b></td>\n</tr><br>\n<tr bgcolor=\"#e5273d\">\n<td><b><button (click)=\"onClick(userName.value,passWord.value)\">submit</button>  {{status}}</b></td>\n</tr><br></table>\n\n",
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map