"use strict";


module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {

      db.collection("tweeter").insertOne(newTweet);
    },

    //Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {

      db.collection("tweeter").find().toArray(callback);
    }

  };
}
