$(document).ready(function() {
  window.dancers = [];

  $('.lineUpButton').on('click', function(event) {
    $('.dancer').css('left', '0');
  });

  $('.frontAndCenter').on('click', function(event) {
    console.log('clicked button front and center');
    $('.psy').css({'left': '50%', 'top': '50%'});
    $('.otherGuy').css({'left': '50%', 'top': '30%'});
  });

  // var isNear = function( $element, distance, event ) {
    
  //   var left = $element.offset().left - distance,
  //     top = $element.offset().top - distance,
  //     right = left + $element.width() + ( 2 * distance ),
  //     bottom = top + $element.height() + ( 2 * distance ),
  //     x = event.pageX,
  //     y = event.pageY;
        
  //   return ( x > left && x < right && y > top && y < bottom );
    
  // };

  // $('body').mousemove(function(event) {

  //   if(isNear($('.dancer'), 10, event)) {
  //     $('.dancer').toggle();
  //   }
  // });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer.$node);
  });
});