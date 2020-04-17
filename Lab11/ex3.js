attributes = "Dan;52;52.5;-51.5";
var pieces = attributes.split(';');
for (i = 0; i < pieces.length; i++) {
    console.log(pieces[i], typeof pieces[i], isNonNegInt(pieces[i]));
}

pieces.forEach(printIt);
console.log(typeof function()

function printIt(item, index) {
    console.log(item, typeof item, isNonNegInt(item, true));
}

function isNonNegInt(q, returnErrors = false) {
    errors = []; // assume no errors at first
    if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
    return returnErrors ? errors : (errors.length == 0);
}