app.collections.Books = Backbone.Collection.extend({
  model : app.models.Book,
  url : '/books',

  initialize: function(){
    app.on('books', this.handle_change, this);
  },

  handle_change : function(message){
    var model;

    switch(message.action){
      case 'create':
        this.add(message.obj);
        break;
      case 'update':
        model = this.get(message.id);
        model.set(message.obj);
        break;
      case 'destroy':
        this.remove(message.obj);
    }
  }
});