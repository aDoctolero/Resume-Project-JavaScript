/*var bio = {
	"name" : "Angelica Doctolero",
	"role" : "Web Developer",
	"contacts": {
		"email" : "gica.doctolero@gmail.com",
		"location" : "San Jose"
	},
	"welcomeMessage" : "Whutchu talkin bout Willis?",
	"skills" : ["sleeping", "eating", "being punny"],
	"bioPic" : "images/fry.jpg"
};

$("#header").prepend(bio);*/
var name = "Angelica";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);
console.log(formattedName);