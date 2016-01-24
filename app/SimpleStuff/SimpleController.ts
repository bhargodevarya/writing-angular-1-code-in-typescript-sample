/// <reference path="../../typings/angularjs/angular.d.ts" />

class SimpleController
{
	// Lets keep our list of dependencies in a separate static
	// variable, even though we really do not need them at this
	// moment since this controller is very simplistic.
	static AngularDependencies = ['$scope', SimpleController];

	// Dependency injection via contrustor
	constructor($scope: ng.IScope)
	{
	}

	public header: string = 'Welcome!';
	public text: string = 'Use Price & Cost to control your project\'s budget!';
	public tips: string[] = ['be efficient', 'be successful', 'be happy'];

	public signUpNow()
	{
		window.location.href = "http://www.priceandcost.com";
	}; 
}

angular.module('myApp.SimpleStuff').controller(
	'SimpleController', SimpleController.AngularDependencies);
