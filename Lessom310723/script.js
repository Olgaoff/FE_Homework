// // выводит отрицательные числа
// function print_negative_numbers(numbers) {

//     for (let i = 0; i < numbers.length; i++) {
 
//       if (numbers[i] < 0) {
//        console.log(numbers[i]);
//       }
 
//     }
 
//  }
 
//  const numbers = [1, -10, -20, 500, 600, -1];
//  print_negative_numbers(numbers);


function start_game () {
    object.classList.add('start');
}

function miss(event) {
if (event.target.id == "area") {
score--;
document.title = `Score ${score}`;
}
}

function hit () {
    score ++;
    document.title = `Score ${score}`;
    // object.classList.remove('start');
    // void object.offsetWidt;
    // object.classList.add('start')
}
function change_object_backgraoud() {
    const colors = ['purple', 'gold','orange', 'blue', 'red']
    const index = Math.floor(Math.randome() * colors.length);
    object.style.backgraund = colors[index];
}

function change_object_position() {
    console.log('position changed');
    const ramdom_offset = Math.floor(Math.randome() * 340);
    object.style.left = `${ramdom_offset}px`;

}

let score = 0;
let object = document.querySelector('#object')