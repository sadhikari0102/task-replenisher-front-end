var app = angular.module("TasksApp", []); 

app.controller("TaskCtrl", TaskCtrl); 
//app.controller("CTaskCtrl", CTaskCtrl); 
app.controller("UserCtrl", UserCtrl); 
//app.controller("MainCtrl", MainCtrl); 

function TaskCtrl(TaskDataSvc) {
	this.loginSuccess = false; 
	this.username = ""; 
	this.password = ""; 

	var self = this; 
	this.submit = function() {
		console.log(this.username); 
		console.log(this.password);
		this.loginSuccess = true;
		//get request for authentication and task info
		//task list 
		TaskDataSvc.getTasks()
			.then(function(data) {
		self.tasks = data; 
		});
	}


	
}



//user controller
function UserCtrl() {
	this.name = ["Sanjay", "Adhikari", "Florida"]; 
}

