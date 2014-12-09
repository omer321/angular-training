angular.module('project-seed', [
  'project-seed.common',
  'ui.router',
  //'templates-app',
  'ngAria',
  'angularMoment',
  'ngSanitize'
])

  .controller('AppCtrl', function AppCtrl(peopleModel) {
    var app = this;

    app.loading = true;

    peopleModel.getPeople().then(function(people) {
      app.people = people;
    })
  })

  .service('peopleModel', function PeopleModel($http) {
    var peopleModel = this;

    peopleModel.getPeople = function() {
      return $http.get('http://www.json-generator.com/api/json/get/bQqreHpQwO?indent=2').then(function (results) {
        peopleModel.people = results.data;
        return peopleModel.people;
      })
    }
  })
;