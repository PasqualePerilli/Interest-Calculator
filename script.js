let genericErrorMessage = "The starting principal amount has to be a positive number. Interest cannot be computed at this time.";
let zeroAmountErrorMessage = "The starting principal amount cannot be zero. Please enter a positive number. Interest cannot be computed at this time.";
let negativeAmountErrorMessage = "The starting principal amount cannot be less than zero. Please enter a positive number. Interest cannot be computed at this time";
var errorMessage = "";

function compute(){
    var amount        = document.getElementById("principal").value;
    var interest      = document.getElementById("rate").value;
    var years         = document.getElementById("years").value;
    var currentAmount = amount;
    if(validateData(amount, interest, years, currentAmount) == false){
      hideResult();
      showErrorMessage();
    }
    else {
      for(var currentYear = 0; currentYear < years; currentYear = currentYear + 1){
        currentAmount = parseFloat(currentAmount) + (amount * interest / 100);
        //debug("Current amount at year " + currentYear + " is " + currentAmount);
      }
      var finalYear = new Date().getFullYear() + parseInt(years);
      showResult(amount, interest, finalYear, currentAmount);
      hideErrorMessage();
    }
}

function displayRate(theValue){
  document.getElementById("interest").innerHTML = theValue + "%";
}

function hideResult(){
  document.getElementById("result-text").style.display = "none";
}

function hideErrorMessage(){
  document.getElementById("error-message").style.display = "none";
}

function showErrorMessage(){
  //document.getElementById("error-message").innerHTML = errorMessage;
  //document.getElementById("error-message").style.display = "block";
  alert(errorMessage);
  document.getElementById("principal").focus();
}

function validateData(amount, interest, years, currentAmount){
  var valueToReturn = true;
  errorMessage = "";
  if(amount === null || String(amount) == "" || isNaN(amount) == true){
    errorMessage = genericErrorMessage;
    valueToReturn = false;
  }
  else if(parseInt(amount) == 0){
    errorMessage = zeroAmountErrorMessage;
    valueToReturn = false;
  }
  else if(parseInt(amount) < 0){
    errorMessage = negativeAmountErrorMessage;
    valueToReturn = false;
  }
  return valueToReturn;
}

function showResult(amount, interest, finalYear, finalAmount){
  document.getElementById("initialAmount").innerHTML    = amount;
  document.getElementById("percentage").innerHTML       = interest + "%";
  var finalYeild                                        = (parseFloat(finalAmount) - parseFloat(amount));
  document.getElementById("finalYeild").innerHTML       = roundCurrency(finalYeild, 2);
  document.getElementById("finalYear").innerHTML        = finalYear;
  document.getElementById("result-text").style.display  = "block";
}
