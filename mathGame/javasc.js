var playing =false;
var score;
var action;
var timeremaing;
var numlife=3;

document.getElementById("resetstart").onclick=
function(){
if(playing == true){
    location.reload();
}else{
       score= 0;
       timeremaing=60;
       playing= true;
       document.getElementById('time').innerHTML= timeremaing;
       document.getElementById('scorevalue').innerHTML= score;
        show('timeremi');
       document.getElementById('resetstart').innerHTML = 'Reset';
       life=document.getElementById('life');
       life.style.display='block';
       
       document.getElementById('lifenum').innerHTML=numlife;
       startcount();
       hide('gameover');
       generateqa();

}
}
for(m=1;m<=4;m++){
document.getElementById('box'+m).onclick =
function (){
    if(playing == true){
        if(this.innerHTML == correctans){
            score++;
            document.getElementById('scorevalue').innerHTML = score;
            hide('wrong');
            show('correct');
            minustime= Math.floor(timeremaing/10);
                timeremaing+=minustime;
            setTimeout(function(){
                hide("correct");
            },1000)
            generateqa();
        }else{
            numlife--;
            document.getElementById('lifenum').innerHTML = numlife;
            hide('correct');
            show('wrong');
            setTimeout(function(){
                hide("wrong");
            },1000)
            if(numlife==0){
                gameover();
            }
                minustime= Math.floor(timeremaing/10);
                timeremaing-=minustime;
            generateqa();
        }
    }
} }
function startcount(){
 action= setInterval(function (){
      timeremaing-=1;
             document.getElementById('time').innerHTML = timeremaing;
   if(timeremaing == 0){
       gameover();
  }
 }, 1000)
}
function stopcount(){
    clearInterval(action);
}
function hide(id){
    document.getElementById(id).style.display='none';
}
function show(id){
    document.getElementById(id).style.display='block';
}

function generateqa(){
var x = 1+ Math.round(20*Math.random());
var y = 1+ Math.round(20*Math.random());
var znak = 1+ Math.round(2*Math.random());
if(znak === 1){
    correctans = y*x;
        operation = "x";
}else if(znak ===2){
    var x = 1+ Math.round(60*Math.random());
var y = 1+ Math.round(60*Math.random());
    correctans = y+x;
        operation = "+";
}
else if(znak ===3){
     x = 1+ Math.round(120*Math.random());
 y = 1+ Math.round(120*Math.random());
    if(x<y){
       var x = y;
       var y = x;
    }else{
         x = x;
        y = y;
    } if(x === y){
      x++;
    }
    correctans = x-y;
        operation = "-";
}

document.getElementById('pitanje').innerHTML = x + operation + y;
var correctPosition = 1+ Math.round(3*Math.random());
document.getElementById('box'+correctPosition).innerHTML = correctans;
for(i=1; i<5; i++){
    if(i != correctPosition){
       var wronganswer = correctans + 2;
       document.getElementById("box" + i).innerHTML = wronganswer;
       for(u=1;u<5;u++){
           if(i != u && u !=correctPosition){
       var wronganswer = correctans + 1;
       document.getElementById("box" + u).innerHTML = wronganswer; 
     for(t=1;t<5;t++){
           if(i != t && t !=correctPosition && t != u ){
       var wronganswer = correctans - 2;
       if(wronganswer == x || wronganswer == y){
           wronganswer +=5;
          
       }
       document.getElementById("box" + t).innerHTML = wronganswer; 
    
}
       }
}
       }
    }
       }

    }

    function gameover(){
        stopcount();
       show('gameover');
       document.getElementById('gameover').innerHTML="<p>Game over!</p><p>Vas rezultat je:"+score+"</p>";
hide('timeremi');
hide('correct');
hide('wrong');
playing = false; 
document.getElementById('resetstart').innerHTML="Start";
    }
