window.fbAsyncInit = function() {
  FB.init({
    appId      : '139202446270509',                        // App ID from the app dashboard
    status     : true,                                 // Check Facebook Login status
    cookie     : true,
    xfbml      : true                                  // Look for social plugins on the page
  });  
  console.log('aaaaaa');
  FB.getLoginStatus(function(response) {  
    if (response.session) 
    {
      console.log('logged');
    }else{ 
      console.log('not login')
    }
  }, true);
};
(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/all.js";
   fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));