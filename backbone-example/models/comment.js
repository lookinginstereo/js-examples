var Comment = Backbone.Model.extend({
    defaults : {
        name : "No Name",
        comment : "No Comment",
        date : new Date().getTime(),
        avatar : "BMO"
    }
});
