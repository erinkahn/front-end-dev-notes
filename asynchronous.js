// asynchronous / async / asynchronously
    // actions that happen independently
    // functions can run in the background while the rest of the code continues to execute


// example: a printer
    //  When a printer sends out a low toner alert to the user, it continues to print. The printer does not stop everything to issue the alert and then resume.
    //  The part of the program that issues the alert is not dependent on the part that triggers printing.
    //  They can occur simultaneously because they function independently.


// how is it possible to run multiple functions at once?
    // callback functions
    // all tasks inside a function are sent off to a web app or database to gather info while the rest of the app continues to run
    // when info is gathered, it is sent back through the app and applied to the functions that rely on it -- callback


// why asynchronous?
    // it lets your app multitask / complete multiple actions at random
    // give you time to think through responses because an immediate response isn't require


// drawbacks?
    // adds complexity to the exchange of info
    // coding too many callback functions can be messy


// promises & async/await patterns
    // help improve code syntax & complexity of callback functions/asynchronous actions
    // but still add a layer of complexity to the code


// synchronous OR asynchronous?
    // if you want to run a simple app with sequential linear tasks like process data, then use synchronous programming
    // if you want to run a app that calls for responding to events like a GUI program, then use asynchronous programming
