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

function byId(e){
    return document.getElementById(e);
}
function newEl(tag){
    return document.createElement(tag);
}
function newTxt(txt){
    return document.createTextNode(txt);
}

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
    var value5 = document.getElementById('dispIn5').value;
    var value6 = document.getElementById('dispIn6').value;

    var result1 = document.getElementById('dispRes1').value;
    var result2 = document.getElementById('dispRes2').value;
    var result3 = document.getElementById('dispRes3').value;
    var result4 = document.getElementById('dispRes4').value;
    var result5 = document.getElementById('dispRes5').value;
    var result6 = document.getElementById('dispRes6').value;
    
    var num1 = document.getElementById('dispNum1').value;
    var num2 = document.getElementById('dispNum2').value;
    var num3 = document.getElementById('dispNum3').value;
    var num4 = document.getElementById('dispNum4').value;
    var num5 = document.getElementById('dispNum5').value;
    var num6 = document.getElementById('dispNum6').value;
    var num7 = document.getElementById('dispNum7').value;
    var num8 = document.getElementById('dispNum8').value;
    var num9 = document.getElementById('dispNum9').value;
    var num10 = document.getElementById('dispNum10').value;
    var num11 = document.getElementById('dispNum11').value;
    var num12 = document.getElementById('dispNum12').value;
    var num13 = document.getElementById('dispNum13').value;
    var num14 = document.getElementById('dispNum14').value;
    var num15 = document.getElementById('dispNum15').value;
    var num16 = document.getElementById('dispNum16').value;
    var num17 = document.getElementById('dispNum17').value;
    var num18 = document.getElementById('dispNum18').value;

    var totalValue1 = value1 + value2 + value3;
    var totalValue2 = value4 + value5 + value6;
    var totalResult = result1 + result2 + result3 + result4 + result5 + result6;

    var multipleResult = totalValue1 * totalValue2;

    var line1 = parseInt(num1);
    var line2 = parseInt(num2) + parseInt(num3) + parseInt(num7);
    console.log(line2)
    var line3 = parseInt(num4) + parseInt(num5) + parseInt(num8) + parseInt(num9) + parseInt(num13);
    var line4 = parseInt(num6) + parseInt(num10) + parseInt(num11) + parseInt(num14) + parseInt(num15);
    var line5 = parseInt(num12) + parseInt(num16) + parseInt(num17);
    var line6 = parseInt(num18);

    if (multipleResult == totalResult && multipleResult != "" && line1 == result1 && line2 == result2 && line3 == result3 && line4 == result4 && line5 == result5 && line6 == result6) {
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
    document.getElementById('dispIn5').value = '';
    document.getElementById('dispIn6').value = '';

    document.getElementById('dispRes1').value = '';
    document.getElementById('dispRes2').value = '';
    document.getElementById('dispRes3').value = '';
    document.getElementById('dispRes4').value = '';
    document.getElementById('dispRes5').value = '';
    document.getElementById('dispRes6').value = '';

    document.getElementById('dispNum1').value = '';
    document.getElementById('dispNum2').value = '';
    document.getElementById('dispNum3').value = '';
    document.getElementById('dispNum4').value = '';
    document.getElementById('dispNum5').value = '';
    document.getElementById('dispNum6').value = '';
    document.getElementById('dispNum7').value = '';
    document.getElementById('dispNum8').value = '';
    document.getElementById('dispNum9').value = '';
    document.getElementById('dispNum10').value = '';
    document.getElementById('dispNum11').value = '';
    document.getElementById('dispNum12').value = '';
    document.getElementById('dispNum13').value = '';
    document.getElementById('dispNum14').value = '';
    document.getElementById('dispNum15').value = '';
    document.getElementById('dispNum16').value = '';
    document.getElementById('dispNum17').value = '';
    document.getElementById('dispNum18').value = '';
}