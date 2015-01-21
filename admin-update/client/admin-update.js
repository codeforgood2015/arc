	Meteor.subscribe("adminUpdateIssues");
	Meteor.subscribe("adminUpdateActions");
	var selectedUserIssue = "none";

	var issue = null; 

	var legislatorRowArray = [];

	var toDoRowArray = []; 
	
	Template.adminUpdate.events({
		"click #logoutButton": function(event) {
			Meteor.logout();
		},
		"click #logoutButton": function(event) {
			Accounts.logout();
		},
		"click #addIssueButton": function(event) {
			var newIssue = document.getElementById("addIssueField").value;
			Meteor.call("addNewIssue", newIssue);
		},
		"click #deleteIssueButton": function(event) {
			var delIssue = $document.find(".active").value;
			Meteor.call("delIssue", delIssue);
		},
		"click .list-group-item": function(event){
			var previous = $(this).closest(".list-group").children(".active");
			previous.removeClass('active'); // previous list-item
			$(event.target).addClass('active'); // activated list-item

			issue = $(".active").text(); 
			console.log(issue); 
		}
	});


	
	Template.updateFormField.events({
		"click #saveLegislatorButton": function(event) {

			//
			console.log(Template.instance().find("#nameInput").value);
			var legName = Template.instance().find("#nameInput").value;
			console.log(Template.instance().find("#emailInput").value);
			var legEmail = Template.instance().find("#emailInput").value;
			console.log(Template.instance().find("#addressInput").value);
			var legAddress = Template.instance().find("#addressInput").value;
			
			var dropdown = document.getElementById("dropdownMenu1");

			//console.log(dropdown);
			//var issue = dropdown.options[dropdown.selectedIndex].text;

			//console.log("I have clicked the savelegislator button. submitted.");

			//var issue = $(".active").text; 

			console.log("got here");

			console.log(issue); 

			Meteor.call("addNewLegislator", legName, legEmail, legAddress, issue);
		},
		
		"click #saveTodoButton": function(event) {
			var name = Template.instance().find("#todoInput").value;
			var goal = Template.instance().find("#goalInput").value;
			var message = Template.instance().find("#messageInput").value;
			//var dropdown = Template.instance().find("#dropdownMenu1");
			//var issue = dropdown.options[dropdown.selectedIndex].text;
			var c = Template.instance().find("#checkInput");
			
			var important = false;
			if (c.checked) important = true;

			//var issue = $(".active").text;
			
			Meteor.call("addNewTodo", name, goal, message, issue, important);
		},
		"click #deleteTodoButton": function(event) {
			var name = Template.instance().find("#todoInput").value;
			Meteor.call("deleteTodo", name);
		},
		"click #deleteLegislatorButton": function(event) {
			//console.log(Template.instance);
			var name = Template.instance().find("#nameInput").value;

			var name = Template.instance().find("#nameInput").value;
			Meteor.call("deleteLegislator", name);
		},
	});

	Template.updateFormField.helpers({
	    getLegislatorInfo: function() {
	  	//return leg associated with the issue 
	  	console.log("getLegInfo accessed, the issue is: " + issue);
	  	console.log(legislators.find({issue: issue}).fetch()); 
	  	return legislators.find({issue: issue}); 
	    },

	    getToDoInfo: function() {
	  	//return todo associated with the issue 
	  	//var issueName = issue; 

	  	console.log("getToDoInfo accessed, the issue is: " + issue);

	  	var actionItemsForIssue = [];

		actionItemsData = actionItems.find({}).fetch();

		for (var i = 0; i < actionItemsData.length; i++) {
		  //console.log("entered if loop"); 
		  if (actionItemsData[i].issue === issue) {
			actionItemsForIssue.push(actionItemsData[i]); 
		  }
		}

		//need to map according to a new layout schema
		/*_.map(actionItemsForIssue, function(a) {
      		_.extend(a, {toDoID: a._id}); });

      	_.map(actionItemsForIssue, function(a) {
      		_.extend(a, {toDoCheckID: a.message}); });*/ 

      	return actionItemsForIssue; 
	    },



	}); 


	Template.adminUpdate.helpers({
	  getUserIssues: function() {
		//Meteor.call("getUserIssues");
		//var userIssues =  
		//console.log("function entered: " + userIssues); 
		console.log(issues.find({}).fetch());
		return issues.find({}); 
		//return ["first issue", "second issue", "third issue"]; 
	  }, 
	  returnIssueName: function() {
		return this.name;
	  },
	  returnSelectedIssue: function() {
		//return 
	  },
	  
	  

	  /*addToDo: function() {
	  		return toDoRow.instance();
	  },

	  addLegislator: function() {
	  		return legislatorRow.instance();
	  },*/

	  returnUserId: function() {
		return Meteor.user().username; 
	},


	});

	Template.adminUpdate.events({
		"click #admin-home-button": function(event) {
			Router.go("/admin"); 
		},

		"click #region-button": function(event) {
			Router.go("/region"); 
		}
	});


Template.addLegButton.events({
	"click #addToDoRow": function(event) {
		console.log("pushed"); 
		toDoRowArray.push(1); //arbitrary push function to add row.
		Router.go("/update"); //refresh the page or make it fully reactive.  
	},
});

Template.addToDo.events({

});


/*if (Roles.userIsInRole(Meteor.user(), ['admin'])) {


}
else {
    //$('body').html('<div class="error">You must be logged in to use this application!</div>');
    throw new Meteor.Error(403, 'Permission denied');
}*/
