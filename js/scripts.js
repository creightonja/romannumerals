var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var thousands = ["", "M", "MM", "MMM"];

function romanFinder(num) {
  if ((num > 3999) || (num < 1)) {
    return "Error: Not between 1 and 3999.";
  }
  else {
    var numbers = (""+num).split('');

    var one = ones[numbers.pop()];
    var ten = tens[numbers.pop()];
    var hundred = hundreds[numbers.pop()];
    var thousand = thousands[numbers.pop()];

    if (!thousand){
      if (!(hundred)) {
        if (!(ten)) {
          var numeral = one;
        } else {
          var numeral = ten + one;
        }
      } else {
        var numeral = hundred + ten + one;
      }
    } else {
      var numeral = thousand + hundred + ten + one;
    }

    return numeral;
  }
}
