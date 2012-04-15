// Matchers should throw an error when they get an unexpected result.
var App = null;
var MockButtonElement = {preventDefault: function(){}};
var expect = window.chai.expect;

var getApp = function(){
    var toReturn = document.getElementById('browser').contentWindow.App;
	
    return toReturn;
};

ramble.match(/^I visit the application$/, function() {
    this.visit('/app/index.html');
});

ramble.match(/^I will be successful$/, function() {
    var ms = 5000;
    ramble.retryOnFailWithinMilliseconds = ms;

	expect(this.find('body header')).to.have.length(1);
	expect(this.find('body header').html()).to.equal('\n\t\t\t\tApplication Stub\n\t\t\t');

	//kept as an example
    //App = getApp();
	
    //expect(App).to.exist;
});
