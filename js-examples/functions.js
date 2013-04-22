test("functions",function(){
    //a "typical" funtion declaration
    function foo(){
        return "I haz a foo";
    }
    //assinging a property to a function, because a function
    //can be used like an object
    foo.bar = "property of foo";

    //since functions are like any other object, they can be assigned
    //directly
    var bar = foo;
    //here is an example of an anonymous function that is directly assigned
    //to a variable
    var baz = function(){ return "I haz a baz";};
    //an array of elements that are functions, the last of which is
    //an anonymous function
    var foobar = [foo, baz, function(){return "last element in array"}];

    //here we have a function that returns the function foo
    function foofoo(){
        return foo;
    }

    //here we assert to prove that these things are actually happening
    ok(typeof foo === "function", foo());
    ok(typeof bar === "function", bar());
    ok(typeof baz === "function", baz());
    ok(typeof foobar[0] === "function", foobar[0]());
    ok(typeof foobar[1] === "function", foobar[1]());
    ok(typeof foobar[2] === "function", foobar[2]());
    ok(typeof foofoo() === "function", foofoo()());
    ok(typeof foo.bar === "string", "foo.bar = " + foo.bar);
});
