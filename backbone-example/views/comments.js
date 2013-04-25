var CommentsView = Backbone.View.extend({
    initialize : function() {
        this.listenTo(this.model,"add", this.addNewComment);
        this.listenTo(this.model,"reset", this.render);
    },
    addNewComment : function(comment){
        var commentView = new CommentView({model : comment});

        //this should be part of the view methinks
        this.$el.prepend(commentView.html());
    },
    render : function(){
        this.$el.empty();
        this.model.each(function(comment){
            this.addNewComment(comment);    
        }, this);
    }

});
