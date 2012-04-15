/*
 *	This file is here so that Aptana studio will provide code-completion for jasmine's expect() 
 *  Run the below through a minifier and paste the minified code in the top of your spec files
 *  to have aptana ide support while developing.
 */
var _prevSpec = null;
if(jasmine){
	_prevSpec = expect;
}

var returnedExpect = {};

returnedExpect.toEqual = function(y){}; //compares objects or primitives x and y and passes if they are equivalent

returnedExpect.toBe = function(y){}; //compares objects or primitives x and y and passes if they are the same object

returnedExpect.toMatch = function(pattern){}; //compares x to string or regular expression pattern and passes if they match

returnedExpect.toBeDefined = function(){}; //passes if x is not undefined

returnedExpect.toBeUndefined = function(){}; //passes if x is undefined

returnedExpect.toBeNull = function(){}; //passes if x is null

returnedExpect.toBeTruthy = function(){}; //passes if x evaluates to true

returnedExpect.toBeFalsy = function(){}; //passes if x evaluates to false

returnedExpect.toContain = function(y){}; //passes if array or string x contains y

returnedExpect.toBeLessThan = function(y){}; //passes if x is less than y

returnedExpect.toBeGreaterThan = function(y){}; //passes if x is greater than y

returnedExpect.toThrow = function(e){};

returnedExpect.toHaveBeenCalled = function(){}; 

/*
 */
returnedExpect.toHaveBeenCalled = function (){};// passes if x is a spy and was called

returnedExpect.toHaveBeenCalledWith = function(arguments){};// passes if x is a spy and was called with the specified arguments

returnedExpect.not = returnedExpect;

var expect = function(){
	return returnedExpect;
}; 

if(jasmine){
	expect = _prevSpec;
}