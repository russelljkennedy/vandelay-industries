// Main site JS

// Document ready functions
jQuery(document).ready(function($) {

  //   // Blog listings grid
  // function resizeListing(item){
  //   // Find the blog-grid and the auto-row property
  //   var grid = document.getElementsByClassName('blog-grid')[0],
  //       rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
  //       rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  //   // Target posts within the grid. We want the grid to adapt based on listing height
  //   var rowSpan = Math.ceil((item.querySelector('.blog-post').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
  //   // Set a span style for the listing item
  //   item.style.gridRowEnd = 'span '+rowSpan;
  // }
  //
  // function sortByBlogDate() {
  //   var date = $('img .blog-img');
  //   var container = $('.dates')
  //   // Blog grid is the wrapper
  //   var $wrapper = $('.blog-grid');
  //
  //   // var $wrapper = $('.testWrapper');
  //
  //   // Find the date class within the wrapper and sort by it?
  //   $wrapper.find(date).sort(function (a, b) {
  //       return +a.dataset.date - +b.dataset.date;
  //   })
  //   .appendTo( container );
  //
  // }
  //
  // // function sortByDate(a, b) {
  // //   var date = $('p.date');
  // //   var listings = $('.blog-listing');
  // //   date.sort(function (a,b) {
  // //     a = parseFloat($(a).attr("data-date"));
  // //     b = parseFloat($(b).attr("data-date"));
  // //     return a>b ? -1 : a<b ? 1 : 0;
  // //     })
  // // }
  //
  // // Apply the span as calculated above.
  // function resizeAllListings(){
  //   // Target the outer div to list all of the blog-post items
  //   var allItems = document.getElementsByClassName('blog-listing');
  //   // Loop throught all of the blog-listing items and apply the span style
  //   for(var i=0;i<allItems.length;i++){
  //     resizeListing(allItems[i]);
  //   }
  // }
  //
  // // Use imagesLoaded to ensure that all items have loaded into the DOM before the resize takes place
  // function waitforImageLoad() {
  //   var allItems = document.getElementsByClassName('blog-listing');
  //   for(var i=0;i<allItems.length;i++){
  //     imagesLoaded( allItems[i], function(instance) {
  //       var item = instance.elements[0];
  //       resizeListing(item);
  //     } );
  //   }
  // }
  // //
  // //
  // // // Resize all of the listings items on page load or browser resize
  // // var listingEventsChange = ['load', 'resize'];
  // // listingEventsChange.forEach( function(event) {
  // //   window.addEventListener(event, resizeAllListings);
  // // } );
  //
  // // Add in one further resize once everything has definitely been loaded
  // waitforImageLoad();
  // // sortByDate();
  //
  //
  //
  // // function sortByDate() {
  // //   var date = $('li.date');
  // //   var container = $('.dates');
  // //
  // //   date.sort(function (a, b) {
  // //     a = parseFloat($(a).attr("data-date"));
  // //     b = parseFloat($(b).attr("data-date"));
  // //
  // //     return a>b ? -1 : a<b ? 1 : 0;
  // //     }).each(function(){
  // //        container.prepend(this);
  // //      })
  // // }
  // //
  // // sortByDate();
  //
  // sortByBlogDate();



  // date = $('p.date').data('date');

    // function sortByDate(a, b) {
    //   var date = $('p.date');
    //   var listings = $('.blog-listing');
    //   date.sort(function (a,b) {
    //     a = parseFloat($(a).attr("data-date"));
    //     b = parseFloat($(b).attr("data-date"));
    //     return a>b ? -1 : a<b ? 1 : 0;
    //     })
    // }


    //   .each(function(){
    //   listings.prepend(this);
    // })


  // sortByDate();

});
