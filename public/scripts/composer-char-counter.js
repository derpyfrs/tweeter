$(function() {

  let maxChar = 140;
  let count;

  $('.o--tweet').keyup(updateCount);
  $('.btn--compose').prop('disabled', false);

  $('.btn--compose').click(function() {
    if (count === undefined) {
      alert( "You can't submit an empty message :(." );
    }
  });

  let maxLength = 140;

  $('.o--tweet').keyup(function() {
    var length = $(this).val().length;
    length = maxLength-length;
    $('.counter').text(length + ' characters');

   if ( length < 0 ){
      $('.counter').css('color', 'red');
    }
    else {
      $('.counter').css('color', 'black');
    }
  });

  $( ".compose" ).click(function() {
    $( ".new-tweet" ).slideToggle( "slow", function() {
      // Animation complete.
    });
  })

  function updateCount() {
    console.log('updated');
    count = maxChar - $(this).val().length;
    console.log(count);

    if (count < 0) {
      $('.btn--compose').prop('disabled', true);
    } else {
      $('.btn--compose').prop('disabled', false);
    }
  }

});
