// babel
  // a node package transpiler tool for JavaScript
  // babeljs.io


// transpile / transpiler / transpilation:
  // translates modern code syntax into older syntax of the same language
  // this allows older browsers to successfully understand it
  // solves browser compatability issues


// installation steps:
  // 1. create package.json file and install babel
        npm init  
        npm install @babel/cli @babel/preset-ev -save-dev
  
  // 2. create the .babelrc file:
        // which says (transpile my code to support older browsers)
          {
            "presets": ["@babel/preset-env"]
          }

  // 3. then you define the command inside package.json which you will use to run babel on the project:
        // src is where the code is we want to run babel on, d flag says where we want Babel to store the output, out - is the folder you create for the new transpiled file 
          "scripts" : {
            "build" : "babel src -d out"    
          }

  // 4. you can then run babel with the build command:
        npm run-script build

        
        
// if you want to provide a list of browsers you want to be supported, you create a new file:
   .browserlistrc
    // inside the file, you specify the target list of browsers or whatever else you want
    // https://github.com/browserslist/browserslist - examples of target lists 
