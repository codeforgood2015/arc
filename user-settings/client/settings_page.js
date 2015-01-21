Meteor.subscribe("userSettingsData");
	Template.userSettings.events({
		"click #logoutButton": function(event) {
			Meteor.logout();
		},
		'click #user-home-button': function() {
    		Router.go('/profile');
  		},

  		"click #saveNameButton": function(event){
			document.getElementById("saveNameButton").style.visibility = "hidden";
			document.getElementById("editNameButton").style.visibility = "visible";

			document.getElementById("inputName").readOnly = true;

			console.log("saveNameButton pressed");
			
			var myName = document.getElementById("inputName").value;
			Meteor.call("modifyUserName", myName);
		},

		"click #editNameButton": function(event) {
			document.getElementById("saveNameButton").style.visibility = "visible";
			document.getElementById("editNameButton").style.visibility = "hidden";
			document.getElementById("inputName").readOnly = false;
		},

		"click #saveEmailButton" : function(event) {
			document.getElementById("saveEmailButton").style.visibility = "hidden";
			document.getElementById("editEmailButton").style.visibility = "visible";
			document.getElementById("inputEmail").readOnly = true;
			
			var myEmail = document.getElementById("inputEmail").value;
			Meteor.call("modifyUserEmail", myEmail);
		},

		"click #editEmailButton" : function(event){
			document.getElementById("saveEmailButton").style.visibility = "visible";
			document.getElementById("editEmailButton").style.visibility = "hidden";
			document.getElementById("inputEmail").readOnly = false;

		},

		"click #saveStoryButton" : function(event){
			document.getElementById("saveStoryButton").style.visibility = "hidden";
			document.getElementById("editStoryButton").style.visibility = "visible";
			document.getElementById("inputStory").readOnly = true;
			
			var myStory = document.getElementById("inputStory").value;
			Meteor.call("modifyUserStory", myStory);
		},

		"click #editStoryButton" : function(event){
			document.getElementById("saveStoryButton").style.visibility = "visible";
			document.getElementById("editStoryButton").style.visibility = "hidden";
			document.getElementById("inputStory").readOnly = false;

		},

		"click #saveZipCodeButton" : function(event){
			document.getElementById("saveZipCodeButton").style.visibility = "hidden";
			document.getElementById("editZipCodeButton").style.visibility = "visible";
			document.getElementById("inputZipcode").readOnly = true;
			
			var myZip = document.getElementById("inputZipcode").value;
			console.log(myZip);
			Meteor.call("modifyUserZip", myZip);
		},

		"click #editZipCodeButton" : function(event){
			document.getElementById("saveZipCodeButton").style.visibility = "visible";
			document.getElementById("editZipCodeButton").style.visibility = "hidden";
			document.getElementById("inputZipcode").readOnly = false;
		},

		"click #savePasswordButton" : function(event) {
			if (document.getElementById("inputNPassword").value === document.getElementById("confirmNPassword").value){
				document.getElementById("inputOPassword").readOnly = true;
				document.getElementById("inputNPassword").readOnly = true;
				document.getElementById("confirmNPassword").readOnly = true;
				document.getElementById("alertMessage").style.visibility = "hidden";
				
				var myOPassword = document.getElementById("inputOPassword").value;
				var myNPassword = document.getElementById("inputNPassword").value;

				Accounts.changePassword(myOPassword, myNPassword, function(error) {
		  			if (error) {
			  			console.log(error);
			  			console.log("Failed to change password.");
						//Tell user that they entered their old password incorrectly?
		  			} else {
						console.log("Successfully changed password.");
		  			}
	  			});
				//Meteor.call("modifyUserPassword", myOPassword, myNPassword);
			}
			else{
				document.getElementById("alertMessage").style.visibility = "visible";
			}

		},
	});

Template.userSettings.helpers({

	returnUserId: function() {
		return Meteor.user().username; 
	},
});

/*if (!Roles.userIsInRole(Meteor.user(), ['admin'])) {



	/*
	if (Meteor.IsClient){
		Template.body.event({
			"submit .name-enter": function(event) {

			var text = event.target.text.value;

			Tasks.insert({
				text: text,
				
			});

			//Clears the form
			event.target.text.value = "";
		
			//prevent default form submit
			return false;
			}
		});

		Template.body.event({
			"submit .username-enter": function(event) {

			var text = event.target.text.value;

			Tasks.insert({
				text: text,
				
			});

			//Clears the form
			event.target.text.value = "";
		
			//prevent default form submit
			return false;
			}
		});

		Template.body.event({
			"submit .email-enter": function(event) {

			var text = event.target.text.value;

			Tasks.insert({
				text: text,
				
			});

			//Clears the form
			event.target.text.value = "";
		
			//prevent default form submit
			return false;
			}
		});

		Template.body.event({
			"submit .zipcode-enter": function(event) {

			var text = event.target.text.value;

			Tasks.insert({
				text: text,
				
			});

			//Clears the form
			event.target.text.value = "";
		
			//prevent default form submit
			return false;
			}
		});


		Template.body.event({
			"submit .story-enter": function(event) {

			var text = event.target.text.value;

			Tasks.insert({
				text: text,
				
			});

			//Clears the form
			event.target.text.value = "";
		
			//prevent default form submit
			return false;
			}
		});
	}
	*/

