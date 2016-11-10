document.addEventListener('DOMContentLoaded', function () {
  var newsblurAPI = "http://api.fivecat.gq/api/index.php/feed/browsers";
  $.getJSON(newsblurAPI, function (json) {

    var stories = json.stories;

    $.each(stories, function (key, value) {
      var link = stories[key]['link'];
      var title = stories[key]['title'];
      var favicon_img = stories[key]['favicon'];

      var favicon = "<img style='width: 20px !important; margin-bottom: 0 !important; padding-right: 10px' src='" + favicon_img + "'/>";
      var article = "<article><p><a class='title' target='_blank' href='" + link + "'>" + favicon + title + "</a></p></article>";


      $('#news').append(article);
    });
  });
}, false);