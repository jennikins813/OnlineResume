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

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);

$("#main").append(bio.contacts.twitter);
$("#main").append(bio.welcomeMessage);

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
            "title": "Quote Generator",
            "dates": "May 2016",
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
            "title": "Trading Cards",
            "dates": "June 2016",
            "description": " ",
            "images": " "
        },
        {
            "title": "Portfolio",
            "dates": "July 2016",
            "description": " ",
            "images": " "
        }

    ]
}

































