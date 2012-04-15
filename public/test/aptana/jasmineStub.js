/**
 * @author brandon
 */

/*
 *	This file is here so that Aptana studio will provide code-completion for jasmine's jasmine {} 
 *  Run the below through a minifier and paste the minified code in the top of your spec files
 *  to have aptana ide support while developing.
 */
var _prevJasmine = null;
if(jasmine){
	_prevJasmine = jasmine;
}

var jasmine = {};

jasmine.createSpy = function(){};

if(_prevJasmine){
	jasmine = _prevJasmine;
}