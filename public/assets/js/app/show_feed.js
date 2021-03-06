function show_feed(data) {
  if (data.status == 'ok') {
    let stories = data.stories;
    $.each(stories, function (key, value) {
      let link = stories[key]['link'];
      let title = stories[key]['title'];
      let favicon_img = stories[key]['favicon'];

      let favicon = "<img style='width: 20px !important; margin-bottom: 0 !important; padding-right: 10px' src='" + favicon_img + "'/>";
      let article = "<article><a class='title' target='_blank' href='" + link + "'>" + favicon + title + "</a></article>";

      $('#news').append(article);
    });
  }
}