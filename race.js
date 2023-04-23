let carone = document.querySelector('.carone');
let cartwo = document.querySelector('.cartwo');
let finish = false
let score = 100
document.querySelector('.score').innerHTML = score;
let bet = 0
document.querySelector('.bet').innerHTML = bet;

let carcolor = "";

let down = document.querySelector('.down'); 
let up = document.querySelector('.up');


up.onclick = () =>{
	if(bet>= score){
		up.disable = true;	
	}else{
		down.disable = false;
		bet = bet + 10
		document.querySelector('.bet').innerHTML = bet;

	}
}


down.onclick = () =>{
	if(bet <= 0){
		down.disable = true;	
	}else{
		up.disable = false	
		bet = bet - 10
		document.querySelector('.bet').innerHTML = bet;
	}
}

let start = (color) => {
finish = false
speedCar(carone, 'white');
speedCar(cartwo, 'black');
carcolor = color;
score = score - bet;
}
	let speedCar = (car, color) => {
		let margin = 0;


		let inter = setInterval(() => 
		{
			let speed = Math.random() * 0.1
			if(margin < 94){
				margin = margin + speed;
				car.style.marginLeft = margin + '%';
			}else{
				finish = true
				clearInterval(inter);
				if(carcolor == color){
					score = score + bet * 2
					document.querySelector('.score').innerHTML = score;
				}
			};
		}, 2)
	}
