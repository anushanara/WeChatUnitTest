app.controller('weatherctrl', function ($scope, $http) {
$scope.getWeather = function () {
    prompt(startlocation);
$http.get('http://api.wunderground.com/api/36b799dc821d5836/conditions/q/MO/Kansas%20City.json').success(function (data) {
    //prompt(data);
    temp = data.current_observation.temp_f;
    icon = data.current_observation.icon_url;
    weather = data.current_observation.weather;
    console.log(temp);
    console.log(icon);
    console.log(weather);
    prompt(temp);
    prompt(icon);
    prompt(weather);
    $scope.currenttemp = temp;
    $scope.currenticon = icon;
    $scope.currentweather = weather;
    
}) 
}
});  

/* app.controller('weatherctrl', ['$scope','climate', function($scope, climate) {
climate.success(function(data){
        //prompt("in weatherctrl");
    	$scope.climatedata = data;
    });
}]); */