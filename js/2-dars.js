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
function Borthday(year) {
    if (year >= new Date().getFullYear()) {
        console.log("Hatolik");
    } else {
        console.log(`Siz ${new Date().getFullYear() - year} yoshdasiz`);
    }
}
Borthday(prompt("Tug'ilgan Yilingizni kriting"))