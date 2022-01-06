// babel
  // a node package transpiler tool for JavaScript
  // babeljs.io


// transpile / transpiler / transpilation:
  // translates modern code syntax into older syntax of the same language
  // this allows older browsers to successfully understand it
  // solves browser compatability issues


// installation steps:
  // 1. npm init  // (package.json created)
        npm install @babel/cli @babel/preset-ev -save-dev
  
  // 2. this will create the .babelrc file:
        // which says (transpile my code to support older browsers)
          {
            "presets": ["@babel/preset-env"]
          }

  // 3. then you define the command inside package.json you will use to run babel on the project:
        // src is where the code is we want to run babel on, d flag says where we want Babel to store the output, out - it will be stored in the out folder
          "scripts" : {
            "build" : "babel src -d out"    
          }

  // 4. you can then run babel with the build command:
        npm run build
