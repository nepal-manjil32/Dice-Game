document.querySelector("h2").innerHTML="Let's Start The Game";
// FOR DICE OF PLAYER 1
no1 = (Math.floor(Math.random()*6))+1;
var randomAddress1 = "./"+no1+".png";
document.querySelectorAll('img')[0].setAttribute('src', randomAddress1);


// FOR DICE OF PLAYER 2
no2 = (Math.floor(Math.random()*6))+1;
var randomAddress2 = "./"+no2+".png";
document.querySelectorAll('img')[1].setAttribute('src', randomAddress2);

if(no1 > no2){
    document.querySelector("h2").innerHTML="🚩 Player 1 Won!";
}
else if(no2 > no1){
    document.querySelector("h2").innerHTML="🚩 Player 2 Won!";
}
else{
    document.querySelector("h2").innerHTML="🚩 It's a draw!";
}


