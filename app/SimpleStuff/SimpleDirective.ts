/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="SimpleClickCountService.ts" />

class SimpleDirectiveController
{   
    // This is the initializer that we will pass to AngularJS.
    public static initializer: ng.IDirectiveFactory = (simpleClickCountService: SimpleClickCountService) => {
        return {
            controller: () => new SimpleDirectiveController(simpleClickCountService),
            controllerAs: 'simpleDirective',
            scope: {},
            templateUrl: 'SimpleStuff/SimpleDirective.html'
        };
    };
    
    // Keep our Angular dependencies as a static variable
    public static AngularDependencies: any[] = [
        'SimpleClickCountService',
        SimpleDirectiveController.initializer];
    
    private _simpleClickCountService: SimpleClickCountService
    
    public constructor(simpleClickCountService: SimpleClickCountService)
    {
        this._simpleClickCountService = simpleClickCountService;
    }
    
    public message: string = 'Hello from SimpleDirective!';
    
    public getButtonText(): string
    {
        var count = this._simpleClickCountService.GetClickCount();
        if(count == 0) return 'Click me!';
        else return 'You clicked me ' + count + ' times!';
    }
    
    public clickMe(): void
    {
        this._simpleClickCountService.Increment();
    }
}

angular.module('myApp.SimpleStuff').directive('myAppSimpleDirective', SimpleDirectiveController.AngularDependencies);