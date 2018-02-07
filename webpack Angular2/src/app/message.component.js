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
var core_1 = require("@angular/core");
var MessageComponent = (function () {
    function MessageComponent() {
        this.message = '';
    }
    MessageComponent.prototype.check = function (name) {
        return 'welcome ' + name;
    };
    MessageComponent.prototype.getFriends = function () {
        return [{ "id": 7767, "name": "narendranath", "salary": 2452, "dept": "sdvsd" },
            { "id": 7766, "name": "dvdsv", "salary": 2452, "dept": "sdvsd" },
            { "id": 66066, "name": "fff", "salary": 42353, "dept": "dfhdh" }];
    };
    MessageComponent.prototype.setMessage = function (newMessage) {
        this.message = newMessage;
    };
    MessageComponent.prototype.clearMessage = function () {
        this.message = '';
    };
    MessageComponent.prototype.onOrder = function (order, no) {
        this.var1 = order;
        this.var2 = no;
    };
    MessageComponent.prototype.onSearch = function (temp) {
        this.status1 = temp;
    };
    MessageComponent.prototype.onDelete = function (temp1) {
        this.status2 = temp1;
    };
    return MessageComponent;
}());
MessageComponent = __decorate([
    core_1.Component({
        selector: 'display-message',
        template: '<h1>{{message}}</h1>'
    }),
    __metadata("design:paramtypes", [])
], MessageComponent);
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.component.js.map