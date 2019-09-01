// //1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA')
var i = 2;
while (i <= 20) {
    console.log(i + ' - I love coding')
    i += 2
    
    
}

console.log('LOOPING KEDUA')
var l = 20;
while (l > 0) {
    console.log(l + ' - I will become full stack developer')
    l -= 2
    
    
}

//2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA')
for (var x = 1; x <= 20; x++) {
    console.log (x + ' - I love coding')
}

console.log('LOOPING KEDUA')
for (var z = 20; z >= 0; z--) {
    console.log (z + ' - I will become full stack developer')
}

//3. Angka ganjil dan genap
for (var y = 1; y <= 100; y++) {
    if (y % 2 == 0) {
        console.log('\"Genap\"' )
    }
    else {
        console.log('\"Ganjil\"')
    }
}

for (var a = 1; a <= 100; a += 2)
    if (a % 3 == 0) {
        console.log('\"' + a + ' kelipatan 3\"')
    }
    else {
        console.log('\"\"')
    }

for (var b = 1; b <= 100; b += 5)
    if (b % 6 == 0) {
        console.log('\"' + b + ' kelipatan 6\"')
    }
    else {
        console.log('\"\"')
    }

for (var c = 1; c <= 100; c += 9)
    if (c % 10 == 0) {
        console.log('\"' + c + ' kelipatan 10\"')
    }
    else {
        console.log('\"\"')
    }