var fileX = {
    "records": [
        {
            "Name":"Mehul",
            "Age":"18",
            "Fav_color": "Blue"
        },{
            "Name":"Sage",
            "Age":"123",
            "Fav_color": "red"
        },{
            "Name":"troy",
            "Age":"1732",
            "Fav_color": "green"
        },{
            "Name":"jay",
            "Age":"22",
            "Fav_color": "Blue"
        },{
            "Name":"steve",
            "Age":"14",
            "Fav_color": "orange"
        },

    ]

}

var app = angular.module('mainApp',[]);

app.controller('people',function($scope) {
    $scope.persons = fileX.records;
});
