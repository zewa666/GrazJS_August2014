require.config({
  paths: {
    'm': 'modules/',  // named alias
    'jquery': '../bower_components/jquery/dist/jquery'
  }
});

define(function(require) {
  var $ = require('jquery');


  var modEvent = require('m/event'), // path + filename without extension
      secondMeetup = new modEvent("Second Meetup", new Date());

  var member = require('modules/member'),
      max = new member("Max Mustermann"),
      susi = new member("Susi Sorglos");

  secondMeetup.addMember(max).addMember(susi);

  var content = "<h3>Meetup: " + secondMeetup.getTitle() + " on: " +
                secondMeetup.getDate() + "</h3>" +
                "<ul>";
  secondMeetup.getMembers().forEach(function(m) {
    content += "<li>" + m.getName() + "</li>";
  });
  content += "</ul>";

  $('.content').html(content);
});
