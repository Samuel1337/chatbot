export default function Options() {

    return {
        home: {
            sender: "bot",
            text: "Hello there! How can I help you?",
            title: "Home",
            children: ["studentServices", "virtualFrontDesk", "summerClasses", "applyNow"]
        },
        applyNow: {
            sender: "bot",
            text: "Click here to apply now:",
            parent: "home",
            title: "Apply Now",
            link: "https://collegeofsanmateo.edu/admissions/apply.php",
            children: ["applyNow"]
            
        },
        virtualFrontDesk: {
            sender: "bot",
            text: "Click here to view our virtual front desk:",
            parent: "home",
            title: "Virtual Front Desk",
            link: "https://collegeofsanmateo.edu/outreach/onlinehours.php",
            children: ["virtualFrontDesk"]
        },
        summerClasses: {
            sender: "bot",
            text: "Click here to view our summer classes:",
            parent: "home",
            title: "Summer Classes",
            link: "https://webschedule.smccd.edu/list_classes_default_search.php?term_code=202305&keywords=&college_code%5B%5D=4&open=success",
            children: ["summerClasses"]
        },
        studentServices: {
            sender: "bot",
            text: "Here are a few student services we provide. Feel free to explore or write directly what you need.",
            parent: "home",
            title: "Student Services",
            children: ["admissionsRecords", "careerServices", "dreamCenter"]
        },
        admissionsRecords: {
            sender: "bot",
            text: "Here's a link to Admissions & Records:",
            parent: "studentServices",
            title: "Admissions & Records",
            link: "https://collegeofsanmateo.edu/admissions/",
            children: ["admissionsRecords"]
        },
        careerServices: {
            sender: "bot",
            text: "Here's a link to our Career Services:",
            parent: "studentServices",
            title: "Career Services",
            link: "https://collegeofsanmateo.edu/career/",
            children: ["careerServices"]
        },
        dreamCenter: {
            sender: "bot",
            text: "Here's a link to our DREAM Center:",
            parent: "studentServices",
            title: "DREAM Center",
            link: "https://collegeofsanmateo.edu/dreamcenter/",
            children: ["dreamCenter"]
        }
    }
}

     