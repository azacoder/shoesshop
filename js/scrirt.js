
function deldiv1 () { 
    document.getElementById("hr1").remove();   
    document.getElementById("box1").remove();
}

function deldiv2 () { 
    document.getElementById("hr2").remove(); 
    document.getElementById("box2").remove();
}

function deldiv3 () { 
    document.getElementById("hr3").remove();   
    document.getElementById("box3").remove();
    
}


//// 

let salesnumber = document.getElementById("salesnumber"); 
let btnplus = document.getElementById("salesplus");
let btnminus = document.getElementById("salesminus");
let prise = document.getElementById("price"); 
let number = 0 ; 
let priseValue = 420; 
btnplus.onclick = function () {
    if(number <=9 ) { 
        number++;
        salesnumber.innerHTML = number;
        prise.innerHTML = `${priseValue * number}$`;
    }
};

btnminus.onclick = function () {
    if(number >=1 ) { 
        number--;
        salesnumber.innerHTML = number;
        prise.innerHTML = `${priseValue * number}$`;
    }
};

//////////////////////////////////////////////////

let salesnumber2 = document.getElementById("salesnumber2"); 
let btnplus2 = document.getElementById("salesplus2"); 
let btnminus2 = document.getElementById("salesminus2"); 
let prise2 = document.getElementById("price2"); 

let number2 = 0; 
let priceValue2 = 350; 

btnplus2.onclick = function () {
    if(number2 <=9 ) { 
        number2++;
        salesnumber2.innerHTML = number2;
        prise2.innerHTML = `${priceValue2 * number2} $`;
    }
};
btnminus2.onclick = function () { 
    if(number2 >= 1 ) {
        number2--;
        salesnumber2.innerHTML=number2; 
        prise2.innerHTML = `${priceValue2 * number2} $`;
    }
};

//////////////////////////////////////////////

let salesnumber3 = document.getElementById("salesnumber3"); 
let btnplus3 = document.getElementById("salesplus3"); 
let btnminus3 = document.getElementById("salesminus3"); 
let prise3 = document.getElementById("price3"); 

let number3 = 0; 
let priceValue3 = 475; 

btnplus3.onclick = function () {
    if(number3 <=9 ) { 
        number3++;
        salesnumber3.innerHTML = number3;
        prise3.innerHTML = `${priceValue3 * number3} $` ;
    }
};
btnminus3.onclick = function () { 
    if(number3 >= 1 ) {
        number3--;
        salesnumber3.innerHTML=number3; 
        prise3.innerHTML = `${priceValue3 * number3} $` ;
    }
};

