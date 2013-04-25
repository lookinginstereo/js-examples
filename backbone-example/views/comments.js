var CommentsView = Backbone.View.extend({
    tagName : 'ul',
    id : "comment-list",
    initialize : function() {
        this.listenTo(this.model,"add", this.addNewComment);
        this.listenTo(this.model,"reset", this.render);
        this.listenTo(this.model,"change", this.render);
    },
    addNewModel : function(model){
        var comment = new Comment(model),
            commentView = new CommentView({model : comment});

        //this should be part of the view methinks
        $("#"+this.id).prepend(commentView.html());
    },
    render : function(){
        this.model.each(function(comment){
            this.addNewModel(comment);    
        }, this);
    }

});
