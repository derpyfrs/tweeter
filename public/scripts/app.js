/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(function() {


  function preventDef(event) {
    event.preventDefault(event);
  }

  function formatDate(timestamp) {
    return moment(timestamp).fromNow();

  }

  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function renderTweets(tweets) {
  // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    // $('.tweet-list').empty();
    tweets.forEach(function(tweet) {
      var aTweet = createTweetElement(tweet);
      $('.tweet-container').prepend(aTweet);
      // $('.fridge-list').prepend(aTweet);
    });
  }

  function createTweetElement(tweet) {
    var formattedDate = formatDate(tweet.created_at);
    var safeHTML = escape(tweet.content.text);

    return $(`
      <article  class="old-tweet">
       <header>  <img src=${tweet.user.avatars.small}> ${tweet.user.name} </p> ${tweet.user.handle} </header>
      <div class="oldText" > ${safeHTML}</div>
      <footer> <div class="time">${formattedDate}</div>
        <button class="stars">&#11088;</button>
        <button class="retweet">&#128260;</button>
        <button class="heart">&#128156;</button>
      </footer>
      </article>`);
  }

  // renderTweets(data);

  (function loadTweets() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: renderTweets
    });
  }());


  $(".tweet-form").submit (function (event) {
    event.preventDefault();
    var form = this;

    $.ajax({
      url: '/tweets/',
      method: 'post',
      data: $(form).serialize(),
      success: $.ajax({
        url: '/tweets',
        method: 'GET',
        success: renderTweets
      })
    });
    $("#new-tweet").find('textarea').val('');
    $("#new-tweet").find(".counter").html('140');
  });

});

