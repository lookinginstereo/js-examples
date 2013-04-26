//Here we have the comments View. This is where the brunt of the GUI work
//takes place. As the Backbone.js documentation states "Backbone views are 
//almos more convention than code -- they don't determine anything about your
//HTML or CSS and can be used with any templating library".
var CommentsView = Backbone.View.extend({
    //Similay to 
    initialize : function(options) {
        //simiar to the collection view, we attach mehtods to
        //model events. Here the 'model' is actually the CommentCollection.

        //Listening to the 'add' event and adding the new comment to the page
        this.listenTo(this.model,"add", this.addNewComment);
        //If a 'reset' is fired, we render the whole page
        this.listenTo(this.model,"reset", this.render);
    },
    //The event handler for 'add' is called with the model that was added,
    //since CommentCollection contains Comments, the handler is called with
    //a comment model object
    addNewComment : function(comment){
        //here we create a new comment view and pass in the comment model
        //as a parameter.
        var commentView = new CommentView({model : comment});
        //We add the html string to the page. We allow the comment
        //view to render itself.
        this.$el.prepend(commentView.html());
    },
    render : function(){
        this.$el.empty();
        this.model.each(function(comment){
            this.addNewComment(comment);    
        }, this);
    }

});
