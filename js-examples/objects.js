module("objects");

//Here we create an example of a class with private variables using a closure
test("objects with private variables", function(){
    //functions that are actually constructors begin with a capitol letter
    //by convention.
    var Car = function(){
        //here is the private variable for car
        var miles = 0;

        //here we have a function that
        this.drive = function(distance){
            miles += distance;
        };

        this.getMiles = function(){
            return miles;
        };

        this.serviceLight = function(){
            return miles > 5000;
        };
    };
    var civic = new Car();

    //Although Car is a class, it still operates as a function would
    equal(typeof Car, "function", "Car is a function");
    //Here we can test if civic is an instance of car with the 'instanceof' operator
    //this is useful if we're testing a parameter that needs to be of a certain class
    ok(civic instanceof Car, "civic is an instance of Car");

    equal(civic.miles, undefined, "miles isn't avaialable directly");
    equal(civic.getMiles(), 0, "using a getter for private miles variable");
    
    //Lets take a 'little' trip in the new civic from miami to nyc to chicago, to austin, to 
    //san diego, up to seattle!
    civic.drive(5935);
    
    //there are now many more miles on the car
    equal(civic.getMiles(), 5935, "using a getter for private miles variable after our drive");
    //call another method that also has access to the cars miles
    ok(civic.serviceLight(), "the service light is on after the drive, private access to variables");

});

//Here we use prototypes instead of private variables for our car object 
test("object prototypes", function(){
    var Car = function(){
        //here we put an underscore before the miles variable as a convention
        //for stating a variable is private. _miles is not private, because its
        //still accesable, but this is simply a way to show that a variable
        //is kind of 'hidden'
        this._miles = 0;
    };    
    Car.prototype.drive = function(distance){
        this._miles += distance;
    };

    Car.prototype.getMiles = function(){
        return this._miles;
    };

    Car.prototype.serviceLight = function(){
        //here we can still have closure variables for each function, but we also
        //have access to the 'this' property of each instance
        var serviceInterval = 5000;
        return this._miles > serviceInterval;
    };

    var civic = new Car();

    //Because we have the instance variable assigned to 'this._miles' all instance
    //have direct access to all of the properties. 
    equal(civic._miles, 0, "_miles is available");
    //although I left in the getter, it is no longer needed here since we
    //have direct access, but it should be used for checking if there are any other
    //things that need to be modifies
    equal(civic.getMiles(), 0, "using a getter for _miles variable");
    
    //Lets take a 'little' trip in the new civic from miami to nyc to chicago, to austin, to 
    //san diego, up to seattle!
    civic.drive(5935);
    
    //there are now many more miles on the car
    equal(civic.getMiles(), 5935, "using a getter for private miles variable after our drive");
    //call another method that also has access to the cars miles
    ok(civic.serviceLight(), "the service light is on after the drive, private access to variables");
});
