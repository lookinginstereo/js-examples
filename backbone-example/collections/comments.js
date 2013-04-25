var CommentCollection = Backbone.Collection.extend({
    model : Comment,
    url : "http://localhost:3000/comments",
    initialize : function(){
        this.listenTo(this,"add",this.saveModel);
    },
    saveModel : function(model){
        if(model.isNew()){
            model.save();
        }
    }
});
