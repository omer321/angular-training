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

      _.each(people, function(person) {
        person.sayHello();
      })
    })
  })

  .factory('PersonModel', function($http) {
    function PersonModel(name) {
      this.name = name
    }

    PersonModel.prototype.sayHello = function() {
      console.log('HELLO!', this.name);
    };

    return PersonModel;
  })

  .service('peopleModel', function PeopleModel($http, PersonModel) {
    var peopleModel = this;

    peopleModel.getPeople = function() {
      return $http.get('http://www.json-generator.com/api/json/get/bQqreHpQwO?indent=2').then(function (results) {
        peopleModel.people = [];
        _.each(results.data, function(person) {
          var newPerson = new PersonModel(person.name);
          peopleModel.people.push(newPerson);
        });
        return peopleModel.people;
      })
    }
  })
;