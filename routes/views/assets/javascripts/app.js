/*var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {

    $scope.name = "Kevin Isaza";
    $scope.portfolio = "My Portfolio";

}]);
*/
function initMap() {

var myLatLng = {lat: 40.694229, lng: -73.986639};


var map = new google.maps.Map(document.getElementById('map'), {
zoom: 13,
center: myLatLng,
scrollwheel:  false,
disableDefaultUI:true,
disableDoubleClickZoom: true,
draggable: false,


});

var marker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  title: 'My Home!!'

});


}
