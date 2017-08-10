$(function() {

  var maxChar = 140;
  var $textarea = $('textarea');
  var $counter = $('.counter');

  $(':input[type="submit"]').prop('disabled', false);

  function updateCount() {
    var count =  maxChar - $(this).val().length;

    $counter.text(count);
    if (count === 140) {
      $(':input[type="submit"]').prop('disabled', true);
    }
    if (count < 0) {
      $(':input[type="submit"]').prop('disabled', true);
      alert("140 Max characters :(");
    } else {
      $(':input[type="submit"]').prop('disabled', false);
    }
  }

$( ".compose" ).click(function() {
  $( ".new-tweet" ).slideToggle( "slow", function() {
    // Animation complete.
  });
})
  $textarea.keydown(updateCount);
  $textarea.keyup(updateCount);



});
