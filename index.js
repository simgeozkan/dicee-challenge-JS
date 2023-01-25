var randomNumber1=Math.random(); // ı create a random number between 0-0.9999
randomNumber1=Math.floor(randomNumber1*6)+1;// ı make my number between 1-6,then round to floor

var imageName=("dice"+randomNumber1); //ı add number that ı created to image name
var randomImageSource="images/" +imageName+".png"; // ı sum up image name with png string 

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource );// ı reach first element of img array then change src attribute with randomimagesource





var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;

var imageName2=("dice"+randomNumber2);
var randomImageSource="images/" +imageName2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource );

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩 PLAYER 1 WON !";
}

else if (randomNumber2>randomNumber1)

{
    document.querySelector("h1").innerHTML="PLAYER 2 WON 🚩 !";
}

else

 document.querySelector("h1").innerHTML="🚩 DRAW!!! 🚩 ";










