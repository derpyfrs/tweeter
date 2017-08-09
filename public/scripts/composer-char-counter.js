$(function() {

var maxChar = 140;
var $textarea = $('textarea');
var $counter = $('.counter');

function updateCount() {
    var count =  maxChar - $(this).val().length;
    $counter.text(count);
}

$textarea.keydown(updateCount);
$textarea.keyup(updateCount);



});
