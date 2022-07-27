canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

	window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
			if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
				
				alfabetokey();
				document.getElementById("d1").innerHTML = "Você está pressionando a tecla alfabeto(A-Z e a-z)";
				console.log(alfabetokey);
			}

			else if(keyPressed >=48 && keyPressed<=57){

				numerokey();
				document.getElementById("d1").innerHTML = "Você está pressionando a tecla número(0-9)";
				console.log(numerokey);				
			}

			else if(keyPressed >=37 && keyPressed<=40){

				direcionalKey();
				document.getElementById("d1").innerHTML = "Você está pressionando a tecla número(cima/baixo/esquerda/direita)";
				console.log(numerokey);
			}

			else if((keyPressed ==17)|| (keyPressed ==18 || keyPressed ==27)){

				especialkey();
				document.getElementById("d1").innerHTML = "Você está pressionando a tecla número(ctrl/alt/esc)";
				console.log(numerokey);
			}

			else{

				outrakey();
				document.getElementById("d1").innerHTML = "Você está pressionando outra tecla(enter/shift/del)";
				console.log(numerokey);
			}

			}

			function alfabetokey()
				{
					img_image = "alfabeto.png";
					add();

				}
			function numerokey()
				{
					img_image = "numero.png";
					add();
				}
			function direcionalkey()
				{
					img_image = "direcional.png";
					add();
				}
			function especialkey()
				{
					img_image = "especial.png";
					add();	
				}
			function outrakey()
				{
					img_image="outraskey.png";
					add();
				}
					
