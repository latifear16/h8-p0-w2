function xo(str) {
    var x = 0;
    var o = 0;

    for(var i = 0; i < str.length ; i++) {

    if (str[i] === 'x') {
      x++
    }

    else if (str[i] === 'o') {
      o++
    }

  }

    if (o === x) {
      return true
    } 
    
    else {
      return false
    }
  }

console.log(xo('xoxoxo'));
console.log(xo('oxooxo')); 
console.log(xo('oxo')); 
console.log(xo('xxxooo')); 
console.log(xo('xoxooxxo'));