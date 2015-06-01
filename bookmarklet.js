//this is your bookmarklet.

javascript: (function(){
  var addJquery = document.createElement('script');
  addJquery.src='https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js';
  document.body.write(addJquery);
  console.log('The Bookmarklet Works!');
})();