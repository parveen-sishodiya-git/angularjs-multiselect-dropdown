var app = angular.module('plunker', ['angularjs-dropdown-multiselect']);

app.controller('MainCtrl', function ($scope) {

    $scope.selectedUnits = [];
    $scope.allUnits = [
        { value: {
            name:"DELHI",
            img:"delhi.png",
            children:[]
        }, label: "DELHI" }, 
        { value: {
            name:"IKONO",
            img:"ikono.png",
            children:[]
        }, label: "IKONO" }
    ];
    $scope.defaultSettings = { enableSearch: true, smartButtonMaxItems: 3};
});
