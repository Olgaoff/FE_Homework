function start_game () {
    object.classList.add('start');
}

function finish_game(){
   alert('You lose');
   object.classList.remove('start');

}

function miss(event) {
if (event.target.id == "area") {
score--;
document.title = `Score ${score}`;
miss_sound.currentTime = 0;
miss_sound.play();

if (score <=0){
finish_game()
}
}
}

function hit () {
    score ++;
    document.title = `Score ${score}`;
    object.classList.remove('start');
    void object.offsetWidt;
    object.classList.add('start')

    change_object_backgraoud();
    change_object_position();
    change_object_size();

    hit_sound.currentTime =0;
    hit_sound.play();
}
function change_object_size() {
const size = 40 + Math.random() * 80;
object.style.width = `${size}px`;
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

const hit_sound = new Audio('sounds/hit.wav');
const miss_sound = new Audio('sounds/miss.wav');