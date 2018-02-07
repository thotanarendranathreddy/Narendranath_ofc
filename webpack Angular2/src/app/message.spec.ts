import {MessageComponent} from './message.component';


describe('Testing message state in message.component', () => {	
let app: MessageComponent;
beforeEach(() => {
app = new MessageComponent();
});


it('should include the name in the message', () => {  
	 let name=app.check('Narendranath');
	  expect(name).toContain('welcome Narendranath');
	 }); 

it('should count friends', () => {
let names= app.getFriends();
expect(names.length).toEqual(3);
});


it('should set new message', () => {
app.setMessage('Testing');
expect(app.message).toBe('Testing');
});



it('should clear message', () => {
app.clearMessage();
expect(app.message).toBe('');
});


it('should set two arguments for onOrder', () => {
app.onOrder('name',6);
expect(app.var1).toBe('name');
expect(app.var2).toBe(6);
});


it('should set one argument for onSearch', () => {
app.onSearch(13);
expect(app.status1).toBe(13);
});


it('should set one argument for onDelete', () => {
app.onDelete(9);
expect(app.status2).toBe(9);

});

});