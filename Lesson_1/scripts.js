// funkcja obracanie kury
		function kura(sw){
			let pic;
			if (!sw){
				pic = 'static/kura_lewo.jpg';
			}else{
				pic = 'static/kura_prawo.jpg';
			}
			document.getElementById('kura').src = pic;
		}
