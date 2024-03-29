// OOP - Object oriented programming
	// An object based model  (contains objects) with instances, characteristics (what), properties and behaviors (how)


// Class - Blueprint / template for objects 
	// - has a set of rules
	// - has values
	// - has functions/behaviors


//Object - instance of a class
	// - have behaviors, properties, values, characteristics 
	// - a user can interact with an object, modify, add new characteristics 


//example: 
  // CAR 
    // - Class : car model: Volkswagen (template)
    // - Object: specific car: Limited (instance of class)
    // - Characteristics: color: red (properties)
    // - Behavior: how to start the car (key fob) (functions/methods/behaviors)


// — in OOP, you can access, use and modify instances and their data, methods

// — readable, maintainable, manageable 


//OOP languages: 
    // PHP, JavaScript, Java, Python, C++


// 4 main features of OOP
  // 1. Inheritance
  // 2. Encapsulation
  // 3. Polymorphism
  // 4. Abstraction


//Inheritance
  // Object or class is created using the same properties/behaviors as it’s parent object/class
  // helps with code reuse


// Encapsulation
  // Binding data into a single entity without revealing the details
  // The functions / data / methods inside a class are hidden to the user
    // - Hides data / restricts access
    // - Binds data ( data and methods bound together as a class) 


// Polymorphism
  // Many shapes 
  // Code / data / methods behave differently under different circumstances / contexts 
    // - Run time/execution time  - early binding - dynamic (function implementation is decided at execution time)
    // - compile time - late binding - static (function implementation is decided at compile time)


// Abstraction
  //Hiding inner details and showing only the solution
    // (Cars - you only need to know how to turn on a car, not how the wires work)


// Constructor (new)
  // Methods with the same name as the class name
    // - Initialize objects
    MyClass myClassObject = new MyClass();


// Subclass
  // A class that inherits props from another class ( a child class)


// Superclass
  // Class that allows subclasses/child classes to inherit from itself 


// SCOPES
   // - Function scope   (var, regular functions)
   // - Block scope 	 (inside { }, let, const, arrow functions)


// THIS keyword
   // - Regular function, the value of THIS depends on where it is CALLED
   // - Arrow function, the value of THIS depends on where it is DEFINED


// Function Methods:
   // - These are used to set the this keyword independent of how the function is called
    // 1. call - sets this inside the function and immediately calls that function, accepts comma separated values
    // 2. apply - sets this inside the function and immediately calls that function, accepts and array of args 
    // 3. bind - creates new copy/instance function and sets this to the parameter entered inside the call function ()


// Array methods:
   // 1. Map - creates new array from an existing one by applying a function to each element of the first array
   // 2. reduce - reduces an array of values down to just one value. To get the output value, it runs a reduce function on each element of the array.
   // 3. filter - takes each element in an array and applies a conditional to it. If true, the element pushes to the output array. If false, the element does not get pushed to the output array


// Literal notations (objects, arrays)
   // - Curly brackets { } for object literals
   // - Square brackets [ ] for array literals
   // - String literals have 3 options: ‘ “ or ` (template strings - backticks)
      // - backticks allow for ${string interpolation} (js expressions)


// Rest/Spread operator 
   // 1. Rest - restructuring …
   // 2. Spread - object/array literals  
