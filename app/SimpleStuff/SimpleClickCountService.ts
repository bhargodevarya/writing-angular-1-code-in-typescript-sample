/// <reference path="../../typings/angularjs/angular.d.ts" />

class SimpleClickCountService
{
    private _clicks = 0;
    
    public Increment(): void
    {
        this._clicks++;
    }
    
    public GetClickCount(): number
    {
        return this._clicks;
    }
}

angular.module('myApp.SimpleStuff').service('SimpleClickCountService', [() => new SimpleClickCountService()]);