// $("#main").append("Jen Follero");

// var firstname = "Jen";
// var age = 38;
// console.log(age);

// var awesomeThoughts = "I am Jen and I am AWESOME!";
// console.log(awesomeThoughts);

// .replace method:
// [string].replace([old], [new]);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// console.log(funThoughts);

// $("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Jennifer Follero");

var formattedRole = HTMLheaderRole.replace("%data%", "Be Awesome");

$("#header").prepend(formattedName, formattedRole);