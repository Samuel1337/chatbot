# CSM Chatbot

Here's a live link to the project [CSM Chatbot](https://samuel1337.github.io/chatbot/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `npm run deploy`

Uploads the app to Github Pages.
It requires `npm install gh-pages --save-dev`.

Commiting to the Github repo won't update the live page.
This command must be executed every time you want to update the website. 


## Integration Instructions

### Database of potential responses

The Chatbot contains a list of potential responses at `options.js`.

Here's an example of a potential response:
```javascript
studentServices: {
            sender: "bot",
            text: "Here are a few student services we provide. Feel free to explore or write directly what you need.",
            title: "Student Services",
            parent: "home",
            children: ["admissionsRecords", "careerServices", "dreamCenter"]
        }
```

Here's the object template:
```javascript
nameOfTag: {
            sender: String,
            text: String,
            title: String,
            link: String,
            parent: String,
            children: Array[String]
        }
```

Notice that the template has a `link` key that isn't present in the example above. That's because the `link` key can only be placed in objects with a single item in the `Array[String]` of the `children` key (i.e. `["applyNow"]`). 

### Algorithm that reads user input

The algorithm that reads user input is still very primitive. It is contained within the `respond()` function within the `ChatContainer` component (`src/components/chatContainer/chatContainer.jsx`).

Initially it converts the user's input into a single string on lowercase with no spaces:
```javascript
respond() {
    // gets the last message sent by user
    let conversation = [...this.state.conversation];
    let lastMessage = conversation[conversation.length - 1].text;
    
    // converts it to lowercase with no spaces
    lastMessage = lastMessage.toLowerCase().split(' ').join('');
    let response;

    // ...
```

Then it hits a rudimentary system of if-else statements that matches the content of `options.js`:
```javascript
    // ...

    if (lastMessage.includes("applynow")) {
        response = this.options.applyNow;
    } else if (lastMessage.includes("virtualfrontdesk")) {
        response = this.options.virtualFrontDesk;
    } else if (lastMessage.includes("summerclasses")) {
        response = this.options.summerClasses;
    } else if (lastMessage.includes("studentservices")) {
        response = this.options.studentServices;
    } else if (lastMessage.includes("admissions&records")) {
        response = this.options.admissionsRecords;
    } else if (lastMessage.includes("careerservices")) {
        response = this.options.careerServices;
    } else if (lastMessage.includes("dreamcenter")) {
        response = this.options.dreamCenter;
    } else {
        
        // if no message was found with these words, it will send out a "sorry" message.
        //The content of the message will be picked from a list of random "sorry" lines
        response = {
            sender: "bot",
            text: this.randomText()
        }
    }
    
    // ...
```

A timestamp will be added to the message: 
```javascript
    // ...

    response['time'] = this.getCurrentTime();

    // ...
```  
Every message has a timestamp, and you can see it by hovering the cursor over each message on the chatbot.

A loading animation will be displayed while the chatbot computes the message. Currently this process takes 0.5 second, but in the future it can be adjusted to dynamically match the response time of each HTTP request if we choose to go in that direction:
```javascript
    window.setTimeout(() => {
        conversation.push({loading: true});
        this.setState({conversation: conversation});
        this.scrollSmoothlyToBottom();
    }, 500);

    // ...
```

Finally the loading animation is removed from the `conversation` array, which stores all the messages of the *current conversation* and the chatbot's response is added instead. The `ChatBox` component gets updated, thus displaying the newest message from the bot: 
```javascript
    // ...

    window.setTimeout(() => {
        conversation.pop()
        conversation.push(response);
        this.setState({conversation: conversation});
        this.scrollSmoothlyToBottom();
    }, 1500);
}
```

In case you're wondering, this is what `randomText()` looks like:
```javascript
randomText() {
    let sorryTexts = [
        "Sorry, I don't understand.",
        "I couldn't find what you're looking for.",
        "That seems to be unavailable right now.",
        "That's not available at the moment.",
        "I didn't quite get that.",
        "Speak more clearly, I'm not that smart.",
        "Come again?",
        "What do you mean?"
    ]
    return sorryTexts[Math.floor(Math.random() * 7)];
}
```

Now all that needs to be done is expanding the `options.js` database, enhancing the `respond()` function to react positively to a wider variety of user input, such as offering suggestions or understanding poorly written text, and testing the chatbot enough times to make sure it offers relevant help to whoever wants to use it!

Let me know if you have any questions, I'm always willing to help :)