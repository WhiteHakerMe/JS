// function

// function FirstNum (num1, num2) {
//     console.log(num1 + num2);
// }
// FirstNum(+prompt("brinchi sonni kriting"), +prompt("ikki sonni kriting")) // Buyerda Number == sonlarga funksia tuzilgan

// function contextStr (text) {
//     console.log(text.split("").reverse("").join("").toLowerCase());
// }            // Str ga funksia tuzish code
// contextStr(prompt("Matin kriting"))

// function FindAge (num) {
//     console.log(new Date().getFullYear() - num);
// }
// FindAge(prompt("tug'ilgan Yilingizni kriting")) //Dehqoncha usul
// function Borthday(year) {
//     if (year >= new Date().getFullYear()) {
//         console.log("Hatolik");
//     } else {
//         console.log(`Siz ${new Date().getFullYear() - year} yoshdasiz`);
//     }
// }
// Borthday(prompt("Tug'ilgan Yilingizni kriting")) // engYaxshi usul
function boshOhirHarflar(uzunMatn) {
    // Matni uzunligini tekshiramiz
    if (uzunMatn.length === 0) {
        return "Matn bo'sh!";
    }

    // Matning birinchi harfini olish
    var boshHarf = uzunMatn[0];

    // Matning oxirgi harfini olish
    var ohirHarf = uzunMatn[uzunMatn.length - 1];

    // Bosh va ohir harflarni qaytarish
    return "Bosh harf: " + boshHarf + ", Ohirgi harf: " + ohirHarf;
}

// Test qilish
var testMatn = "bronbir matini bosh va ohirgi harflarni oladigan";
var natija = boshOhirHarflar(testMatn);
console.log(natija);