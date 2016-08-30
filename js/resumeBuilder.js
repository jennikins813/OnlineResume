var bio = {
    "name" : "Jennifer Follero",
    "role" : "Awesome FEND Web Developer",
    "welcomeMessage" : "I'm an aspiring Front-End Web Developer looking for awesome opportunities.",
    "biopic" : "images/jenfollero1.png",
    "contacts" : {
        "mobile": "323-123-4567",
        "email": "jennikins813@yahoo.com",
        "github": "jennikins813",
        "twitter": "@jennikins813",
        "linkedin": "https://www.linkedin.com/in/jenniferfollero",
        "location": "Los Angeles, CA"
    },
    "skills" : ["awesomeness", "JavaScript", "HTML", "CSS"]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName, formattedRole);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedBioPic);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);

    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills:last").append(formattedSkills);
    }
};
bio.display();

var work = {
    "jobs": [
        {
            "employer": "Cost Plus World Market",
            "title": "Sales Associate",
            "location": "Los Angeles, CA",
            "dates": "October 2015-present",
            "description": "Cupcake ipsum dolor sit amet. Donut jelly powder bonbon.",
            "url": "http://www.worldmarket.com/"
        },
        {
            "employer": "Japan Airlines",
            "title": "Assistant Manager, Passenger Marketing and Sales",
            "location": "El Segundo, CA",
            "dates": "2004-2014",
            "description": "Cupcake ipsum dolor sit amet. Donut jelly powder bonbon.",
            "url": "http://www.ar.jal.com/arl/en/"
        }
    ]
};

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedEmployerLink = formattedEmployer.replace("#", work.jobs[i].url);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry:last").append(formattedEmployerLink + formattedTitle);

        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedWorkDates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
    }
};
work.display();

var education = {
    "schools": [
        {
            "name": "JAL",
            "location": "El Segundo, CA",
            "degree": "BS",
            "majors": "Marketing",
            "dates": "2007-2014",
            "url": "#"
        },
        {
            "name": "AdeNU",
            "location": "Philippines",
            "degree": "BS",
            "majors": "Psychology",
            "dates": "1995-1999",
            "url": "http://www.adnu.edu.ph/"
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
};

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedNameLink = formattedName.replace("#", education.schools[i].url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        var educationSchools = formattedNameLink + formattedDegree + formattedDates + formattedLocation + formattedMajor;
        $(".education-entry:last").append(educationSchools);
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedTitleLink = formattedTitle.replace("#", education.onlineCourses[i].url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        var formattedURLLink = formattedURL.replace("#", education.onlineCourses[i].url);
        var educationOnline = formattedTitleLink + formattedSchool + formattedDates + formattedURLLink;
        $(".education-entry:last").append(educationOnline);
    }
};
education.display();

var projects = {
    "projects": [
    	{
            "title": "Portfolio",
            "dates": "July 2016",
            "description": "Online portfolio to showcase projects built",
            "images": ["images/portfolio.png"],
            "url": "https://github.com/jennikins813/myportfolio"  
        },
        {
            "title": "Frogger Arcade Game",
            "dates": "July 2016",
            "description": "Udacity project to recreate the classic arcade game, using Object Oriented JavaScript",
            "images": ["images/frogger.jpg"],
            "url": "https://github.com/jennikins813/ArcadeGame"
        },
        {
            "title": "Animal Trading Card",
            "dates": "June 2016",
            "description": "Udacity project to create an animal trading card using HTML and CSS",
            "images": ["images/animaltradingcard.png"],
            "url": "https://github.com/jennikins813/AnimalTradingCard"
        },
        {
            "title": "Quote Generator",
            "dates": "in progress",
            "description": "Class project for Hack Reactor Remote Prep Class",
            "images": ["images/hang_on_building_top.jpg"],
            "url": "https://github.com/jennikins813/QuoteGenerator"
        },
        {
            "title": "Web Store Hackathon",
            "dates": "in progress",
            "description": "Project for Hack Reactor Remote Prep Class. Still a work in progress",
            "images": [" "]
        }
    ]
};

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedTitleLink = formattedTitle.replace("#", projects.projects[i].url);
        $(".project-entry:last").append(formattedTitleLink);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
        $(".project-entry:last").append(formattedImage);
	}
};
projects.display();

$("#mapDiv").append(googleMap);

var footerContacts = {
    "social": {
        "github": "https://github.com/jennikins813",
        "twitter": "https://twitter.com/jennikins813",
        "linkedin": "https://www.linkedin.com/in/jenniferfollero"
    }
};

$("#footerContacts").append(HTMLfooterGithub.replace("#", footerContacts.social.github));
$("#footerContacts").append(HTMLfooterTwitter.replace("#", footerContacts.social.twitter));
$("#footerContacts").append(HTMLfooterLinkedin.replace("#", footerContacts.social.linkedin));

// $("#main").append(internationalizeButton);

// function inName(name) {
// 	name = bio.name.split(" ");
// 	lastName = name[1].toUpperCase();
// 	firstName = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

// 	return firstName + " " + lastName;
// }
