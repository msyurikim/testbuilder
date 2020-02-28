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
  	return parseInt(cardNumber.slice(0, prefixLength));
  };
  var network = '';

  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if (length === 14 && (prefix(2) === 38 || prefix(2) === 39)) {
    network = 'Diner\'s Club';
  }
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  if (length === 15 && (prefix(2) === 34 || prefix(2) === 37)) {
    network = 'American Express';
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.

  //Visa always has a prefix of 4 and a length of 13, 16, or 19.
  if ((length === 13 || length === 16 || length === 19) && prefix(1) === 4) {
    network = 'Visa';
  }
  //MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  if (length === 16 && (prefix(2) === 51 || prefix(2) === 52 || prefix(2) === 53 || prefix(2) === 54 || prefix(2) === 55)) {
    network = 'MasterCard';
  }

  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  if ( (length === 16 || length === 19) && (prefix(4) === 6011 || prefix(2) === 65 || ( prefix(3) >= 644 && prefix(3) <= 649)) ) {
    network = 'Discover';
  }

  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  if ((length >= 12 && length <= 19) && (prefix(4) === 5018 || prefix(4) === 5020 || prefix(4) === 5038 || prefix(4) === 6304)) {
    network = 'Maestro';
  }

  //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  if ((length >= 16 && length <= 19) && ( ( prefix(4) >= 6282 && prefix(4) <= 6288 ) || ( prefix(3) >= 624 && prefix(3) <= 626 ) || ( prefix(6) >= 622126 && prefix(6) <= 622925 )) ) {
    network = 'China UnionPay';
  }

  //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  //Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.
  if ((length === 16 || length === 18 || length = 19) && 
    (prefix(4) === 4903 || prefix(4) === 4905  || prefix(4) === 4911 || prefix(4) === 4936  || prefix(4) === 6333 || prefix(4) === 6759  || 
    prefix(6) === 564182 || prefix(6) === 633110) ) {
      network = 'Switch';
  }

  return network;
};


