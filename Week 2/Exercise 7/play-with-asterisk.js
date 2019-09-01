// //1. Menyusun barisan bintang
var rows1 = 5;

for (var a = 0; a < rows1; a++) {
    console.log("*")
}

//2. Menyusun barisan bintang dengan nested looping
var rows2 = 5
for (var i = 0; i < rows2; i++) {
    var str = ""
    for (var j = 0; j < rows2; j++) {
        str = str += "*"
    }
    console.log(str)
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5
var str = ''
for (var b = 0; b < rows3; b++) {
        str = str + "*"
        console.log(str)
}
