jQuery(document).ready(function($) {


  /* filtering */
  $('#portfolio-filter a').click(function(e) {
    e.preventDefault();

    /* make this <a> class active and remove class 'active' from any other <a>s */
    $('#portfolio-filter .active').removeClass('active');
    $(this).addClass('active');

    /* get the name of the cateory from this link */
    var filterVal = $(this).text().toLowerCase().replace(' ','-');


    $('#portfolio-grid div').each(function() {
        if(filterVal == 'gallery'){
          $(this).removeClass('hidden');
        }else{
          if(!$(this).hasClass(filterVal)) {
            $(this).addClass('hidden'); // hide those that don't have the filter
          }else{
            $(this).removeClass('hidden'); // show those that do have the filter
          }
        }
      });


  });


}); // end jquery
