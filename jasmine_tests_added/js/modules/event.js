define(function(require) {

  var ctor = function(title, meetupDate) {
    var self = this;
    self.title = title;
    self.meetupDate = meetupDate;
    self.members = [];
  };

  ctor.prototype.getDate = function() {
    return this.meetupDate;
  };

  ctor.prototype.getTitle = function() {
    return this.title;
  }

  ctor.prototype.getMembers = function() {
    return this.members;
  };

  ctor.prototype.addMember = function(member) {
    this.members.push(member);
    return this;
  };

  return ctor;
});
