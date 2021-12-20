let box1 = document.getElementById('1');
let box2 = document.getElementById('2');
let box3 = document.getElementById('3');
let h1 = document.getElementById('h1');
let h2 = document.getElementById('h2');
let h3 = document.getElementById('h3');


countBtn1 = 0;

countBtn2 = 0;

countBtn3 = 0;


function increaseLikes(){
        countBtn1++;
        h1.innerText = countBtn1 + ' Likes';
        return countBtn1;
    }


    function increaseLikes2(){
        countBtn2++;
        h2.innerText = countBtn2 + ' Likes';
        return countBtn2;
    }

    
function increaseLikes3(){
    countBtn3++;
    h3.innerText = countBtn3 + ' Likes';
    return countBtn3;
}

