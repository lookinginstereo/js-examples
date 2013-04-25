$(function(){
    var comments = new CommentCollection();
    var commentsView = new CommentsView({
        model : comments
    });
    var postForm = new PostForm({
        el : $("#comment-post"),
        model : comments
    });

    comments.fetch({reset:true});

    window.comments = comments;
});
