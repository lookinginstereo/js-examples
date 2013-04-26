var CommentCollection = Backbone.Collection.extend({
    //Here we have the model that the collection... is a collection
    //of. This is the bare object Comment, which is declared in a 
    //separate file
    model : Comment,
    //Here we have the url that points to where the REST calls will
    //operate on for push/pull/etc
    url : "http://localhost:3000/comments",
    //This function is called when we initialize and instance of
    //comment colleciton. 
    initialize : function(models, options){
        //To bind to model events, we must declare them in the initalize function
        //here we are binding to a function that is part of this object called 'saveModel'
        this.listenTo(this,"add",this.saveModel);
    },
    //The saveModel function is called everytime an item is added to the collection
    //This is gogin to try to save the model via a POST call to the REST interface.
    saveModel : function(model){
        //first we push check to make sure the model is new. If we're reloading the pave
        //and there are models that are added that aren't new, we don't want to
        //try to re-add them to the back end
        if(model.isNew()){
            //The builtin backbone method for saving a model the backend
            //This does a POST to the url provided with the attributes of the model
            model.save();
        }
    }
});
