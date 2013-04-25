$(function(){
    //Here we create a new instance of our collection
    //this will hold the data that represents whats in the
    //back end and can fire events
    var comments = new CommentCollection([],{
        url : "http://bowser.mw.prtdev.lexmark.com:3000/comments"
    });

    //Here we create an instance of CommentsView and pass in the comments model
    //that the view will operate on and listen to events on
    //We also pass in the container element that the comments will
    //be rendered in under the 'el' property
    var commentsView = new CommentsView({
        el : $("#comment-list"),
        model : comments
    });

    //Here we create an instance of our PostForm view. We pass in the
    //it follows the same recipie as CommentsView 
    var postForm = new PostForm({
        el : $("#comment-post"),
        model : comments
    });

    //We initially fetch the comments from the server.
    //ideally, this would be served up in the page as a 
    //json string or object that was created from the server.
    comments.fetch();

    //We set a timer here to fetch the comments
    //every five seconds. 
    setInterval(function(){
        console.log("syncing!");
        comments.fetch();
    }, 5000);
});
