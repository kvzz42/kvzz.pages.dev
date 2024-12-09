$(function() {
  $('#change-skin').on('click', function () {
    $("body").toggleClass("page-dark-mode");
    localStorage.setItem('bj-light-mode', !$("body").hasClass("page-dark-mode"));
    BeautifulJekyllJS.initNavbar();
  });
  if (localStorage.getItem('bj-light-mode') === 'true') {
    $('#change-skin').trigger('click');
  }
});

$().ready(function() {
  $("body").css({ visibility:'visible' });
});
