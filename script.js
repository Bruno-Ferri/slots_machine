var slot1, slot2, slot3;
var botao_jogar;

       function getRandomIntInclusive(min, max) {
       min = Math.ceil(min);
       max = Math.floor(max);
       return Math.floor(Math.random() * (max - min + 1)) + min;
       }

       function jogar(){
       slot1 = getRandomIntInclusive(1, 5);
       slot2 = getRandomIntInclusive(1, 5);
       slot3 = getRandomIntInclusive(1, 5);
       
       switch (slot1){
          case 1:
           document.getElementById("img1").src="./img/1.jpg";
          break;
          case 2:
           document.getElementById("img1").src="./img/2.jpg";
          break;
          case 3:
           document.getElementById("img1").src="./img/3.jpg";
          break;
          case 4:
           document.getElementById("img1").src="./img/4.jpg";
          break;
          case 5:
           document.getElementById("img1").src="./img/5.jpg";
          break;
       }
       switch (slot2){
          case 1:
           document.getElementById("img2").src="./img/1.jpg";
          break;
          case 2:
           document.getElementById("img2").src="./img/2.jpg";
          break;
          case 3:
           document.getElementById("img2").src="./img/3.jpg";
          break;
          case 4:
           document.getElementById("img2").src="./img/4.jpg";
          break;
          case 5:
           document.getElementById("img2").src="./img/5.jpg";
          break;
       }
       switch (slot3){
          case 1:
           document.getElementById("img3").src="./img/1.jpg";
          break;
          case 2:
           document.getElementById("img3").src="./img/2.jpg";
          break;
          case 3:
           document.getElementById("img3").src="./img/3.jpg";
          break;
          case 4:
           document.getElementById("img3").src="./img/4.jpg";
          break;
          case 5:
           document.getElementById("img3").src="./img/5.jpg";
          break;
       }
       
       }
       
       botao_jogar = document.getElementById("btn_jogar");
       botao_jogar.addEventListener("click", jogar); 
   
