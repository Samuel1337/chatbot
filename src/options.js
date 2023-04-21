export default function Options() {
    
    // constructor() {

    //     this.list = this.list.bind(this);

    return ({
            1: {
                id: 1,
                text: "Hello there! How can I help you?",
                tag: "home",
                children: ["apply-now", "virtual-front-desk", "summer-classes", "student-services"]
            },
            2: {
                id: 2,
                text: "Click here to apply now:",
                parent: "home",
                tag: "apply-now",
                title: "Apply Now",
                link: "https://collegeofsanmateo.edu/admissions/apply.php"
            },
            3: {
                id: 3,
                text: "Click here to view our virtual front desk:",
                parent: "home",
                tag: "virtual-front-desk",
                title: "Virtual Front Desk",
                link: "https://collegeofsanmateo.edu/outreach/onlinehours.php"
            },
            4: {
                id: 4,
                text: "Click here to view our summer classes:",
                parent: "home",
                tag: "summer-class",
                title: "Summer Classes",
                link: "https://webschedule.smccd.edu/list_classes_default_search.php?term_code=202305&keywords=&college_code%5B%5D=4&open=success"
            },
            5: {
                id: 5,
                text: "Here are a few student services we provide. You may also write directly what you need.",
                parent: "home",
                tag: "student-services",
                title: "Student Services",
                children: ["admissions-records", "career-services", "dream-center"]
            },
            6: {
                id: 6,
                text: "Here are a few student services we provide. You may also write directly what you need.",
                parent: "student-services",
                tag: "admissions-records",
                title: "Admissions & Records",
                link: "https://collegeofsanmateo.edu/admissions/"
            },
            7: {
                id: 7,
                text: "Here are a few student services we provide. You may also write directly what you need.",
                parent: "student-services",
                tag: "career-services",
                title: "Career Services",
                link: "https://collegeofsanmateo.edu/career/"
            },
            8: {
                id: 8,
                text: "Here are a few student services we provide. You may also write directly what you need.",
                parent: "student-services",
                tag: "dream-center",
                title: "DREAM Center",
                link: "https://collegeofsanmateo.edu/dreamcenter/"
            }
        })
    // }

    // list() {
    //     return this.options;
    // }
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
                    tag: "home",
                    parent: "",

                    options: [
                        {
                            title: "title",
                            link: "www.example.com",
                            child: "apply-now"
                        },
                        {
                            title: "title",
                            link: "",
                            child: "college-faq"
                        },
                        {
                            title: "title",
                            link: "",
                            child: "summer-classes"
                        }
                    ]

                }
            ]
        }
        
        */