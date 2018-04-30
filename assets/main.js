$(function() {
  let badges = $('#badges');

  $.ajax({
    url: 'https://www.codeschool.com/users/Matej_Mihalik.json',
    dataType: 'jsonp',
    success: function(response) {
      response.courses.completed.forEach(course => {
        let badge = $('<div>', {
          class: 'course'
        });

        let title = $('<h3>', {
          text: course.title
        });

        let image = $('<img>', {
          src: course.badge
        });

        let link = $('<a>', {
          href: course.url,
          target: '_blank',
          class: 'btn btn-primary',
          text: 'See Course'
        });

        badge.append(title, image, link).appendTo(badges);
      });
    }
  });
});
