// Main site JS

// Document ready functions
jQuery(document).ready(function($) {

  var $popButton = $('.pop-toggle');
  var $popMenu = $('.pop-inner');

  // Popout nav
  $( '.cross' ).hide();
  $( '.pop-menu' ).hide();
  $( '.hamburger' ).click(function() {
    $( '.pop-menu' ).slideToggle( "slow", function() {
        $( '.hamburger' ).hide();
        $( '.cross' ).show();
    });
  });

  // Hide the menu div when clicking anywhere but on the menu or its children //
  $(document).mouseup(function(e){
    var navmenu = $('.pop-menu');
    var burger = $( '.hamburger' );
    var cross = $( '.cross' );

    if(e.target.id != navmenu.attr('id') && !navmenu.has(e.target).length){
      navmenu.slideUp();
      cross.hide();
      burger.show();
    }
  });

});
