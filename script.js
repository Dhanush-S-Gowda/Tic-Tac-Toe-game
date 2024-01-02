let mbut = document.getElementsByClassName("mplayer");
let sbut = document.getElementsByClassName("splayer");
let boxes = document.querySelectorAll(".boxes");
let refreshBoxes = document.querySelector(".refresh-box");

let cplayer = true;
const audio = document.getElementById("myAudio");
const winPattern = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6]
]
const winmess = [
     'Congratulations!',
     'Well done!',
     'Bravo!',
     'Fantastic job!',
     'Outstanding performance!',
     'You nailed it!',
     'Incredible work!',
     'Kudos to you!',
     'You\'re a champion!',
     'Exceptional effort!',
     'Marvelous victory!',
     'You deserve it!',
     'Hats off to you!',
     'Great success!',
     'You make us proud!',
     'Amazing accomplishment!',
     'Way to go!',
     'Superb performance!',
     'Congratulations on your well-deserved success!',
     'You are truly exceptional!'
 ];
 const losemess = [
     'Keep your head up!',
     'Don\'t be discouraged!',
     'You gave it your best shot!',
     'Your effort was commendable!',
     'Keep pushing forward!',
     'Success is a journey, not a destination!',
     'Remember, every setback is a setup for a comeback!',
     'You\'ll get them next time!',
     'Failure is the opportunity to begin again more intelligently!',
     'Your resilience is admirable!',
     'Learn from the experience and grow stronger!',
     'Your time will come!',
     'Success is not final, failure is not fatal; it\'s the courage to continue that counts!',
     'Your dedication is inspiring!',
     'You are on the path to success!',
     'Keep believing in yourself!',
     'It\'s not the end; it\'s a new beginning!',
     'Your journey is just getting started!',
     'Your effort matters more than the outcome!',
     'You\'re already a winner in our eyes!'
 ];
function refresh(){
     refreshBoxes.style.display = "inline";
     let game = document.querySelector(".f-hide");
     game.style.display = "flex";
     refreshBoxes.innerText = "New game";
     refreshBoxes.addEventListener("click", ()=>{
          location.reload();
     })
}
const checkwinner = () =>{
     for (const i of winPattern) {
          let box1 = boxes[i[0]].innerText;
          let box2 = boxes[i[1]].innerText;
          let box3 = boxes[i[2]].innerText;
          if(box1 != "" && box2 !="" &&  box3 != ""){
               if(box1 == box2 && box2 == box3){
                    let winner = document.querySelector(".result");
                    if(box1 === "X"){
                         winner.innerText = "Player 1 (X) has won";
                         const randomMess = winmess[parseInt(Math.random() * winmess.length)];
                         winner.innerHTML = winner.innerText + `<br><i>${randomMess}</i>`;
                    }
                    else{
                         winner.innerText = "Player 2 (O) has won";
                         const randomMess = winmess[parseInt(Math.random() * winmess.length)];
                         winner.innerHTML = winner.innerText + `<br><i>${randomMess}</i>`;
                    }
                    
                    audio.volume = 0.5;
                    audio.play();
               }
               
          }
     }
}
function mplayer(){
     refresh();
     mbut[0].disabled= true ;
     sbut[0].style.display = "none";
     boxes.forEach(box => {
         box.addEventListener("click", ()=>{
          if(cplayer){
               box.innerText = "X";
               cplayer = false;
          }
          else{
               box.innerText = "O";
               cplayer = true;
          }
          box.disabled = true;
          checkwinner();
         })
     });

}
function splayer(){
     refresh();
     sbut[0].disabled = true;
     mbut[0].style.display = "none";
     let indexArray = [0,1,2,3,4,5,6,7,8];
     boxes.forEach((box, index) => {
          box.addEventListener("click", ()=>{
          let mindex = indexArray.indexOf(index);
          indexArray.splice(mindex, 1);

          let cindex = parseInt(0 + (indexArray.length)*Math.random());
          let cmove = indexArray[cindex];
          indexArray.splice(cindex, 1);
          
          box.innerText = "X";
          if(cmove!= undefined){
             boxes[cmove].innerText = "O";  
          }
          for (const i of winPattern) {
               let box1 = boxes[i[0]].innerText;
               let box2 = boxes[i[1]].innerText;
               let box3 = boxes[i[2]].innerText;
               if(box1 != "" && box2 !="" &&  box3 != ""){
                    if(box1 == box2 && box2 == box3){
                         let winner = document.querySelector(".result");
                         if(box1 === "X"){
                              winner.innerText = "You have won";
                              const randomMess = winmess[parseInt(Math.random() * winmess.length)];
                              winner.innerHTML = winner.innerText + `<br><i>${randomMess}</i>`;
                         }
                         else{
                              winner.innerText = "Computer has won";
                              const randomMess = losemess[parseInt(Math.random() * losemess.length)];
                              winner.innerHTML = winner.innerText + `<br><i>${randomMess}</i>`;
                         }
                         
                         audio.volume = 0.5;
                         audio.play();
                    }
                    
               }
          }
          box.disabled = true; 
          })
          
      });

}
