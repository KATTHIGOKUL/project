<script>
var app = angular.module("myapp", []);
	app.controller("ListController", ['$scope', function($scope) {
	
	    $scope.personalDetails = [
	        {
	            'fname':'Muhammed',
	            'lname':'Shanid',
	            'email':'shanid@yahoo.com'
				'phone':'1234567894'
				'city' :'hyderabad'
				'state':'ap'
	        },
	        {
	            'fname':'John',
	            'lname':'Abraham',
	            'email':'john@gmail.com'
				'phone':'9876543210'
				'city' :'secunderabad'
				'state':'ap'
	        },
	        {
	            'fname':'Roy',
	            'lname':'Mathew',
	            'email':'roy@ymail.com'
				'phone':'7412589631'
				'city' :'miyapur'
				'state':'ap'
	        }];
	    
	        $scope.addNew = function(personalDetails){
	            $scope.personalDetails.push({ 
	                'fname': personalDetails.fname, 
	                'lname': personalDetails.lname,
	                'email': personalDetails.email,
					'phone': personalDetails.phone,
					'city':  personalDetails.city,
					'state': personalDetails.state
	            });
	            $scope.PD = {};
	        };
	    
	        $scope.remove = function(){
	            var newDataList=[];
	            $scope.selectedAll = false;
	            angular.forEach($scope.personalDetails, function(selected){
	                if(!selected.selected){
	                    newDataList.push(selected);
	                }
	            }); 
	            $scope.personalDetails = newDataList;
	        };
	    
	        $scope.checkAll = function () {
	            if (!$scope.selectedAll) {
	                $scope.selectedAll = true;
	            } else {
	                $scope.selectedAll = false;
	            }
	            angular.forEach($scope.personalDetails, function (personalDetails) {
	                personalDetails.selected = $scope.selectedAll;
	            });
	        };    
	}]);
	
	</script>
	