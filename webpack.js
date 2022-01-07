// webpack
    // node package
    // compiles our code files to improve performance and get rid of unused code


// setup instructions:
   // 1. create package.json file
    npm init 
    
   // 2. install webpack and webpack CLI
    npm install --save-dev webpack webpack-cli

   // 3. make an entry point where the main bundle file will be
      // the default entry point is index.js in a src folder, but can be changed inside the webpack.config.js file (see below)
      // if there's no folder already, create a src folder and inside create a index.js file that is empty
      // after changes are made and files are saved, the files inside src will now compile to a dist folder dist/main.js
  
   // 4. add scripts to package.json to watch webpack to look for updates to our files and rebuild if changes occur
      scripts": {
        "build": "webpack --watch",
      },
   
   // 5. run the build command to start:
       npm run build
            // this will create a dist folder of your compiled file (main.js)
    

// to set settings or configuration 
       // create a new file called webpack.config.js, then set the mode to dev
       module.exports = {
          mode: 'development' //(switch to 'production' when you finish development so it compiles)
       }
       // if you check the compiled file dist/main.js, you'll see notes explaining what's happening. 
       // they will be removed when the mode is set to 'production'
        

// to change the entry point & exit point   
       // note: if you change the entry point but don't change the exit point, it will always compile to an exit point of dist/main.js
       // go to webpack.config.js
        const path = require('path');

        module.exports = {
            entry: './application/home.js',
            output: {
                filename: 'fast.js',
                path: path.resolve(__dirname, 'built'),
            },
            // ...
        }
      // run the build command 
        npm run build
            // now you can see this creates an outpoint folder called built and inside that a file called fast.js
    
        
      // another example:
          // you have a folder called 'uncooked' and a file inside called 'ingredients.js' - which is your entry point
          // you want to change the output exit point to ./steamy/soup.js
        const path = require('path');

        module.exports = {
            mode: 'development',
            entry: './uncooked/ingredients.js',
            output: {
                filename: 'soup.js',
                path: path.resolve(__dirname, 'steamy'),
            },
        }


// webpack-dev-server
    // lets you preview your code and update it as you make changes
    // to use it, install the tool:
        npm install --save-dev webpack-dev-server
   
    // create a script link to your exit point inside the HTML file
        script -> // <script src="./dist/main.js"></script>

    // then in package.json, add a start command inside the scripts 
        "build": "webpack --watch",
        "start": "webpack serve"
    
    // the build command compiles as it updates changes
    // the serve command serves the build and refreshes when changes are made

    // then run the build command
        npm run build  // (bundle)
        
    // open a new terminal tab and run the start command 
        npm run start  // (serve)
        
        
// webpack rules
   // tells webpack what to do with different file types like a .txt file for example
   // inside webpack.config.js, you enter an array of rules
        module.exports = 
        {
            module: 
            {
                rules: []
            }
        }
        
   // a rule has a 'test' option defined as a regular expression 
   // a rule also has a 'type' option telling webpack what to do with the files that match the test
   // if a file matches that regular expression, then webpack will use the rule on that particular file
       // example: 
            // we define 'test' as '\.txt$\i ... so the rule will apply to .txt files
            // the type of '.txt' files are an asset
            rules:
            [
                {
                    test: /\.txt$/i,
                    type: 'asset/source'
                }
            ]
    // once we add a rule for a file type, we can import files of that type into our code
        import Text from './example.txt';
        document.querySelector('h1').innerHTML = Text;
            // this replaces the h1 with the .txt file content
        
        
