// Magnific popup
jQuery(document).ready(function($) {
  // Gallery images
  $('.gallery-images').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
      gallery: {
      enabled: true
      },
      image: {
      // options for image content type
      titleSrc: 'title'
    },
    // Add a fade-in transition to the main image when loaded
    callbacks: {
      open: function() {
        $('.mfp-content').addClass('fade-in');
      }
    }
  });
});
