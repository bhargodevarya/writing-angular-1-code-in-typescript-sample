/// <reference path="../../typings/angularjs/angular.d.ts" />
var SimpleController = (function () {
    // Dependency injection via contrustor
    function SimpleController($scope) {
        this.header = 'Welcome!';
        this.text = 'Use Price & Cost to control your project\'s budget!';
        this.tips = ['be efficient', 'be successful', 'be happy'];
    }
    SimpleController.prototype.signUpNow = function () {
        window.location.href = "http://www.priceandcost.com";
    };
    ;
    // Lets keep our list of dependencies in a separate static
    // variable, even though we really do not need them at this
    // moment since this controller is very simplistic.
    SimpleController.AngularDependencies = ['$scope', SimpleController];
    return SimpleController;
})();
angular.module('myApp.SimpleStuff').controller('SimpleController', SimpleController.AngularDependencies);
