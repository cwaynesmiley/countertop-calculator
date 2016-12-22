function totalCost() {
  var area = document.getElementById("area").value;
  var material = document.getElementById("material").value;
  var cost = 0;

switch(material) {
  case "saljan": 
    cost = 69;
    break;
  case "karlby":
    cost = 139;
    break;
  case "hammarp":
    cost = 119;
    break;
  case "ekbacken":
    cost = 99;
    break;
  case "barkaboda":
    cost = 229;
    break;
}
  
// Figure out cost
  var finalCost = area * cost;
  
// Append the details 
  $("h2#displayCost span").html("").append(finalCost);
}

// Reset function

function resetDisplay() {
  $("h2#displayCost span").html("");
}
