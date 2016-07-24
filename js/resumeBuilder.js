// var awesomeThoughts = "I am Jen and I am AWESOME!";

// .replace method:
// [string].replace([old], [new]);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// $("#main").append(funThoughts);

// var skills = ["awesomeness", "HTML", "CSS", "JS"];
// $("#main").append(skills.join(" "));

var bio = {
    "name" : "Jennifer Follero",
    "role" : "Become an Awesome FEND Web Developer",
    "welcomeMessage" : "Cupcake ipsum dolor sit amet. Donut jelly powder bonbon. Halvah sesame snaps gingerbread sugar plum sweet muffin muffin pie chocolate. Muffin chocolate bar carrot cake cheesecake sugar plum.",
    "biopic" : "images/jenfollero1.png",
    "contacts" : {
        "mobile": "323-123-4567",
        "email": "jennikins813@yahoo.com",
        "github": "jennikins813",
        "twitter": "@jennikins813",
        "location": "Los Angeles, CA"
    },
    "skills" : ["awesomeness", "JavaScript", "HTML", "CSS"]
}
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName, formattedRole);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").prepend(formattedBioPic);
// $("#header").append(HTMLcontactGeneric);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

/////////////////////

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkills);

    formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkills);

    formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkills);

    formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkills);
}

var work = {
    "jobs": [
        {
            "employer": "Cost Plus World Market",
            "title": "Sales Associate",
            "location": "Los Angeles, CA",
            "dates": "October 2015-present",
            "description": "Cupcake ipsum dolor sit amet. Donut jelly powder bonbon."
        },
        {
            "employer": "Japan Airlines",
            "title": "Assistant Manager, Passenger Marketing and Sales",
            "location": "El Segundo, CA",
            "dates": "2004-2014",
            "description": "Cupcake ipsum dolor sit amet. Donut jelly powder bonbon."  
        }
    ]
}

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);     //Work Experience header now shows
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);

        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedWorkDates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
    };
};
work.display();      //invoking the function displayWork

var education = {
    "schools": [
        {
            "name": "Bitmaker Labs",
            "location": "Toronto, Canada",
            "degree": "Full-Stack",
            "major": "RoR",
            "dates": "March-May 2014"
        },
        {
            "name": "AdeNU",
            "location": "Philippines",
            "degree": "BS",
            "major": "Psychology",
            "dates": "1995-1999"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "June-September 2016",
            "url": "https://www.udacity.com"
        },
        {
            "title": "Front-End Web Development Basics",
            "school": "Hack Reactor Remote Prep",
            "dates": "March-April 2016",
            "url": "http://www.hackreactor.com"
        }
    ]
}

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);     //Work Experience header now shows
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
        var educationSchools = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;
        $(".education-entry:last").append(educationSchools);
    };
    $(".education-entry:last").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        var educationOnline = formattedTitle + formattedSchool + formattedDates + formattedURL;
        $(".education-entry:last").append(educationOnline);
    };
};

education.display();      //invoking the function displayWork

var projects = {
    "projects": [
    	{
            "title": "Portfolio",
            "dates": "July 2016",
            "description": "Online portfolio to showcase projects built",
            "images": "images/portfolio.png"   
        },
        {
            "title": "Animal Trading Card",
            "dates": "June 2016",
            "description": "Udacity project to create an animal trading card using HTML and CSS",
            "images": "images/animaltradingcard.png"
        },
        {
            "title": "Web Store Hackathon",
            "dates": "May 2016",
            "description": "Project for Hack Reactor Remote Prep Class. Still a work in progress",
            "images": " "
        },
        {
            "title": "Quote Generator",
            "dates": "May 2016",
            "description": "Class project for Hack Reactor Remote Prep Class",
            "images": " "
        }
    ]
}
// Encapsulating Functions
projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
        $(".project-entry:last").append(formattedImage);
	}
}
projects.display();

//// TO ADD GOOGLE MAP ///////
$("#mapDiv").append(googleMap);


// $("#main").append(internationalizeButton);

// function inName(name) {
// 	name = bio.name.split(" ");
// 	lastName = name[1].toUpperCase();
// 	firstName = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

// 	return firstName + " " + lastName;
// }







