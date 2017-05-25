$(document).ready(function() {
  // console.log('ready...'); 4
  $('#searchUser').on('keyup', function(e) {
    let username = e.target.value; //value of typed info in input box

    // make request to Github
    $.ajax({
      url: `https://api.github.com/users/${username}`
      // data: {
      //   client_id: 'blah blah',
      //   client_secret: 'blah blah'
      // } // you would use this if you want more than 50 requests per hour
            // but it isn't necessary for this simple project
    }).done(function(user) {
      console.log(user); //gets api data associated with the GH username
    });
  });
});
