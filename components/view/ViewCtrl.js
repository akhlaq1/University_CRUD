var app = angular.module('myApp');
app.controller('ViewCtrl',function ($firebaseArray,$state,array_service) {

    var vm = this;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log(user)
            this.user_uid = user.uid;
            var refNew = firebase.database().ref('/user/' + user.uid);
            // refNew.child(user.uid).set(vm.data)
            var arr1 = $firebaseArray(refNew);
            console.log(arr1)
            arr1.$loaded().then(function (arr1) {
                vm.fire_array = arr1

                vm.edit_func = function (id) {
                    /*var data = vm.fire_array[index];
                    vm.data = data;
                    array_service.viewData(data)*/

                    $state.go('add',{id:id});

                    console.log(id);


                };
            }).catch(function (err) {
                console.log("This is error form catch" + err)
            })
        }
        else {
            // No user is signed in.
            console.log("No user is signed in")
        }
        vm.del_func = function (index) {
            vm.fire_array.$remove(index);
        }

    })

});