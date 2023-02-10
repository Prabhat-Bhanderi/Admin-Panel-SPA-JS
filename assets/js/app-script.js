
$(function () {
  "use strict";


  //sidebar menu js
  $.sidebarMenu($('.sidebar-menu'));

  // === toggle-menu js
  $(".toggle-menu").on("click", function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  // === sidebar menu activation js

  $(function () {
    for (var i = window.location, o = $(".sidebar-menu a").filter(function () {
      return this.href == i;
    }).addClass("active").parent().addClass("active"); ;) {
      if (!o.is("li")) break;
      o = o.parent().addClass("in").parent().addClass("active");
    }
  }),


    /* Top Header */

    $(document).ready(function () {
      $(window).on("scroll", function () {
        if ($(this).scrollTop() > 20) {
          $('.topbar-nav .navbar').addClass('bg-dark');
        } else {
          $('.topbar-nav .navbar').removeClass('bg-dark');
        }
      });
    });
});