var app = angular.module("TasksApp", []);

app.controller("TaskCtrl", TaskCtrl);
app.controller("UserCtrl", UserCtrl);


function TaskCtrl(TaskDataSvc) {
	this.loginSuccess = false;
	this.username = "";
	this.password = "";

	var self = this;
	this.submit = function() {
		this.loginSuccess = true;
		//get request for authentication and task info
		//task list

		var auth = [ {
			"username" : this.username
		}, {
			"password" : this.password
		} ] ;

		TaskDataSvc.getTasks()
			.then(function(data) {
		self.tasks = data;
		});
	}

	//update status
	this.startTask = function(index) {
    this.tasks[index].startTime = new Date();
		this.tasks[index].endTime = "";
		this.tasks[index].status = "STARTED" ;
		var taskData = this.tasks[index] ;
		TaskDataSvc.saveTask(taskData); //put
	}

	this.endTask = function(index) {
    this.tasks[index].endTime = new Date() ;
		this.tasks[index].status = "FINISHED" ;
		var taskData = this.tasks[index] ;
		TaskDataSvc.saveTask(taskData);
	}

	//task creation
	this.selectedTask = {};

	this.editOn = false;
	//Create task
	this.turnOnEdit = function() {
		this.selectedTask = undefined ;
		this.selectedTask = {"createdBy" : {}} ;
		this.editOn = true ;
	}
	//post
	this.createTask = function() {
      this.selectedTask.startTime = "";
			this.selectedTask.endTime = "";
			this.selectedTask.status = "CREATED";
			//this.selectedTask.createdBy.name = this.username ;
			this.tasks.push(this.selectedTask);
			this.editOn = false ;
			var taskData = this.selectedTask ;
			console.log(taskData);
			console.log(this.selectedTask);
			TaskDataSvc.addTask(taskData);
	}

}



//user controller
function UserCtrl() {
	this.name = ["Sanjay", "Adhikari", "Florida"];
}
