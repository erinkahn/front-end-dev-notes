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


// THIS
  // refers to the object it belongs to
  // https://programmingwithmosh.com/javascript/understanding-of-this-variable-in-javascript/

