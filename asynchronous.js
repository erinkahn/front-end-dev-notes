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
    // make sure you have a try and catch statement for error handling for debugging
    // Promise.all() is great for doing multiple tasks concurrently. It fails fast and wont wait for the rest of the tasks to complete once any of them has rejected


// synchronous OR asynchronous?
    // if you want to run a simple app with sequential linear tasks like process data, then use synchronous programming
    // if you want to run a app that calls for responding to events like a GUI program, then use asynchronous programming


const useAsync = async () => {
    let resolvedVal = await myPromise(); // await pauses the execution of async function until the promise is resolved then returns the promise
    console.log(resolvedVal);
}

useAsync();


// Example 1:

    // 1.promise function
    const brainstormDinner = () => {
      return new Promise((resolve, reject) => {
      console.log(`I have to decide what's for dinner...`)
      setTimeout(() => {
        console.log('Should I make salad...?');
        setTimeout(() => {
          console.log('Should I make ramen...?');
          setTimeout(() => {
            console.log('Should I make eggs...?');
            setTimeout(() => {
              console.log('Should I make chicken...?');
              resolve('beans');
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    });
    };

    // 2a. DONT USE THIS: native promise version:
    function nativePromiseDinner() {
      brainstormDinner().then((meal) => {
          console.log(`I'm going to make ${meal} for dinner.`);
      });
    }

    // 2b. USE THIS: async/await version:
    async function announceDinner() {
      try {
          let dinnerChoice = await nativePromiseDinner();
          console.log(dinnerChoice)
      } catch (err) {
          console.log(err)
      }
    }

    // 3. call the function
    announceDinner()

    // returns the following:
        //     I have to decide what's for dinner...
        //     undefined
        //     Should I make salad...?
        //     Should I make ramen...?
        //     Should I make eggs...?
        //     Should I make chicken...?
        //     I'm going to make beans for dinner.



// Example 2:

    // return a promise that resolves a string after 1 second of delay
    let myPromise = () => {
        return new Promise((resolve, reject) => {
            setTimeout = () => {
                resolve('I resolved');
            }, 1000);
        })
    }
    
    // write 2 async functions that invoke myPromise();
    let asyncFunction = async () => {
        let resolvedVal = await myPromise();
        console.log(resolvedVal)
    }
    // or
    async function asyncFunction() {
        try {
            let resolvedVal = await myPromise();
             console.log(resolvedVal)
        } catch (err) {
            console.log(err)
        }
    }

    // call it
    asyncFunction();
    
    // note: if you leave out the await, then the function is NOT paused and it will log out the value BEFORE the promise is resolved
    // especially if you have a timeout, it may return your value before the timeout has finished and you could get an undefined value or see something like [object Promise]
    


// Example 3: (use this if you need consecurive promises to return / wait to execute until the previous promise resolves...otherwise use Promise.All() like in example 4)

    // You can handle independent promises all at once/simultaneously (concurrency)
    // instead of using await before each promise below, since we aren't waiting for one to return before the other, they can just execute concurrently
    // so just use Promise.all() like in example 4

    async function serveDinner() {
     const vegetablePromise = steamBroccoli();
     const starchPromise = cookRice();
     const proteinPromise = bakeChicken();
     const sidePromise = cookBeans();
     console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
    }

    serveDinner();

    
    
// Example 4: Promise.all()

    // Promise.all() has the benefit of failing fast, meaning it won’t wait for the rest of the asynchronous actions to complete once any one has rejected. 
    // As soon as the first promise in the array rejects, the promise returned from Promise.all() will reject with that reason. 
    // As it was when working with native promises, Promise.all() is a good choice if multiple asynchronous tasks are all required, but none must wait for any other before executing.

    async function asyncPromAll() {
      const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
      for (let i = 0; i<resultArray.length; i++){
        console.log(resultArray[i]); 
      }
    }
    



