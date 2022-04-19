const disInit = document.querySelectorAll('.displayInitiate');
const disNum = document.querySelectorAll('.displayNumber');
const disRes = document.querySelectorAll('.displayRes');

function byId(e){
    return document.getElementById(e);
}
function newEl(tag){
    return document.createElement(tag);
}
function newTxt(txt){
    return document.createTextNode(txt);
}


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

disRes[0];
disRes.forEach((disR, indexRes) => {
    disR.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <= 9){
            disRes[indexRes].value = '';
            setTimeout(() => disRes[indexRes + 1], 10);
        }
        else if(e.key === 'Backspace'){
            setTimeout(() => disRes[indexRes - 1], 10);
        }
    });
});

window.addEventListener('load', mInit, false);

function mInit()
{
    byId('validasi').addEventListener('click', onBtnClick, false);
}

function onBtnClick()
{
    var value1 = document.getElementById('dispIn1').value;
    var value2 = document.getElementById('dispIn2').value;
    var value3 = document.getElementById('dispIn3').value;    
    var value4 = document.getElementById('dispIn4').value;

    var result1 = document.getElementById('dispRes1').value;
    var result2 = document.getElementById('dispRes2').value;
    var result3 = document.getElementById('dispRes3').value;
    var result4 = document.getElementById('dispRes4').value;

    var totalValue1 = value1 + value2;
    var totalValue2 = value3 + value4;
    var totalResult = result1 + result2 + result3 + result4;

    var multipleResult = totalValue1 * totalValue2;

    if (multipleResult == totalResult && multipleResult != "") {
      alert ("Selamat! Perhitungan Kamu Benar!");
    } else {
        alert ("Wah, Perhitungan Kamu Masih Belum Tepat. Yuk Diperiksa Lagi!");
    }

    console.log(totalValue1);
    console.log(totalValue2);
    console.log(totalResult);
}

function clearValue(){
    document.getElementById('dispIn1').value = '';
    document.getElementById('dispIn2').value = '';
    document.getElementById('dispIn3').value = '';
    document.getElementById('dispIn4').value = '';

    document.getElementById('dispRes1').value = '';
    document.getElementById('dispRes2').value = '';
    document.getElementById('dispRes3').value = '';
    document.getElementById('dispRes4').value = '';

    document.getElementById('dispNum1').value = '';
    document.getElementById('dispNum2').value = '';
    document.getElementById('dispNum3').value = '';
    document.getElementById('dispNum4').value = '';
    document.getElementById('dispNum5').value = '';
    document.getElementById('dispNum6').value = '';
    document.getElementById('dispNum7').value = '';
    document.getElementById('dispNum8').value = '';
}