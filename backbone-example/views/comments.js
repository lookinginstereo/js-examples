var CommentsView = Backbone.View.extend({
    tagName : 'ul',
    id : "comment-list",
    initialize : function() {
        this.listenTo(this.model,"add", this.addNewComment);
        this.listenTo(this.model,"reset", this.render);
    },
    addNewComment : function(comment){
        var commentView = new CommentView({model : comment});

        //this should be part of the view methinks
        $("#"+this.id).prepend(commentView.html());
    },
    render : function(){
        $("#"+this.id).empty();
        this.model.each(function(comment){
            this.addNewComment(comment);    
        }, this);
    }

});
