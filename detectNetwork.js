// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  var length = cardNumber.length;
  //prefix = first 2 digits
  var prefix = function(prefixLength) {
  	return cardNumber.slice(0, prefixLength);
  };

  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if (length === 14 && (prefix(2) === '38' || prefix(2) === '39')) return 'Diner\'s Club';

  // The American Express network always starts with a 34 or 37 and is 15 digits long
  if (length === 15 && (prefix(2) === '34' || prefix(2) === '37')) return 'American Express';

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  //Visa always has a prefix of 4 and a length of 13, 16, or 19.
  if ((length === 13 || length === 16 || length === 19) && prefix(1) === '4') return 'Visa';

  //MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  if (length === 16 && (prefix(2) === '51' || prefix(2) === '52' || prefix(2) === '53' || prefix(2) === '54' || prefix(2) === '55')) 
  		return 'MasterCard';

  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  if ((length === 16 || length === 19) && (prefix(4) === '6011' || prefix(2) === '65' || (parseInt(prefix(3)) >== 644 && parseInt(prefix(3)) <== 649)) 
      return 'MasterCard';

  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  if ((length >== 12 && length <== 19) && (prefix(4) === '5018' || prefix(4) === '5020' || prefix(4) === '5038' || prefix(4) === '6304')) 
      return 'Maestro';

};


