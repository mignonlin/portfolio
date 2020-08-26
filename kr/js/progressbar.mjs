/* round progress bar */
(function ($) {
  /*
   * Example 2:
   *
   * - default gradient
   * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
   */
  $(".second.circle")
    .circleProgress({
      value: 1.0,
    })
    .on("circle-animation-progress", function (event, progress) {
      $(this)
        .find("strong")
        .html(Math.round(100 * progress) + "<i>%</i>");
    });

  $(".second2.circle")
    .circleProgress({
      value: 0.85,
    })
    .on("circle-animation-progress", function (event, progress) {
      $(this)
        .find("strong")
        .html(Math.round(85 * progress) + "<i>%</i>");
    });

  $(".second3.circle")
    .circleProgress({
      value: 0.75,
    })
    .on("circle-animation-progress", function (event, progress) {
      $(this)
        .find("strong")
        .html(Math.round(75 * progress) + "<i>%</i>");
    });

  $(".second4.circle")
    .circleProgress({
      value: 0.8,
    })
    .on("circle-animation-progress", function (event, progress) {
      $(this)
        .find("strong")
        .html(Math.round(80 * progress) + "<i>%</i>");
    });

  $(".second5.circle")
    .circleProgress({
      value: 0.7,
    })
    .on("circle-animation-progress", function (event, progress) {
      $(this)
        .find("strong")
        .html(Math.round(70 * progress) + "<i>%</i>");
    });
})(jQuery);
