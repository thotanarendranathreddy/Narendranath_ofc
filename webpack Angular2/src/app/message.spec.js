"use strict";
var message_component_1 = require("./message.component");
describe('Testing message state in message.component', function () {
    var app;
    beforeEach(function () {
        app = new message_component_1.MessageComponent();
    });
    it('should include the name in the message', function () {
        var name = app.check('Narendranath');
        expect(name).toContain('welcome Narendranath');
    });
    it('should count friends', function () {
        var names = app.getFriends();
        expect(names.length).toEqual(3);
    });
    it('should set new message', function () {
        app.setMessage('Testing');
        expect(app.message).toBe('Testing');
    });
    it('should clear message', function () {
        app.clearMessage();
        expect(app.message).toBe('');
    });
    it('should set two arguments for onOrder', function () {
        app.onOrder('name', 6);
        expect(app.var1).toBe('name');
        expect(app.var2).toBe(6);
    });
    it('should set one argument for onSearch', function () {
        app.onSearch(13);
        expect(app.status1).toBe(13);
    });
    it('should set one argument for onDelete', function () {
        app.onDelete(9);
        expect(app.status2).toBe(9);
    });
});
//# sourceMappingURL=message.spec.js.map