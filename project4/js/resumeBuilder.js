//bio object
var bio = {
    "name": "Paras Tandon",
    "role": "web-developer",
    "contacts": {
        "mobile": "+919478821076",

        "email": "parastandon697@gmail.com",

        "github": "paras124",

        "twitter": "paras134",


        "location":"jalandhar",
    },
    "biopic": "images/paras.jpg",
    "welcomeMessage": "I CAN AND I WILL",
    "skills": ["Html", "Css", "Javascript", "Bootstrap", "C"]
};

//display bio
bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }
};


//work object
var work = {
    "jobs": [{
        "employer": "Chitkara University",
        "title": "Student",
        "dates": "2015 - 2019",
        "location": "Chitkara university, Punjab",
        "description": "I am doing  my Btech"
    }]
};
//display work
work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (var i = 0; i < work.jobs.length; i++) {
        $(".work-entry").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title));
        $(".work-entry").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
        $(".work-entry").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
        $(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));

    }
};
//project object
var projects = {
    "projects": [{
            "title": "cars website",
            "dates": "4/12/2016-16/12/2016",
            "description": "A simple website using HTML,CSS,Bootstrap",
            "images": ["images/cars.png"]
        },
        {
            "title": "clothes-website",
            "dates": "2/09/2016-5/10/2016",
            "description": "A clothes website using python",
            "images": ["images/hello.png"]
        },
        {
            "title": "hackerrank-website",
            "dates": "8/10/2016-12/10/2016",
            "description": "A website using python",
            "images": ["images/hackr.jpg"]
        },
        {
            "title": "Responsive-website",
            "dates": "2/5/2016-5/5/2016",
            "description": "Responsive web page using bootstrap",
            "images": ["images/resp.png"]
        }
    ]
};

//display project
projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (i = 0; i < projects.projects.length; i++) {
        $(".project-entry").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        $(".project-entry").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
        for (j = 0; j < projects.projects[i].images.length; j++) {
            $(".project-entry").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
        }
    }
};
//project education
var education = {
    "schools": [{
            "name": "emm aar international school",
            "location": "jalandhar,punjab,India",
            "degree": "High School",
            "majors": ["pcm"],
            "dates": "2015",
 

        },
        {
            "name": "Chitkara University",
            "location": "Rajpura,Punjab",
            "degree": "Btech",
            "majors": ["CSE"],
            "dates": "2015-2019"

        }
    ],
    "onlinecourses": [{
            "title": "Intro to programming Nanodegree",
            "school": "Udacity",
            "dates": "2016",
            "url": "https:www.udacity.com/course/intro-to-programming-nanodegree--nd000"
        },
        {
            "title": "Intro to HTML and Css",
            "school": "Udacity",
            "dates": "2016",
            "url": "https:www.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
            "title": "Intro to Git and Github",
            "school": "Udacity",
            "dates": "2016",
            "url": "https:www.udacity.com/course/how-to-use-git-and-github--ud775"
        }
    ]
};
//display education
education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {
        $(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree));
        $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        for (var j = 0; j < education.schools[i].majors.length; j++) {
            $(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]));
        }
        $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
    }

    $(".education-entry").append(HTMLonlineClasses);

    for (var k = 0; k < education.onlinecourses.length; k++) {
        $(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlinecourses[k].title) + HTMLonlineSchool.replace("%data%", education.onlinecourses[k].school));
        $(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlinecourses[k].dates));
        $(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlinecourses[k].url));
    }
};
//calling all the functions
bio.display();
education.display();
work.display();
projects.display();
//adding map to resume
$("#mapDiv").append(googleMap);
