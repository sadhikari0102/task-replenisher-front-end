(function(){
	var app = angular.module("TasksApp");
	app.service("TaskDataSvc", function($http) {
		var self = this;


		self.getTasks = function (auth) {
			console.log(auth[0].username);
			console.log(auth[1].password);
			var promise1 = $http.get('http://18.216.252.106:8080/authorized/tasks', {
       headers: {
           withCredentials: true,
            headers:{ 'Authorization':  'Basic ' + btoa("business1:pass")}

       			}
   			});
			var promise2 = promise1.then(function(response) {
				return response.data;
			});
			return promise2;
		}

/*
		self.getTasks = function () {
			var promise1 = $http.get('http://localhost:3000/tasks');
			var promise2 = promise1.then(function(response) {
				return response.data;
			});
			return promise2;
		}*/


		self.saveTask = function(taskData) {
			$http.put('http://localhost:3000/tasks/' + taskData.id, taskData)
			.then(function(response) {
				console.log(response);
			});
		}

		self.addTask = function(taskData) {
			$http.post('http://localhost:3000/tasks', taskData)
			.then(function(response) {
				console.log(response);
			});
		}




	});

})();
