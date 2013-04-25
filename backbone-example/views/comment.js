var CommentView = Backbone.View.extend({
    tagName : 'li',
    className : "comment-list",
    initialize : function(model, options){
        this.template = Hogan.compile($("#comment-template").text());
    },
    html : function(){
        var html = this.template.render(this.model.attributes);
        return html;
    }
});
