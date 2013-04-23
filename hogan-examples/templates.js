$(function(){
    //Here we pull the template from the DOM with jquery
    //The templates can be defined in any string, either in 
    //javascript or even in a REST service.
    var simple = $("#simple").text();
    //Now we compile the template with hogan, this returns
    //and object we can pump with data
    var simpleTemplate = Hogan.compile(simple);
    //After we compile the template, we must render the
    //template with data, this take the variables and plugs them
    //into the templates with the associated key
    var simpleHtml1 = simpleTemplate.render({name: "willie", color:"blue"});
    //We can use the same compiled template to render html
    //with different data.
    var simpleHtml2 = simpleTemplate.render({name: "nillie", color:"green"});
    //calling render only creates the string with the substitutions, once
    //we've done that we must place the string into the Dom, we'll be using
    //jquery here
    $("#simple-container").html(simpleHtml1);
    $("#simple-container").append(simpleHtml2);

    //Here we will load a template that has a list of items
    var list = $("#list").text();
    var listTemplate = Hogan.compile(list);
    //Although this is an object literal, normally this object would
    //be built from some service with data that is figured out at runtime. 
    var listHtml = listTemplate.render({
        name : "willie",
        todos : [
            //some of the items in the list don't have the 'important'
            //with the {{#importnat}} in the template, if the property
            //doesn't exists, it isn't rendered
            { todo : "wake up", important : true },
            { todo : "eat breakfast" },
            { todo : "do work" },
            //hogan escapes tags and things that could be considered
            //malicious:
            { todo : "watch tv <strong>NOW</strong>", imporant : false},
            { todo : "go to sleep", important : true}
        ],
        //this property is in a tripple stache, so tags are shown
        html: "<p>This text is in a triple statche, so it <b><i>IS</i></b> allowed to use tags</p>"
    });
    //we add the html to the page, as we did before in the previous example
    $("#list-container").html(listHtml);
});
