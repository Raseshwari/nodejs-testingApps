const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
	var res = utils.add(33,11);

	expect(res).toBe(44).toBeA('number');
	// if(res !== 44){
	// 	throw new Error(`Expected 44, but got ${res}`);
	// }
});

it('should async add two nos', (done) => {
	utils.asyncAdd(4,3, (sum) => {
		expect(sum).toBe(7).toBeA('number');
		done();
	});
});

it('shoud square the input number', () =>{
	var res = utils.square(2);

	//to compare strings, numbers, etc. use => toBeA
	expect(res).toBe(4).toBeA('number');
	// if(res !== 4){
	// 	throw new Error(`Expected 4 but got ${res}`);
	// }
});

it('should async square two numbers',(done) => {
	utils.asyncSquare(4, (square) => {
		expect(square).toBe(16).toBeA('number');
		done();
	});
});

it('should set first and last name', () => {
	var user = {
		age: 27,
		location: 'NY'
	};

	var res = utils.setName(user, "Raseshwari Pulle");
	expect(res).toInclude({
		firstName: "Raseshwari",
		lastName: "Pulle"
	});
});


// it('should expect some values', () => {
	//expect(12).toNotBe(12);4 // use => toNotBe to compare numbers, strings, etc.
	
	//to compare objects use => toEqual or toNotEqual
	//expect({name: 'hammy'}).toNotEqual({name: 'Hammy'});

	//toInclude and to Exclude works with arrays and objects
	//expect([2,3,4]).toInclude(2);
	// expect([2,3,4]).toExclude(1);

	// expect({
	// 	name: 'Andrew',
	// 	age: 25,
	// 	location: 'Philly'
	// }).toInclude({
	// 	age: 25
	// })

	// expect({
	// 	name: 'Rashu',
	// 	age: 27,
	// 	location: 'NY'
	// }).toExclude({
	// 	name: 'Tammy'
	// })

//});