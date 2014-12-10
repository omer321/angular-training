describe('codesModel', function () {
  var allUsers;

  /**
   * This will setup the mock data for all of the code types.
   *
   * It uses jasmine-jquery to load the data from JSON files
   * in the /data directory.
   *
   * @param codeTypes
   */
  function setupMocks() {
    jasmine.getJSONFixtures().fixturesPath = 'base/data/users/';
    allUsers = getJSONFixture('default.json');
    $httpBackend.whenGET("/api" + '/users/').respond(allUsers);
  }
});