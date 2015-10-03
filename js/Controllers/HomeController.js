app.controller('googlemapoutput', function ($scope, $http, $http) {
    var map, mapOptions, directionsDisplay = new google.maps.DirectionsRenderer({
        draggable: true
    });
    var directionsService = new google.maps.DirectionsService();
    $scope.initialize = function () {
          var pos = new google.maps.LatLng(0, 0);
          var mapOptions = {
                zoom: 3,
                center: pos
            };
            map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
    };
    $scope.calcRoute = function () {
        //prompt("ur in calcRoute");
        var end = document.getElementById('endlocation').value;
        var start = document.getElementById('startlocation').value;
        var request = {
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.DRIVING
            };
            directionsService.route(request, function (response, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setMap(map);
                    directionsDisplay.setDirections(response);
                    console.log(status);
                }     
        });
    };
    
  
    
    $scope.getWeather = function () {
        
        prompt($scope.startlocation); //gets the value of startlocation in tml
        prompt($scope.endlocation);
        var myUrl = "http://api.wunderground.com/api/36b799dc821d5836/conditions/q/MO/" +  encodeURIComponent($scope.startlocation)+".json";
        var myUrl_des = "http://api.wunderground.com/api/36b799dc821d5836/conditions/q/MO/" +  encodeURIComponent($scope.endlocation)+".json";
        prompt(myUrl);
        prompt(myUrl_des)//http://api.wunderground.com/api/36b799dc821d5836/conditions/q/MO/kansas%20city.json
        $http.get(myUrl).success(function (data) {
            //prompt("ur here");
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
         $http.get(myUrl_des).success(function (data) {
            //prompt("ur in des");
            temp_des = data.current_observation.temp_f;
            icon_des = data.current_observation.icon_url;
            weather_des = data.current_observation.weather;
            console.log(temp_des);
            console.log(icon_des);
            console.log(weather_des);
            //prompt(temp_des);
            //prompt(icon_des);
            //prompt(weather_des);
            $scope.currenttemp_Des = temp_des;
            $scope.currenticon_Des = icon_des;
            $scope.currentweather_Des = weather_des;
        })
    };
    
    google.maps.event.addDomListener(window, 'load', $scope.initialize);
    
});