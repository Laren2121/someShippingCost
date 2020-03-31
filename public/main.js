import Framework7 from 'framework7/framework7.esm.bundle'
import $$ from 'dom7';
const HST = require("./ShippingCost.js"); 

// Init F7
const app = new Framework7({
  root: '#app',
  theme: 'auto',
  // Fix for iPhone X notch
  statusbar: {
    overlay: Framework7.device.ios ? Framework7.device.webView || Framework7.device.cordova : 'auto',
  },
});

let nSubtotal = 0;

$$("#adding").on("submit", evt=>{
  evt.preventDefault();
  const oData = app.form.convertToData("#adding")

  //alert("adding: " + oData.amount);

  //for slecting elements from the dropdown
  //select province from the dropdown
  var e = document.getElementById("province");
  var prov = e.options[e.selectedIndex].value;
  //alert(prov)

  if(prov == "AB"){
    let val = 5
    nSubtotal += Number(oData.amount);// input
    alert("nSubtotal is "+ nSubtotal)
    const nHst = HST.calculate("AB", nSubtotal);// calculation on the __test__-->ShippigCost
    alert("nhst is " +nHst)
    //$$("#hst").html(nHst);
    $$("#total").html(10* (nHst -0.75) * val);
    //$$("#subtotal").html(nSubtotal);
    $$("#amounts").prepend("<p>Total cost in "+prov+" is "+ oData.amount + "</p>");
  }
  else if(prov == "MB"){
      let val = 3.5
    nSubtotal += Number(oData.amount);
    const nHst = HST.calculate("MB", nSubtotal);
    $$("#hst").html(nHst);
    $$("#total").html(10* (nHst -0.75) * val);
    $$("#subtotal").html(nSubtotal);
    $$("#amounts").prepend("<p>Total cost in "+prov+" is "+ oData.amount + "</p>");
}
  else if(prov == "NS"){
      let val = 3.5
    nSubtotal += Number(oData.amount);
    const nHst = HST.calculate("NS", nSubtotal);
    $$("#hst").html(nHst);
    $$("#total").html(10* (nHst -0.75) * val);
    $$("#subtotal").html(nSubtotal);
    $$("#amounts").prepend("<p>Total cost in "+prov+" is "+ oData.amount + "</p>");
}
  else if(prov == "ON"){
      let val = 0.8
    nSubtotal += Number(oData.amount);
    const nHst = HST.calculate("ON", nSubtotal);
    $$("#hst").html(nHst);
    $$("#total").html(10* (nHst -0.75) * val);
    $$("#subtotal").html(nSubtotal);
    $$("#amounts").prepend("<p>Total cost in "+prov+" is "+ oData.amount + "</p>");
}
  else if(prov == "SK"){
      let val = 4.5
    nSubtotal += Number(oData.amount);
    const nHst = HST.calculate("SK", nSubtotal);
    $$("#hst").html(nHst);
    $$("#total").html(10* (nHst -0.75) * val);
    $$("#subtotal").html(nSubtotal);
    $$("#amounts").prepend("<p>Total cost in "+prov+" is "+ oData.amount + "</p>");
 }
  else if(prov == "PE"){
      let val = 3.1
      let total = 0
    nSubtotal += Number(oData.amount);
    const nHst = HST.calculate("PE", nSubtotal);
    $$("#hst").html(nHst);
    $$("#total").html(10* (nHst -0.75) * val);
    $$("#subtotal").html(nSubtotal);
    // $$("#amounts").prepend("<p>Total cost in "+prov+" is "+ oData.amount + "</p>");
    $$("#amounts").prepend("<p>Total cost in "+prov+" is "+ oData.amount + "</p>");
  }
});