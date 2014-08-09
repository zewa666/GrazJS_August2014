define(function(require) {
  // Describe the scenario you are testing
  describe("Event", function() {

    // get ref to the system under test (sut)
    var sut = require('src/event'),
    demoEvent,
    demoTitle = "Demo Title",
    demoDate = "2014-01-01";

    // Like SetUp in J/Q/N/...Unit
    beforeEach(function() {
      demoEvent = new sut(demoTitle, demoDate);
    });

    // Like TearDown in ...
    afterEach(function() {
      console.log("Yep another one done ...");
    });

    // sub scenario
    describe('test getters', function() {

      it("should return date on calling getDate", function() {
        expect(demoEvent.getDate()).toBe(demoDate);
      });

      it('should return title on calling getTitle', function() {
        expect(demoEvent.getTitle()).toBe(demoTitle);
      });

      it('should return non-null values', function() {
        expect(demoEvent.getTitle()).not.toBe(null);
      });
    });
  });
});

