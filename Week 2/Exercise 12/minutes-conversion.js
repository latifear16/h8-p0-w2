function konversiMenit(menit) {
    var minutes = menit % 60
    var hours = (menit - minutes) / 60
    
    if (String(minutes).length < 2) {
        return hours + ':' + '0' + minutes
    }

    else {
        return hours + ':' + minutes
    }
}

console.log(konversiMenit(63)) 
console.log(konversiMenit(124)) 
console.log(konversiMenit(53)) 
console.log(konversiMenit(88))
console.log(konversiMenit(120))