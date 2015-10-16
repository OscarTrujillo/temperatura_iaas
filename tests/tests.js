var expect = chai.expect;

describe("Tests", function() {

    it("8c", function() {
        var a = new Temperatura(8,"c");
        expect(a.getn()).to.equal(8);
        expect(a.getc()).to.equal("c");
    });
    it("6f", function() {
        var a = new Temperatura(6,"f");
        expect(a.number).to.equal(6);
        expect(a.type).to.equal("f");
    });

});
