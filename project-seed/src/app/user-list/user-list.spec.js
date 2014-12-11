describe('user-list', function() {
  var userListCtrl,
    userModel;

  beforeEach(module('project-seed.user-list'));
  beforeEach(inject(function($controller) {
    userModel = {
      wasCalled: false,
      getAllUsers: function () {
        this.wasCalled = true;
        return {
          then: function () {
          }
        }
      }
    };
    userListCtrl = $controller('UserList', {
      userModel: userModel
    });
  }));

  it("should create an instance", function () {
    expect(userListCtrl).toBeDefined();
  });

  it("should call getAllUsers", function () {
    expect(userModel.wasCalled).toBe(true);
  });
});