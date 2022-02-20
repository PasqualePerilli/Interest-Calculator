function roundDecimals(decimalAmount, precision){
  var decimalArray = getDecimalArray(decimalAmount);
  debug("Rounding array now");
  for(var index = decimalArray.length; index >= precision; index = index - 1){
    if(decimalArray[index] >= 5){
      decimalArray[index - 1] = parseInt(1) + parseInt(decimalArray[index - 1]);
      decimalArray[index] = 0;
    }
  }
  var increaseInteger = shouldIncreaseInteger(decimalArray, precision);
  debug("Length of decimal array is " + decimalArray.length + "; precision is " + precision);
  if(decimalArray.length > (parseInt(precision) + 1) && parseInt(decimalArray[precision - 1]) >= 5 && increaseInteger == true){
    debug("Integer part needs to be increased. Therefore, first element of decimal array should be 10 and remaining ones should be 0");
    decimalArray[0] = 10;
    decimalArray[precision - 1] = 0;
    for(var index = 1; index < precision; index = index + 1){
      decimalArray[index] = 0;
    }
  }
  debug("Printing rounded array");
  debug(decimalArray);
  return decimalArray;
};

function shouldIncreaseInteger(decimalArray, precision){
  var valueToReturn = true;
  for(var index = 0; index < precision; index = index + 1){
    if(decimalArray[index] < 9){
      valueToReturn = false;
      break;
    }
  }
  debug("Integer part should" + (valueToReturn == true ? "" : "n't") + " be increased");
  return valueToReturn;
};

function getDecimalArray(decimalAmount){
  var decimalArray = [];
  for(var index = 0; index < decimalAmount.length; index = index + 1){
    decimalArray[index] = decimalAmount[index];
  }
  debug(decimalArray);
  return decimalArray;
}

function roundCurrency(moneyAmount, precision){
  var valueToReturn = moneyAmount;
  debug("Money amount is " + moneyAmount);
  if((String(moneyAmount)).includes(".") == true){
    var integerDigits = (String(moneyAmount)).substring(0, (String(moneyAmount)).indexOf("."));
    var decimalDigits = (String(moneyAmount)).substring(1 + (String(moneyAmount)).indexOf("."));
    debug("Integer digits " + integerDigits);
    debug("Decimal digits " + decimalDigits);
    var roundedDecimals = roundDecimals(decimalDigits, precision);
    if(roundedDecimals[0] == 10){
      integerDigits = parseInt(integerDigits) + 1;
      decimalDigits = "";
    }
    else {
      decimalDigits = "";
      for(var index = 0; index < precision; index = index + 1){
        decimalDigits = decimalDigits + String(roundedDecimals[index]);
      }
    }
    valueToReturn = integerDigits;
    if(decimalDigits != ""){
      valueToReturn = valueToReturn + "." + decimalDigits;
    }
  }
  debug("Rounded currency is " + valueToReturn);
  return valueToReturn;
}
