export default function Options() {
    
    return {
        home: {
            text: "Hello there! How can I help you?",
            children: ["applyNow", "virtualFrontDesk", "summerClasses", "studentServices"]
        },
        applyNow: {
            text: "Click here to apply now:",
            parent: "home",
            title: "Apply Now",
            link: "https://collegeofsanmateo.edu/admissions/apply.php"
        },
        virtualFrontDesk: {
            text: "Click here to view our virtual front desk:",
            parent: "home",
            title: "Virtual Front Desk",
            link: "https://collegeofsanmateo.edu/outreach/onlinehours.php"
        },
        summerClasses: {
            text: "Click here to view our summer classes:",
            parent: "home",
            title: "Summer Classes",
            link: "https://webschedule.smccd.edu/list_classes_default_search.php?term_code=202305&keywords=&college_code%5B%5D=4&open=success"
        },
        studentServices: {
            text: "Here are a few student services we provide. You may also write directly what you need.",
            parent: "home",
            title: "Student Services",
            children: ["admissions-records", "career-services", "dream-center"]
        },
        admissionsRecords: {
            text: "Here's a link to the Admissions & Records:",
            parent: "studentServices",
            title: "Admissions & Records",
            link: "https://collegeofsanmateo.edu/admissions/"
        },
        careerServices: {
            text: "Here's a link to our Career Services:",
            parent: "studentServices",
            title: "Career Services",
            link: "https://collegeofsanmateo.edu/career/"
        },
        dreamCenter: {
            text: "Here's a link to our DREAM Center:",
            parent: "studentServices",
            title: "DREAM Center",
            link: "https://collegeofsanmateo.edu/dreamcenter/"
        }
    }
}

        /*
        
        INTEGRATION INSTRUCTIONS:

        state = {
            open: true || false <-- opens and closes the chat
            
            conversation: [
                {
                    sender: "user",
                    text: "User's message",         <-- example of user message object
                    time: "timestamp (HH:MM)"
                },
                
                {
                    sender: "bot",
                    text: "Bot's message",          <-- example of bot message object
                    time: "timestamp (HH:MM)",
                    parent: "",

                    options: [
                        {
                            title: "title",
                            link: "www.example.com",
                            child: "applyNow"
                        },
                        {
                            title: "title",
                            link: "",
                            child: "college-faq"
                        },
                        {
                            title: "title",
                            link: "",
                            child: "summerClasses"
                        }
                    ]

                }
            ]
        }
        
        */