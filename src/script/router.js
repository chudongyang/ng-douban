app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('main',{
        url:'/main',
        templateUrl:'view/main.html',
        controller:'mainCtrl'
    }).state('login',{
        url:'/login',
        templateUrl:'view/login.html',
        controller:'loginCtrl'
    }).state('register',{
        url:'/register',
        templateUrl:'view/register.html',
        controller:'registerCtrl'
    }).state('coming',{
        url:'/coming',
        templateUrl:'view/coming.html',
        controller:'comingCtrl'
    }).state('top250',{
        url:'/top250',
        templateUrl:'view/top250.html',
        controller:'top250Ctrl'
    }).state('detail',{
        url:'/detail/:id',
        templateUrl:'view/detail.html',
        controller:'detailCtrl'
    }).state('add',{
        url:'/add',
        templateUrl:'view/add.html',
        controller:'addCtrl'
    });
    $urlRouterProvider.otherwise('main');
}]);