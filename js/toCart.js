// var cartItem = {
//     "chairs":[
//         {"Name":"Fluffy Chair", "Price":"5999"},
//         {"firstName":"Anna", "lastName":"Smith"},
//         {"firstName":"Peter", "lastName":"Jones"}
//     ]
// }

var rate = [5999,12999,9999]
// console.log(typeof(rate[0]))
var qty1 = parseInt(document.getElementById('one').value);
var qty2 = parseInt(document.getElementById('two').value);
var qty3 = parseInt(document.getElementById('three').value);
// console.log(qty1.value)
var total;

function giveTotal(){
    console.log(typeof(rate[0]))

   total = parseInt(qty1)*rate[0] + parseInt(qty2)*rate[1] + parseInt(qty3)*rate[3];
   console.log(total)
   document.getElementById('total-amt').innerText = parseInt(total)
}

