const p1={
    Score:0,
    Button: document.querySelector('#p1Btn'),
    Display: document.querySelector('#p1Display')
}
const p2={
    Score:0,
    Button: document.querySelector('#p2Btn'),
    Display: document.querySelector('#p2Display')
}



const reset=document.querySelector('#reset');
const winningScoreSelect=document.querySelector('#playTo');
let winningScore=5;
let isGameOver=false;

function updateScore(player,opponent){
    if(!isGameOver){
        player.Score+=1;
        if(player.Score===winningScore){
            isGameOver=true;
            player.Display.classList.add('has-text-success');
            opponent.Display.classList.add('has-text-danger');
            player.Button.disabled=true;
            opponent.Button.disabled=true;
        }
        player.Display.textContent=player.Score;
    }
}

p1.Button.addEventListener('click',function(){
    updateScore(p1,p2)
})
p2.Button.addEventListener('click',function(){
    updateScore(p2,p1)
})

winningScoreSelect.addEventListener('change', function(){
    winningScore=parseInt(this.value);
    resetEvery();
})
reset.addEventListener('click', resetEvery)
function resetEvery(){
    isGameOver=false;
    for(let p of [p1,p2]){
        p.Score=0;
        p.Display.textContent=0;
        p.Display.classList.remove('has-text-success','has-text-danger');
        p.Button.disabled=false
    }
}