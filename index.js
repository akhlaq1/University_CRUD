var app = angular.module('myApp',['firebase','ui.router']);
/*ui-router view code starts*/

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider

    // HOME STATES AND NESTED VIEWS =====
        .state('add', {
            url: '/add/:id',
            templateUrl: './components/add/add.html',
            controller: 'AddCtrl as vm',

        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('view', {
            url: '/view',
            templateUrl: './components/view/view.html',
            controller: 'ViewCtrl as vm',
            params : {id:null}



        })
        .state('add.view', {
            url: '/add.view',
            templateUrl: './components/view/view.html'

        })
        .state('login', {
            url: '/login',
            templateUrl: './components/login/login.html',
            controller: 'LoginCtrl as vm'

        })
        .state('signup', {
            url: '/signup',
            templateUrl: './components/signup/signup.html',
            controller: 'SignUpCtrl as vm'

        })
         .state('home', {
        url: '/home',
        templateUrl: './index.html',
        controller: 'homeCtrl as vm'

    });




// Initialize Firebase
    var config = {
        apiKey: "AIzaSyB5qhxDBAMrAb5vnS8AS8RJutPZxaERuW4",
        authDomain: "practice-firebase-a5ade.firebaseapp.com",
        databaseURL: "https://practice-firebase-a5ade.firebaseio.com",
        projectId: "practice-firebase-a5ade",
        storageBucket: "practice-firebase-a5ade.appspot.com",
        messagingSenderId: "693686561543"
    };
    firebase.initializeApp(config);

});
/*ui-router view code ends*/


app.controller("homeCtrl",function (array_service) {

});

