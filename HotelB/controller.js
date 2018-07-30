var app = angular.module("search", ['ngRoute']);

app.factory('myService', function($http) {
  var promise;
  var myService = {
    async: function() {
      if ( !promise ) {
      	// promise = "This has been made using AngularJs";
        promise = $http.get('index.html').then(function (response) {
          
          return "This has been made using AngularJs";
        });
      }
      return promise;
    }
  };
  return myService;
});

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'about.html',
        controller: 'AboutController'
    })
      ;
}]);

app.controller('AboutController',function ($scope) {
	$scope.message = "This app is made by Divyani Mittal."
});

app.filter('searchFor', function(){
	return function(arr, searchString, Slocation){
		if(!searchString){
			return null;
		}
		var result = [];

		searchString = searchString.toLowerCase();
		angular.forEach(arr, function(item){
			console.log(item);
			console.log(Slocation);
			if(item.title.toLowerCase().indexOf(searchString) !== -1 && item.location == Slocation.locate){
				result.push(item);
			}
		});
		return result;
	};
});

function SearchController(myService,$scope){

	$scope.locations = [
		{
			locate : 'Banglore'
		},
		{
			locate : 'Chennai'
		},
		{
			locate : 'Hyderabad'
		}
	];

	$scope.tech = function () {
		var k = myService.async().then(function (d) {
			alert(d);
		})
		
	}

	$scope.hotels = [
		{
			url: 'http://localhost/testing/hotelSearch/HotelB/',
			title: 'Davanam Sarovar Portico Suites',
			image: 'http://images1.makemytrip.com/mmtimgs/images/upload/DavanamSarovarPorticoSuites_Exterior_View__Listing.jpg',
			location : 'Banglore',
			des : 'Click on image to check Availability'
		},
		{
				url: 'http://localhost/testing/hotelSearch/HotelB/',
			title: 'The Infantry Hotel',
			image: 'http://images1.makemytrip.com/mmtimgs/images/upload/TheInfantryHotel_Exterior__View_Listing.jpg',
			location : 'Banglore'
		},
		{
			url: 'http://localhost/testing/hotelSearch/HotelB/',
			title: 'The Chancery Pavillion',
			image: 'http://images1.makemytrip.com/mmtimgs/images/upload/TheChanceryPavillion_Exterior_View_Listing.jpg',
			location : 'Banglore',
			des : 'Click on image to check Availability'
		},
		{
				url: 'http://localhost/testing/hotelSearch/HotelB/',
			title: 'The Regal Residency',
			image: 'http://images1.makemytrip.com/mmtimgs/images/upload/128x96_Seagrape_Gardens_-_Now_Roerich_Grand_hotel_Listing.jpg?1379393121040',
			location : 'Banglore',
			des : 'Click on image to check Availability'
		},
		{
				url: 'http://localhost/testing/hotelSearch/HotelB/',
			title: 'Radisson Hyderabad Hitec city',
			image: 'http://img.mmtcdn.com/hotels/201107151100547977/r/Banquet%20Hall.jpg',
			location : 'Hyderabad',
			des : 'Click on image to check Availability'
		},
		{
				url: 'http://localhost/testing/hotelSearch/HotelB/',
			title: 'The Manohar Hotel',
			image: 'http://img.mmtcdn.com/hotels/201312261016594271/r/Lobby1407136166943.jpg',
			location : 'Hyderabad',
			des : 'Click on image to check Availability'
		},
		{
				url: 'http://localhost/testing/hotelSearch/HotelB/',
			title: 'Daspalla Hotel',
			image: 'http://img.mmtcdn.com/hotels/201011201347537252/r/Exterior_View_2.jpg',
			location : 'Hyderabad',
			des : 'Click on image to check Availability'
		},
		{
				url: 'http://localhost/testing/hotelSearch/HotelB/',
			title: 'Savera',
			image: 'http://img.mmtcdn.com/hotels/200806231705198865/r/Restaurant.jpg',
			location : 'Chennai',
			des : 'Click on image to check Availability'
		},
		{
				url: 'http://localhost/testing/hotelSearch/HotelB/',
			title: 'Ramada Chennai',
			image: 'http://img.mmtcdn.com/hotels/201208221859122411/r/Board%20walk%202.jpg',
			location : 'Chennai',
			des : 'Click on image to check Availability'
		},
		{
				url: 'http://localhost/testing/hotelSearch/HotelB/',title: 'Clarion',
			image: 'http://img.mmtcdn.com/hotels/200704231530388478/r/Pool_Side3.jpg',
			location : 'Chennai',
			des : 'Click on image to check Availability'
		},
	];

}