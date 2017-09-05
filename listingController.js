angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */

    $scope.addListing = function(listing) {
        $scope.listings.push(listing);
        $scope.listing= null;
    };
    $scope.deleteListing = function(listingEntry) {
      $scope.listings.splice($scope.listings.indexOf(listingEntry),1);
    };
    $scope.showDetails = function(listing) {
      $scope.code='';
      $scope.name='';
      $scope.coordinates='';
      $scope.address='';

      index=$scope.listings.indexOf(listing);

      $scope.code=$scope.listings[index].code;
      $scope.name=$scope.listings[index].name;
      $scope.address=$scope.listings[index].address;
      $scope.coordinates=$scope.listings[index].coordinates.longitude + ', ' + $scope.listings[index].coordinates.latitude;
      

    };
  }
]);