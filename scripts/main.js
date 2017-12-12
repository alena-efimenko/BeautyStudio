function centerMainTitle() {
  let circle = document.getElementsByClassName("circle")[0];
  let logo = document.getElementsByClassName("main-title")[0];

  let circleRect = circle.getBoundingClientRect();
  let logoRect = logo.getBoundingClientRect();

  logo.style.left = getCenteredLeft();
  logo.style.top = getCenteredTop();
  logo.style.transform = "translate(-50%, -50%)";

  function getCenteredLeft() {
    return circleRect.left + (circleRect.right - circleRect.left) / 2 + 'px';
  }

  function getCenteredTop() {
    return circleRect.top + (circleRect.bottom - circleRect.top) / 2 + 'px';
  }
}

$(function() {
  centerMainTitle();
  window.onresize = centerMainTitle;
  window.onscroll = centerMainTitle;

  let $root = $('html, body');

  $('a[href^="#"]').click(function() {
    $root.animate({
      scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 1000);

    return false;
  });
});