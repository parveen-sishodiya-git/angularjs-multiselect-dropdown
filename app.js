var app = angular.module('plunker', ['angularjs-dropdown-multiselect']);

app.controller('MainCtrl', function ($scope) {

    $scope.selectedUnits = [];
    $scope.allUnits = [
        { value: {
            name:"DELHI",
            img:"delhi.png",
            children:[],
            age:56
        }, label: "DELHI" }, 
        { value: {
            name:"IKONO",
            img:"ikono.png",
            children:[]
        }, label: "IKONO" }
    ];
    $scope.defaultSettings = { enableSearch: true, smartButtonMaxItems: 3};

    $scope.printVal = ()=>{
        console.log("okkkkkkk");
        console.log($scope.fdata);
    }

});
