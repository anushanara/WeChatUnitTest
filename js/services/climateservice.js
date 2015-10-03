app.factory('climate', ['$http', function ($http) { return $http.get('http://api.wunderground.com/api/36b799dc821d5836/conditions/q/MO/Kansas%20City.json').success(function (data) { 
    //prompt("in facotry directive");
    return data; }).error(function (err) { return err; }); }]);



