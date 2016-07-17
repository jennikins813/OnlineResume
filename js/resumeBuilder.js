// var awesomeThoughts = "I am Jen and I am AWESOME!";

// .replace method:
// [string].replace([old], [new]);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// $("#main").append(funThoughts);

// var skills = ["awesomeness", "HTML", "CSS", "JS"];
// $("#main").append(skills.join(" "));

var bio = {
    "name" : "Jennifer Follero",
    "role" : "Be Awesome",
    "welcomeMessage" : "Cupcake ipsum dolor sit amet. Donut jelly powder bonbon. Halvah sesame snaps gingerbread sugar plum sweet muffin muffin pie chocolate. Muffin chocolate bar carrot cake cheesecake sugar plum.",
    "biopic" : "images/fry.jpg",
    "contacts" : {
        "mobile": 123,
        "email": "jennikins813@yahoo.com",
        "github": "jennikins813",
        "twitter": "@jennikins813",
        "location": "Los Angeles, CA"
    },
    "skills" : ["awesomeness", "HTML", "CSS", "JS"]
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
            "title": "Assistant Manager, Marketing and Sales",
            "location": "El Segundo, CA",
            "dates": "2004-2014",
            "description": "Cupcake ipsum dolor sit amet. Donut jelly powder bonbon."  
        }
    ]
}

// for (job in work.jobs) {
//     $("#workExperience").append(HTMLworkStart);     //Work Experience header now shows
//     var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
//     var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
//     $(".work-entry:last").append(formattedEmployer + formattedTitle);

//     var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
//     $(".work-entry:last").append(formattedWorkDates);
//     var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
//     $(".work-entry:last").append(formattedWorkLocation);
//     $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
// };

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);     //Work Experience header now shows
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);

        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedWorkDates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    };
};
displayWork();      //invoking the function displayWork

// $(document).click(function(loc) {
//     var x = loc.pageX;
//     var y = loc.pageY;
//     logClicks(x,y);
// });


var education = {
    "schools": [
        {
            "name": "Bitmaker Labs",
            "location": "Toronto, Canada",
            "major": "RoR",
            "dates": "March-May 2014"
        },
        {
            "name": "AdeNU",
            "location": "Philippines",
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

var projects = {
    "projects": [
    	{
            "title": "Portfolio",
            "dates": "July 2016",
            "description": " ",
            "images": " "
        },
        {
            "title": "Animal Trading Card",
            "dates": "June 2016",
            "description": " ",
            "images": " "
        },
        {
            "title": "Web Store Hackathon",
            "dates": "May 2016",
            "description": " ",
            "images": " "
        },
        {
            "title": "Quote Generator",
            "dates": "May 2016",
            "description": " ",
            "images": " "
        }
    ]
}
// Encapsulating Functions
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
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







