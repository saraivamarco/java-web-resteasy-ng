"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var dataservice_1 = require('./dataservice');
var app_constants_1 = require('./app.constants');
// Add the RxJS Observable operators we need in this app.
require('./rxjs-operators');
var AppComponent = (function () {
    function AppComponent(dataService, configuration) {
        this.dataService = dataService;
        this.configuration = configuration;
        this.dataService = dataService;
        this.sendFileUrl = configuration.ServerWithApiUrl + 'upload';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getObservableItems();
        this.getObservableVarHeaders();
        //this.getPromiseData();        
    };
    AppComponent.prototype.getObservableItems = function () {
        var _this = this;
        this.dataService.getFiles()
            .subscribe(function (rawdata) { return _this.data = rawdata; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.getObservableVarHeaders = function () {
        var _this = this;
        this.dataService.getVarHeaders()
            .subscribe(function (rawdata) { return _this.vheaders = rawdata; }, function (error) { return _this.errorMessage = error; });
    };
    /** Optional way to retrieve data - w/Promise */
    AppComponent.prototype.getPromiseData = function () {
        var _this = this;
        this.dataService.getData()
            .then(function (rawdata) { return _this.data = rawdata; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app.html',
            providers: [dataservice_1.DataService, app_constants_1.Configuration]
        }), 
        __metadata('design:paramtypes', [dataservice_1.DataService, app_constants_1.Configuration])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map