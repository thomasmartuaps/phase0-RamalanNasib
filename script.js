function moneyDesc() {
let monthResult = '';
let name = document.getElementById('name').value;
let month = document.getElementById('month').value;

if (month % 2 == 0) {
    monthResult = 'semoga anda cepat kaya!';
}
else {
    monthResult = 'anda akan mendapatkan satu juta dolar Zimbabwe!';
}
let result = document.getElementById('result')
result.innerHTML = 'Go!';
document.getElementById('result').style.backgroundColor = "#1c244f";
setTimeout(function() {result.innerHTML = 'Memulai ramalan...'; document.getElementById('result').style.backgroundColor = "grey";}, 500);
setTimeout(function() {result.innerHTML = 'AI sedang meramal...'; document.getElementById('result').style.backgroundColor = "#e45d3e"}, 1000);
// setTimeout(function() {result.innerHTML = 'AI sedang meramal...'}, 500);
setTimeout(function() {result.innerHTML = 'Mencari hasil...'; document.getElementById('result').style.backgroundColor = "#e9de45";}, 2000);
setTimeout(function() {
    result.innerHTML = name + ',' + ' ' + monthResult; 
    if (!name) {
        result.innerHTML = 'Mana namamu?';
    } 
    document.getElementById('result').style.backgroundColor = "#a53143"
}, 3000);
// clearTimeout(result.innerHTML);
// result.innerHTML = name + ',' + ' ' + monthResult;
// result.innerHTML = name + ',' + ' ' + monthResult;
// if (!name) {
//     result.innerHTML = 'Mana namamu?';
// }
}

// function firstFunction() {
//     result = document.getElementById('result');
//     result.innerHTML += ` You clicked! Congratulations. `
// }