$(function(){
    var comments = new CommentCollection();
    var commentsView = new CommentsView({
        model : comments
    });

    comments.fetch({reset:true});

    window.comments = comments;
});
