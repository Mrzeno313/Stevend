$('[data-toggle=display]').on('click', function() {
    var target = $($(this).data("target"));
    target.toggleClass("d-none d-block");
}) 

$('.filters ul li').click(function(){
    $('.filters ul li').removeClass('active');
    $(this).addClass('active');
    
    var data = $(this).attr('data-filter');
    $grid.isotope({
      filter: data
    })
  });
  
  var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: true,
    masonry: {
      columnWidth: ".all"
    }
  })
