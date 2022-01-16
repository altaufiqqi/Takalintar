// const takalintar = {
//     displayInitiate1: '-',
//     displayInitiate2: '-',
// };

// const displayInit1 = document.querySelector("#displayInitiate1");
// const displayInit2 = document.querySelector("#displayInitiate2");
// const displayInit3 = document.querySelector("#displayInitiate3");
// const displayInit4 = document.querySelector("#displayInitiate4");
// const displayInit5 = document.querySelector("#displayInitiate5");
// const displayInit6 = document.querySelector("#displayInitiate6");
// const buttons = document.querySelectorAll(".button");
// const clear = document.querySelector(".clear");
// const clearAll = document.querySelector(".all-clear");



// function updateDisplay1(){
//     document.querySelector("#displayInitiate1").innerText = takalintar.displayInitiate1;
// }

// function updateDisplay2(){
//     document.querySelector("#displayInitiate2").innerText = takalintar.displayInitiate2;
// }

// function clearTakalintar() {
//     takalintar.displayInitiate1 = '-';
//     takalintar.displayInitiate2 = '-';
// }

// function inputDigit(digit) {
//     takalintar.displayInitiate1 = digit;
// }

// function inputDigit2(digit2){
//     takalintar.displayInitiate2 = digit2;
// }

// for (let button of buttons) {
//     button.addEventListener('click', function (event) {
//         const target = event.target 

//         if (target.classList.contains('clear')) {
//             clearTakalintar();
//             updateDisplay1();
//             updateDisplay2();
//             return;
//         }

//         inputDigit(target.innerText);
//         inputDigit2(target.innerText);
//         updateDisplay1();
//         updateDisplay2();
//         return;
//     });
// }

const disInit = document.querySelectorAll('.displayInitiate');
const disNum = document.querySelectorAll('.displayNumber');
const disRes = document.querySelectorAll('.displayRes');

disInit[0].focus();
disInit.forEach((disI, index) => {
    disI.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <= 9){
            disInit[index].value = '';
            setTimeout(() => disInit[index + 1].focus(), 10);
        }
        else if(e.key === 'Backspace'){
            setTimeout(() => disInit[index - 1].focus(), 10);
        }
    });
});

disNum[0].focus();
disNum.forEach((disN, indexNum) => {
    disN.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <= 9){
            disNum[indexNum].value = '';
            setTimeout(() => disNum[indexNum + 1].focus(), 10);
        }
        else if(e.key === 'Backspace'){
            setTimeout(() => disNum[indexNum - 1].focus(), 10);
        }
    });
});

disRes[0].focus();
disRes.forEach((disR, indexRes) => {
    disR.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <= 9){
            disRes[indexRes].value = '';
            setTimeout(() => disRes[indexRes + 1].focus(), 10);
        }
        else if(e.key === 'Backspace'){
            setTimeout(() => disRes[indexRes - 1].focus(), 10);
        }
    });
});
// buttons.forEach( button => {
//     button.addEventListener('click', (e)=>{
//       let disNum = "";
      
//       if(disNum === ""){
//         disNum += e.target.innerText;
//         displayInit1.innerText = disNum;
//       }
//       else if(disNum !== ""){
//         disNum += e.target.innerText;
//         displayInit2.innerText = disNum;
//       }
//     })
//   })