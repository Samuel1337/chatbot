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
            title: "Apply Now",
            link: "https://collegeofsanmateo.edu/admissions/apply.php",
            parent: "home",
            children: ["applyNow"]
            
        },
        virtualFrontDesk: {
            sender: "bot",
            text: "Click here to view our virtual front desk:",
            title: "Virtual Front Desk",
            link: "https://collegeofsanmateo.edu/outreach/onlinehours.php",
            parent: "home",
            children: ["virtualFrontDesk"]
        },
        summerClasses: {
            sender: "bot",
            text: "Click here to view our summer classes:",
            title: "Summer Classes",
            link: "https://webschedule.smccd.edu/list_classes_default_search.php?term_code=202305&keywords=&college_code%5B%5D=4&open=success",
            parent: "home",
            children: ["summerClasses"]
        },
        studentServices: {
            sender: "bot",
            text: "Here are a few student services we provide. Feel free to explore or write directly what you need.",
            title: "Student Services",
            parent: "home",
            children: ["admissionsRecords", "careerServices", "dreamCenter"]
        },
        admissionsRecords: {
            sender: "bot",
            text: "Here's a link to Admissions & Records:",
            title: "Admissions & Records",
            link: "https://collegeofsanmateo.edu/admissions/",
            parent: "studentServices",
            children: ["admissionsRecords"]
        },
        careerServices: {
            sender: "bot",
            text: "Here's a link to our Career Services:",
            title: "Career Services",
            link: "https://collegeofsanmateo.edu/career/",
            parent: "studentServices",
            children: ["careerServices"]
        },
        dreamCenter: {
            sender: "bot",
            text: "Here's a link to our DREAM Center:",
            title: "DREAM Center",
            link: "https://collegeofsanmateo.edu/dreamcenter/",
            parent: "studentServices",
            children: ["dreamCenter"]
        }
    }
}

     