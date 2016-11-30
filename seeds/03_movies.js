/* eslint-disable max-len, camelcase */

'use strict';

exports.seed = function(knex) {
  return knex('movies').del()
    .then(() => {
      return knex('movies').insert([{
        movie_id: 50362,
        movie_rating: 'PG-13',
        movie_title: 'Stranger than fiction',
        movie_poster: 'http://static-api.guidebox.com/thumbnails_movies/50362-3684624573-2298494666-3146139020-large-400x570.jpg',
        movie_overview: "One morning, a seemingly average and generally solitary IRS agent named Harold Crick begins to hear a female voice narrating his every action, thought and feeling in alarmingly precise detail. Harold's carefully controlled life is turned upside down by this narration only he can hear, and when the voice declares that Harold Crick is facing imminent death, he realizes he must find out who is writing his story and persuade her to change the ending. The voice in Harold's head turns out to be the once celebrated, but now nearly forgotten, novelist Karen \"Kay\" Eiffel, who is struggling to find an ending for what might be her best book. Her only remaining challenge is to figure out a way to kill her main character, but little does she know that Harold Crick is alive and well and inexplicably aware of her words and her plans for him.",
        embed_link: 'http://api-widget.guidebox.com/embed.php?video=29070'
      }, {
       movie_id: 50363,
       movie_rating: 'NR',
       movie_title: 'Little Indi',
       movie_poster: 'http://static-api.guidebox.com/thumbnails_movies/50363-3346498669-114219273-4257163885-large-400x570.jpg',
       movie_overview: "Overview Not Avaliable",
       embed_link: 'Preview Not Avaliable'
      }]);
    })
    .then(() => {
      
    });
};
