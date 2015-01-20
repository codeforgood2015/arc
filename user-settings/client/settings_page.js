

if (!Roles.userIsInRole(Meteor.user(), ['admin'])) {
	Meteor.subscribe("userSettingsData");
	Template.userSettings.events({
		"click #saveButton": function(event) {
			var myZip = document.getElementById("inputZipCode").value;
			var myStory = document.getElementById("inputStory").value;
			var myName = document.getElementById("inputName").value;
			var myEmail = document.getElementById("inputEmail").value;
			var myOPassword = document.getElementById("inputOPassword").value;
			var myNPassword = document.getElementById("inputNPassword").value;
			
			console.log("submitted.");

			Meteor.call("modifyUser", myName, myZip, myStory, myEmail, myOPassword, myNPassword);
		},
		
		'click #user-home-button': function() {
    		Router.go('/profile');
  		},

  		"click #saveNameButton": function(event){
			document.getElementById("saveNameButton").visibility = "hidden";
			document.getElementById("editNameButton").visibility = "visible";
			document.getElementById("inputName").readOnly = true;

		},

		"click #editNameButton": function(event) {
			document.getElementById("saveNameButton").visibility = "visible";
			document.getElementById("editNameButton").visibility = "hidden";
			document.getElementById("inputName").readOnly = false;
		},

		"click #saveEmailButton" : function(event) {
			document.getElementById("saveEmailButton").visibility = "hidden";
			document.getElementById("editEmailButton").visibility = "visible";
			document.getElementById("inputEmail").readOnly = true;
		},

		"click #editEmailButton" : function(event){
			document.getElementById("saveEmailButton").visibility = "visible";
			document.getElementById("editEmailButton").visibility = "hidden";
			document.getElementById("inputEmail").readOnly = false;

		},

		"click #saveStoryButton" : function(event){
			document.getElementById("saveStoryButton").visibility = "hidden";
			document.getElementById("editStoryButton").visibility = "visible";
			document.getElementById("inputStory").readOnly = true;
		},

		"click #editStoryButton" : function(event){
			document.getElementById("saveStoryButton").visibility = "visible";
			document.getElementById("editStoryButton").visibility = "hidden";
			document.getElementById("inputStory").readOnly = false;

		},

		"click #saveZipCodeButton" : function(event){
			document.getElementById("saveZipCodeButton").visibility = "hidden";
			document.getElementById("editZipCodeButton").visibility = "visible";
			document.getElementById("inputZipcode").readOnly = true;
		},

		"click #editZipCodeButton" : function(event){
			document.getElementById("saveZipCodeButton").visibility = "visible";
			document.getElementById("editZipCodeButton").visibility = "hidden";
			document.getElementById("inputZipcode").readOnly = false;
		},

		"click #savePasswordButton" : function(event) {
			if (document.getElementById("inputNPassword").value === document.getElementById("confirmNPassword").value){
			document.getElementById("inputOPassword").readOnly = true;
			document.getElementById("inputNPassword").readOnly = true;
			document.getElementById("confirmNPassword").readOnly = true;
			}
			else{
				document.getElementById("alertMessage").visibility = "visible";
			}

		},
	});


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
} else {
	throw new Meteor.Error('403', 'permission denied');
}

