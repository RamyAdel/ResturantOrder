var app = angular.module('store-directives', []);

app.directive("addmeal", function () {
    return {
        restrict: "E",
        templateUrl: "addmeal.html"
    }
});

app.directive("reports", function () {
    return {
        restrict: "E",
        templateUrl: "reports.html"
    }
});

app.directive("addorder", function () {
    return {
        restrict: "E",
        templateUrl: "addorder.html"
    }
});

app.directive("productTabs", function () {
    return {
        restrict: "E",

        templateUrl: "product-tabs.html",
        controller: function () {
            this.tab = 1;

            this.isSet = function (checkTab) {
                return this.tab === checkTab;
            };

            this.setTab = function (activeTab) {
                this.tab = activeTab;
            };
        },
        controllerAs: "tab"
    };
});
