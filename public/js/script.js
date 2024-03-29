
$(document).on('click', '.link', function(){
    home_page_header_carousel();
    animate_box();
    restaurant_menu();
});
// $(document).on('click', '.res', function(){
//     restaurant_menu();
    
// });

$(document).on('click', '.nav-item .nav-link1', function(){
    
    $(".navbar-toggler").addClass("collapsed");  
    $(".navbar-collapse").removeClass("show");  
    
  });


// $(document).on('click', '.nav-item .dropdown-toggle', function(){
    
//     $(".dropdown-menu").toggleClass('show');  
   
    
//   });
  

  $(document).ready(function() {
    $('.nav-item.dropdown .dropdown-toggle').click(function() {
      $(this).next('.dropdown-menu').toggleClass('show');
    });
  });
  
  