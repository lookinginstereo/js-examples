var CommentCollection = Backbone.Collection.extend({
    model : Comment,
    url : "http://localhost:3000/comments"
});
