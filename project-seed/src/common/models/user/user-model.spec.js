describe('userModel', function () {
  var allUsers,
    userModel,
    $httpBackend;

  beforeEach(module('project-seed.models.user'));
  beforeEach(inject(function(_userModel_, _$httpBackend_) {
    userModel = _userModel_
    $httpBackend = _$httpBackend_;

    setupMocks();
  }));

  it('should create an instance', function() {
    expect(userModel).toBeDefined();
  });

  describe('getAllUsers', function() {
    it("should load the users", function () {
      userModel.getAllUsers().then(function(users) {
        expect(users).toEqual(allUsers);
      });
      $httpBackend.flush();
    });

    it("should populate the cache", function () {
      userModel.getAllUsers().then(function (users) {
        expect(userModel.users).toEqual(allUsers);
      });
      $httpBackend.flush();
    });
  });

  /**
   * This will setup the mock data for all of the code types.
   *
   * It uses jasmine-jquery to load the data from JSON files
   * in the /data directory.
   *
   */
  function setupMocks() {
    jasmine.getJSONFixtures().fixturesPath = 'base/data/users/';
    allUsers = getJSONFixture('default.json');
    $httpBackend.whenGET('/api/users').respond(allUsers);
  }
});