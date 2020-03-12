var age = 21;
var count = 0;
while(count++ < age) {
    console.log(count);
    if (count  > age/2){
        break;
    }
}
console.log("I'm old!");