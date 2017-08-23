var app = angular.module('myApp');
app.controller('LoginCtrl',function (array_service) {
    var vm = this;
    vm.signOut = function () {

        array_service.signOut_func()
    };
    /*log in Google Code starts*/


    vm.google_login_func = function () {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            /*array_service.user_uid_func(user);*/

            console.log(user);
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            alert(errorMessage);
        });
    }

    /*log in google Code ends*/

    /*login email/pass Code Starts*/
    vm.login_func = function () {
        var email = vm._login_user;
        var password = vm._login_pass;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.

                // The signed-in user info.
                var user = result.user;
              /*  array_service.user_uid_func(user);*/

                console.log(user);
                // ...
            })
            .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorMessage);
            console.log(errorCode);
            // ...
        });

    }

    /*login email/pass Code Ends*/

    /*login facebook Code Starts*/
    vm.login_fb_func = function () {
        var fb_provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fb_provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;

            console.log(token)
            // The signed-in user info.
            var user = result.user;
            /*array_service.user_uid_func(user);*/
            console.log(user)
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });

    }

    /*login facebook Code Ends*/


})