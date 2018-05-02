var app = angular.module('myApp', ['onsen']);

app.run(function () {});

app.controller('mainController', function ($scope, $rootScope, $http, $log,$timeout) {


    $scope.initiator = function () {

        layoutNavigator.pushPage("html/login.html",{animation : 'slide'})
    }
});

app.controller('loginController', function ($scope, $rootScope, $http, $log,$timeout) {

    $scope.login = function () {

        layoutNavigator.pushPage("html/splitter.html",{animation : 'slide'})
    };

    this.$onInit = function(){
        console.log("login page init");
    }
});

app.controller('SplitterController', function ($scope, $rootScope, $http, $log,$timeout) {
    this.load = function(page) {
        mySplitter.content.load(page)
            .then(function() {
                mySplitter.left.close();
            });

        page.querySelector('[component="button/menu"]').onclick = function() {
            document.querySelector('#mySplitter').left.toggle();
        };
    };


});