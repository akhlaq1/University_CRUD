var app = angular.module('myApp');
app.controller('SignUpCtrl',function () {
var vm = this;
    /*Sign UP Code Starts*/

    vm.signup = function () {

        var email = vm.signup_data.email;
        var pass = vm.signup_data.password;


        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.

                // The signed-in user info.
                var user = result.user;
                alert("Sign up successful")

                console.log(user);
                // ...
            })

            .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(error+"  "+errorCode)
        });

    }

    /*Sign UP Code Ends*/


})