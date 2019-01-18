console.log("TEST JS");
var $ = jQuery;
$( document ).ready(function(){
  $('.menu__main li.menu-item').each(function(i){
    $(this).addClass('item-' + (i + 1));
    $(this).attr('supersquid', '#supersquid-menu-' + (i + 1));
    $(this).mouseenter( (function() {
      var e = $($(this).attr('supersquid'));
      showMenu(e);
      e.mouseenter( (function() {
        showMenu($(this));
      })).mouseleave( (function(){
        hideMenu($(this));
      }));
    })).mouseleave( (function(){
      hideMenu($($(this).attr('supersquid')));
    }));;
  });
});

function showMenu(e){
  e.show();
  e.addClass('active-hover');
}

function hideMenu(e){
  e.hide();
  e.removeClass('active-hover');
}
