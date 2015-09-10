describe('romanFinder', function () {
  it("Number > 3999 returns false", function() {
    expect(romanFinder(4000)).to.equal("Error: Not between 1 and 3999.");
  });

  it("Number 9 => IX", function() {
    expect(romanFinder(9)).to.equal("IX");
  });

  it("Number 10 => X", function() {
    expect(romanFinder(10)).to.equal("X");
  });

  it("Number 18 => XVIII", function() {
    expect(romanFinder(18)).to.equal("XVIII");
  });

  it("Number 100 => C", function() {
    expect(romanFinder(100)).to.equal("C");
  });

  it("Number 110 => CX", function() {
    expect(romanFinder(110)).to.equal("CX");
  });

  it("Number 1000 => M", function() {
    expect(romanFinder(1000)).to.equal("M");
  });

  it("Number 900 => CM", function() {
    expect(romanFinder(900)).to.equal("CM");
  });

  it("Number 3999 => CM", function() {
    expect(romanFinder(3999)).to.equal("MMMCMXCIX");
  });

  it("Number 48 => XLVIII", function() {
    expect(romanFinder(48)).to.equal("XLVIII");
  });


});
