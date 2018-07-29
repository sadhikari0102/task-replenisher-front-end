(function(){
	var app = angular.module("TasksApp");
	app.service("TaskDataSvc", function($http) {
		var self = this; 

		self.getTasks = function () {
			var promise1 = $http.get('http://localhost:3000/tasks');
			var promise2 = promise1.then(function(response) {
				return response.data; 
			}); 
			return promise2; 
		}

	}); 

})();
