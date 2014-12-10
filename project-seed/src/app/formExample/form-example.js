angular.module('project-seed.form-example', [])
  .config(function ($stateProvider) {

    console.log('config form example')
    $stateProvider
      .state('form', {
        url: '/form',
        controller: 'FormExample as formExample',
        templateUrl: 'formExample/form-example.tpl.html'
      })
    ;
  })
  .controller('FormExample', function FormExample() {
    var formExample = this;

  })
;
