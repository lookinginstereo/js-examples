//Many of these examples are excerpts from John Resig's "Secrets of the Javascript Ninja"
//A very good read and worthwhile reference. 
test("closures", function(){
    var foo = "foo",
        foo2 = "foo who?",
        foo3 = "foo me?",
        foo4 = "foo you!",
        otherFunction;

    function outer(){
        equal(foo, "foo", "foo is equal to the outer scope foo");
        //here we assign a variable normally, the var declaration creates
        //a closure inside of this function
        var foo = "bar";
        equal(foo, "bar", "foo is set as bar inside the function");

        //assign foo2 without the var, this will effect the outer
        //foo2 definition as well as the internal reference
        foo2 = "foo bar";
        equal(foo2, "foo bar", "foo2 is now foo bar, even without the var declaration");
        var bar = "bar";
        
        //here we create an inner function that can reference the closure inwide of outer
        function inner(param){
            //the inner function can see all of the variables 
            //that are declared in the enclosing function
            equal(bar, "bar", "the inner function can see bar");
            equal(foo, "bar", "the inner function also see the re-assigned foo");

            //the inner function can read parameters
            ok(param,"inner has a parameter");

            //the inner function can also have late references to
            //things that are declared in the scope of the caller
            ok(wayTooLate, "late variable declaration");
        }
        //now we assign this outer reference to the inner function
        otherFunction = inner;
    }

    outer();

    equal(foo,"foo", "since we used a closure, foo is sill foo"),
    equal(foo2,"foo who?", "since we didn't use var, the value assigned in outer sticks");
    equal(typeof bar, "string", "bar cannot be referenced outside of outer()");

    //wayToLate is referenced in inner(). Since we're 
    var wayTooLate = "late declaration!";
    otherFunction("hello!");
});
