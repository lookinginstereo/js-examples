var PostForm = Backbone.View.extend({
    events : {
        'click #submit-post': 'submit',
        'change .select-avatar': 'updateAvatar'
    },
    submit : function(){
        var avatar = this.getAvatar().val(),
            username = this.getUserName(),
            comment = this.getComment();
        if(comment && username){
            this.model.add(new Comment({
                name : username,
                comment : comment,
                avatar : avatar
            }));
            //empty after submitting post
            this.$el.find("textarea[name='comment']").val("");
        }else{
            console.log("try again!");
        }
    },
    updateAvatar : function(){
        var avatar = this.getAvatar();
        this.$el.find(".comment-avatar img").attr("src","img/"+avatar.val()+".png");
        this.$el.find("input[name='name']").val(avatar.text());
    },
    getAvatar : function(){
        return this.$el.find(".select-avatar option:selected");
    },
    getUserName : function(){
        var elem = this.$el.find("input[name='name']");
        return this.validate(elem);
    },
    getComment : function(){
        var elem = this.$el.find("textarea[name='comment']");
        return this.validate(elem);
    },
    validate : function(elem){
        if(elem.val().length > 0){
            elem.parent().removeClass("error");
            return elem.val();
        }else{
            elem.parent().addClass("error");
        }
    }
});
