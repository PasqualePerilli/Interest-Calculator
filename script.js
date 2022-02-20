let genericErrorMessage = "One of the input values is invalid. Interest cannot be computed at this time.";
let zeroAmountErrorMessage = "The starting amount cannot be zero. Interest cannot be computed at this time.";
let negativeAmountErrorMessage = "The starting amount cannot be less than zero. Interest cannot be computed at this time";
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
  document.getElementById("error-message").innerHTML = errorMessage;
  document.getElementById("error-message").style.display = "block";
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
  else if(interest === null || String(interest) == "" || isNaN(interest) == true){
    errorMessage = genericErrorMessage;
    valueToReturn = false;
  }
  else if(years === null || String(years) == "" || isNaN(years) == true){
    errorMessage = genericErrorMessage;
    valueToReturn = false;
  }
  else if(currentAmount  === null || String(currentAmount) == "" || isNaN(currentAmount) == true){
    errorMessage = genericErrorMessage;
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
