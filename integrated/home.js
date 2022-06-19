// document.getElementById("pvt").value="aaaaaaaaaa";
// Use to fill private key


// var publicK=0;
// var privateK=0;

// var keys = JSON.parse($.ajax({
//                   url: "http://127.0.0.1:5000/requestredirect",
//                   type: "post",
//                   contentType: "application/json",
//                   data: JSON.stringify({"req":"getkey","reqtype":"get"}),
//                   dataType: 'json',
//                   global: false,
//                   async: false,
//                   success: function(response){
//                       publicK = response['pub'];
//                       privateK = response['pvt'];
//                       document.getElementById('mypub').innerHTML = publicK;
//                       document.getElementById('mypvt').innerHTML = privateK;
//                       return response;
//                   }
//                 }).responseText);


// publicK = keys["pub"];
// privateK = keys["pvt"];


// function refreshBalance(){
//   console.log("Refreshing balance");
//   $.ajax({
//     url: "http://127.0.0.1:5000/requestredirect",
//     type: "post",
//     contentType: "application/json",
//     data: JSON.stringify({"req":"balance","reqtype":"get","pub":publicK}),
//     success: function(response){
//         document.getElementById('mybalance').innerHTML = response["bal"];
//     }
//   });
// }
// refreshBalance()


function listtoobj(lst){
  obj = {};
  for(let i = 0; i < lst.length; i++){
    obj[lst[i]["name"]] = lst[i]["value"];
  }
  return obj;
}

var connectbtn = document.getElementById("connectbtn");
connectbtn.addEventListener("click", function() {
  var formData = $("#connect").serializeArray();
  console.log(formData);
  formData = listtoobj(formData)
  console.log(formData);
  $.ajax({
    url: "http://127.0.0.1:5000/requestredirect",
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(formData),
    success: function(response){
        document.getElementById('connectresponse').innerHTML = JSON.stringify(response);
    }
  });
});



var expbtn = document.getElementById("expbtn");
expbtn.addEventListener("click", function() {
  var formData = $("#exp").serializeArray();
  console.log(formData);
  formData = listtoobj(formData)
  console.log(formData);
  $.ajax({
    url: "http://127.0.0.1:5000/requestredirect",
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(formData),
    success: function(response){
      document.getElementById('expresponse').innerHTML = JSON.stringify(response);
    }
  });
});




var txnbtn = document.getElementById("txnbtn");
txnbtn.addEventListener("click", function() {
  var formData = JSON.stringify($("#txn").serializeArray());
  
  var sigs = JSON.parse($.ajax({
    url: "http://127.0.0.1:5000/requestredirect",
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(formData),
    dataType: 'json',
    global: false,
    async: false,
    success: function(response){
        return response;
    }
  }).responseText);

  document.getElementById('signature_r').value = sigs['r']
  document.getElementById('signature_s').value = sigs['s']

  $.ajax({
    url: "http://127.0.0.1:5000/requestredirect",
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(formData),
    success: function(response){
        document.getElementById('txnresponse').innerHTML = JSON.stringify(response);
    }
  });
});