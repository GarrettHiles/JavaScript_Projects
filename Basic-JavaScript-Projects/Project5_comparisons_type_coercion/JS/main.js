// combining 10 and 5 into 105
document.write("10" + 5);
//determining what type of value it is
document.write(typeof "hello broskis")
// displaying infinte numbers and negitive infinte numbers.
document.write(-2E310);

document.write(2E310);
// testing out greater than signs for true or false
document.write( 2 > 10);

document.write(10 > 2);

console.log( 4 + 4);

console.log( 3 < 1);
//checking whether they are equal to eachother or not
document.write( 10 == 10);

document.write( 45 == 34);
//comparing values with the triple =
X= 67
Y="67"

console.log( X === Y);

C= 5
D= 5

console.log( C === D)

E = 5
F=6
console.log( E===F)

G= "Garrett"
H= 50

console.log(G===H)
//Testing the AND and OR logic operators
console.log( 5 > 3 && 10 > 2)
console.log( 11 > 3 || 3 > 11) 
console.log( 5 > 3 && 1 > 2)
console.log( 11 < 3 || 3 > 11)
//testing the not function 
function not_function() {
    document.getElementById("Not").innerHTML = ! (20>10);
}