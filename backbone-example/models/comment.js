//Here is the Comment Model -- its pretty simple. Almost all of
//the functionality is BUILTIN to backbone for dealing with the models.
var Comment = Backbone.Model.extend({
    //The only thing we're using here is the defaults parameter which
    //sets the default values for attributes if they're NOT set with 
    //the constructor. This isn't needed, but it is helpful for
    //knowing what the Model's properties should be
    defaults : {
        name : "No Name",
        comment : "No Comment",
        date : new Date().getTime(),
        avatar : "BMO"
    }
});
