define(function(require) {

  var ctor = function(name) {
    var self = this;
    self.name = name;
  };

  ctor.prototype.getName = function() {
    return this.name;
  }

  return ctor;
});
