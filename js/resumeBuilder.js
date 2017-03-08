//Bio object and display function:
	var bio = {
		"name" : "Angelica Doctolero",
		"role" : "Web Developer",
		"contacts": {
			"email" : "gica.doctolero@gmail.com",
			"location" : "San Jose"
		},
		"welcomeMessage" : "Hello",
		"skills" : ["sleeping", "eating", "being punny"],
		"bioPic" : "images/fry.jpg"
	};
	
	//Adds name, role, contact info, location, message, and picture to page.
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	//$("#header").prepend(formattedName);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formmatedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedName, formattedRole, formattedEmail, formattedLocation, formattedMessage, formmatedBioPic);
	
	//Adds bio skills to page.
	if (bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	}


//Work function display and object:
function displayWork(){

	var work = {
		"jobs": [
		{
			"employer": "Employer Name",
			"title": "Title of Job",
			"location": "Location of Work",
			"description": "Somebody once told me the world is gonna roll me.I aint the sharpest tool in the shed She was looking kind of dumb with her finger and her thumb In the shape of an L on her forehead.Well, the years start coming and they dont stop coming.Fed to the rules and I hit the ground running.Didnt make sense not to live for fun.Your brain gets smart but your head gets dumb. So much to do, so much to see. So whats wrong with taking the back streets? Youll never know if you dont go. Youll never shine if you dont glow. [Chorus:]"
		}
		]
	}
/*
Hey, now, youre an All Star, get your game on, go play
Hey, now, youre a Rock Star, get the show on, get paid
And all that glitters is gold
Only shooting stars break the mold

Its a cool place and they say it gets colder
Youre bundled up now wait til you get older
But the meteor men beg to differ
Judging by the hole in the satellite picture

The ice we skate is getting pretty thin
The waters getting warm so you might as well swim
My worlds on fire. How about yours?
Thats the way I like it and Ill never get bored.Somebody once asked could I spare some change for gas
I need to get myself away from this place
I said yep, what a concept.I could use a little fuel myself. And we could all use a little change.Well, the years start coming and they dont stop coming.Fed to the rules and I hit the ground running.Didnt make sense not to live for fun.Your brain gets smart but your head gets dumb.So much to do so much to see.So whats wrong with taking the back streets.Youll never know if you dont go.Youll never shine if you dont glow.[Chorus]And all that glitters is gold.Only shooting stars break the mold
*/

	work.jobs.forEach(function(job){
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
		//var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
		var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
		$("#workExperience").append(formattedWorkEmployer, formattedWorkTitle, formattedWorkLocation, formattedWorkDescription);
		$(".work-entry:last").append(formattedEmployerTitle); 
	});

}
displayWork(); //Invoke displayWork function

/*
	for (job in jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
*/

//$("#body").append(bio);
//console.log(bio);

/*var work = {};
work.position = "none";
work.employer = "none"; 
work.years = "none";

var education = {};
education["name"] = "School";
education["years"] = "Years"; 
education["city"] = "City";
$("#main").append(work["position"]);
$("#main").append(education.name);*/

//Education function display and object: 
function displayEducation(){ 

	var education = {  
		"schools": [ 
		{
			"name": "De Anza",
			"location": "Cupertino",
			"degree": "Degree Name",
			"majors": ["Major Name", "Major 2"],
			"dates": 2015
		}
		]
	}

	education.schools.forEach(function(school){
		console.log(school.name);
		var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
		var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", school.majors);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
		$("#education").append(formattedSchoolName, formattedSchoolLocation, formattedSchoolDegree, formattedSchoolMajors, formattedSchoolDates);

		if (school.majors.length > 0){
			$("#education").append(HTMLschoolStart);
			var formattedSkill = HTMLskills.replace("%data%", school.majors[0]);
			$("#majors").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", school.majors[1]);
			$("#majors").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			$("#majors").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		}
	});
}
displayEducation(); //Invoke displayEducation function

//Projects display function and object:
function displayProjects(){
 
	var projects = {
		"projects": [
		{
			"title": "JavaScript Basics",
			"dates": "December 2016 - January 2017",
			"description": "JavaScript Resume Project"
		},

		{
			"title": "HTML and CSS",
			"dates": "December 2016 - January 2017",
			"description": "HTML and CSS: Portfolio Project"
		}
		]
	}

	projects.projects.forEach(function(project){
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates)
		$("#projects").append(formattedProjectTitle, formattedProjectDescription, formattedProjectDates);
	});

}
displayProjects(); //invoke displayProjects function


//add internationalize button to page
$("#main").append(internationalizeButton);

//add a map
$("#mapDiv").append(googleMap);

//internationalize name function
function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}