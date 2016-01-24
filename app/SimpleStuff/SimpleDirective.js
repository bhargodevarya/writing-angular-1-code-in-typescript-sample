/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="SimpleClickCountService.ts" />
var SimpleDirectiveController = (function () {
    function SimpleDirectiveController(simpleClickCountService) {
        this.message = 'Hello from SimpleDirective!';
        this._simpleClickCountService = simpleClickCountService;
    }
    SimpleDirectiveController.prototype.getButtonText = function () {
        var count = this._simpleClickCountService.GetClickCount();
        if (count == 0)
            return 'Click me!';
        else
            return 'You clicked me ' + count + ' times!';
    };
    SimpleDirectiveController.prototype.clickMe = function () {
        this._simpleClickCountService.Increment();
    };
    // This is the initializer that we will pass to AngularJS.
    SimpleDirectiveController.initializer = function (simpleClickCountService) {
        return {
            controller: function () { return new SimpleDirectiveController(simpleClickCountService); },
            controllerAs: 'simpleDirective',
            scope: {},
            templateUrl: 'SimpleStuff/SimpleDirective.html'
        };
    };
    // Keep our Angular dependencies as a static variable
    SimpleDirectiveController.AngularDependencies = [
        'SimpleClickCountService',
        SimpleDirectiveController.initializer];
    return SimpleDirectiveController;
})();
angular.module('myApp.SimpleStuff').directive('myAppSimpleDirective', SimpleDirectiveController.AngularDependencies);
