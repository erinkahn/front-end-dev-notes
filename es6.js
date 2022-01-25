// classes are blueprints
  // a blueprint is a set of instructions on how to build something
  // classes are functions used as a blueprint for create objects with different properties (size, color)
    // - these properties are defined in the constructor method


      // example:

        class Tv {
          constructor(size, brand) {
            this.size = size;
            this.brand = brand;
          }

          tvDescription() {
            return "I have a " + this.size + " " + this.brand + " TV!";
          }
        }
        
        console.log(Tv);  // Tv({<constructor>: "Function"})

        const erinsTv = new Tv();   // no parameters/changes
        console.log(erinsTv.tvDescription()); // I have a undefined undefined TV! -- needs parameters
        console.log(erinsTv); // Tv {size: undefined, brand: undefined} -- needs parameters or will return undefined

        const tylersTv = new Tv('30inch', 'LG');  // parameters used
        console.log(tylersTv) // Tv { size: '30inch', brand: 'LG' }
        console.log(tylersTv.tvdescription());  // I have a 30inch LG TV!

        // ** if you don't define a constructor, JS will create a default one for you


// this
  // refers to the object it belongs to
  // https://programmingwithmosh.com/javascript/understanding-of-this-variable-in-javascript/


// static
  // properties that use the 'static' keyword, belongs to the class
    // example: 
      static staticMethod()


// static, this & the constructor method:
  // The fields that utilize this, belong to the object being instantiated.
  // The methods that don’t utilize static belong to the object being instantiated, except for the constructor method.
  // The fields that don’t utilize this belong to the class.
  // The methods that utilize static belong to the class
  // The method constructor is a special method that belongs to the class
  // static methods/fields are attached directly to the class (the constructor method is also attached to the class). 
  // A static method CANNOT access class instance fields
  // A static method CAN access class static fields


// continue here:
https://programmingwithmosh.com/javascript/es6-classes-and-functional-components-in-under-30-minutes/#:~:text=Class%20properties%20vs%20objects%20properties%20%26%20methods
