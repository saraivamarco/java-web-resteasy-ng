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
var dataservice_1 = require('./service/dataservice');
var app_constants_1 = require('./constants/app.constants');
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
        // this.getObservableVarHeaders();
        this.getObservableItems();
        //this.getPromiseData();
    };
    AppComponent.prototype.getObservableItems = function () {
        var _this = this;
        setTimeout(function () {
            var dataSet = [
                ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
                ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
                ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
                ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060"],
                ["Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700"],
                ["Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000"],
                ["Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500"],
                ["Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900"],
                ["Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500"],
                ["Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600"],
                ["Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560"],
                ["Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000"],
                ["Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600"],
                ["Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500"],
                ["Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750"],
                ["Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500"],
                ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000"],
                ["Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500"],
                ["Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000"],
                ["Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500"],
                ["Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000"],
                ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000"],
                ["Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450"],
                ["Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600"],
                ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000"],
                ["Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575"],
                ["Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650"],
                ["Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850"],
                ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000"],
                ["Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000"],
                ["Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400"],
                ["Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500"],
                ["Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000"],
                ["Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500"],
                ["Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050"],
                ["Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675"]
            ];
            var tableElement = $(_this.dataTable.nativeElement);
            tableElement.DataTable({
                data: dataSet,
                columns: [
                    { title: "Name" },
                    { title: "Position" },
                    { title: "Office" },
                    { title: "Extn." },
                    { title: "Start date" },
                    { title: "Salary" }
                ]
            });
        }, 2000);
        // this.dataService.getFiles()
        //                 .subscribe(
        //                   rawdata => this.data = rawdata,
        //                   error =>  this.errorMessage = <any>error);
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
    __decorate([
        core_1.ViewChild('table'), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "dataTable", void 0);
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