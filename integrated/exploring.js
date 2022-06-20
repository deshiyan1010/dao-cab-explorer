$(document ).ready(function() {
  var data = {
      getUserDataFromSession: function() {
          var userData = window.sessionStorage.getItem('userObject');
          console.log(userData);
          return JSON.parse(userData);
      }
  }
  var userDataObject=data.getUserDataFromSession();

  for(i = 0; i < userDataObject.UserData.length; i++) {
      $('div').append('<p><span>'+userDataObject.UserData[i].Terms+' : </span><span>'+userDataObject.UserData[i].Definitions+'</span></p>')
  }          
}); 