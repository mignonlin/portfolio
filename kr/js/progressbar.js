/* round progress bar */

/*
 * Example 2:
 *
 * - default gradient
 * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
 */
$(document).ready(function () {

  $("#section2").hover(function () {
    $(".second.circle")
      .circleProgress({
        value: 0.8,
      })
      .on("circle-animation-progress", function (event, progress) {
        $(this)
          .find("strong")
          .html(Math.round(80 * progress) + "<i>%</i>");
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
  });

});
//this is a test! 

// $(document).ready(function () {
//   $(".second.circle").click(function () {
//     alert('안녕하세요');
//   });
// });