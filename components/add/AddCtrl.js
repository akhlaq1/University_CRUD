var app = angular.module('myApp');
app.controller('AddCtrl',function ($state,$firebaseArray,$stateParams,array_service) {
    var vm = this;
  vm.writeUserData = function () {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                console.log(user)
                this.user_uid = user.uid;
                var refNew = firebase.database().ref('/user/'+user.uid);
                // refNew.child(user.uid).set(vm.data)
                var arr1 = $firebaseArray(refNew);
                console.log(arr1)
                arr1.$add(vm.data).then(function () {
                    console.log("Adding data successful")
                }).catch(function (err) {
                    console.log(err)
                });
                console.log("Write user function triggered")
            }
            else {
                // No user is signed in.
                console.log("No user is signed in")
            }
        })}

    /*========  Edit Shit ==================*/
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log(user)
            this.user_uid = user.uid;
            var refNew = firebase.database().ref('/user/'+user.uid);
            // refNew.child(user.uid).set(vm.data)
            var arr1 = $firebaseArray(refNew);


            console.log(arr1)
            arr1.$loaded().then(function (arr1) {
                vm.fire_array = arr1;
                var index = $stateParams.id;
                var objData = arr1[index];
                vm.data = objData
                console.log(index);

                console.log(objData)

                vm.saveData = function () {
                    var key = objData.$id

                    arr1.$save(vm.data).then(function (obj) {
                        console.log("edit successful"+obj)

                        $state.go('add.view');

                    }).catch(function (err) {
                        console.log("error from savedata func"+err)

                    })}
                console.log("This is from AddCtrl "+vm.data)

            }).catch(function (err) {
                console.log("This is error form catch" + err);
            })
            console.log("Write user function triggered")
        }
        else {
            // No user is signed in.
            console.log("No user is signed in")
        }
    })

    /*=================*/



});