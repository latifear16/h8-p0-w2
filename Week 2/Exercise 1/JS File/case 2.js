var year = 2020

if (year % 4 === 0 && year % 100 !== 0) {
    console.log("Tahun Kabisat")
}

else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    console.log("Tahun Kabisat")
}

else {
    console.log("Bukan Tahun Kabisat")
}