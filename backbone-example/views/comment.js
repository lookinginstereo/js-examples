var CommentView = Backbone.View.extend({
    tagName : 'li',
    className : "comment-list",
    initialize : function(model, options){
        this.template = Hogan.compile($("#comment-template").text());
    },
    html : function(){
        var date = new Date(this.model.attributes.date).toString();
        var html = this.template.render(_.extend(this.model.attributes, {dateString : date}));
        return html;
    }
});
