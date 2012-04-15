describe('Default Project', function () {

    it('comes with a passing unit test already written',function(){
        var tester = new fizz();

        expect(tester.sound()).toBe('buzz');
    });
});