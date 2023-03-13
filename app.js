
//Seeting up Icons on the First section
const icons  =  document.querySelectorAll('.section1-icons i');
let i = 1;
setInterval(()=>{
    i++;
    const icon = document.querySelector('.change');
    icon.classList.remove('change');
        if(i>icons.length){
            icons[0].classList.add('change');
            i = 1;
            
        }else{
            icon.nextElementSibling.classList.add('change')
        }

},1200);


//Bringing map on the footer
const map = L.map('map').setView([0, 0], 13);

	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	const marker = L.marker([51.5, -0.09]).addTo(map)
		.bindPopup('<b>This is your Restaurant</b>').openPopup();

  function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent(`You clicked the map at ${e.latlng.toString()}`)
			.openOn(map);
	}

	map.on('click', onMapClick);

//Navbar toggeling
	document.querySelector('.menu2').addEventListener('click',()=>{
		document.querySelectorAll('.target').forEach((item)=>{
				item.classList.toggle('change1');
		})
	});

	//changing the color of the nav bar handler based on the scroll of the user and as far as its in the section 3
window.addEventListener('scroll',(e)=>{

	var scroll = window.pageYOffset;
	if (scroll < 300) {
	
		document.querySelector('.menu2').style.backgroundColor
		 = '#fcde67';
	} else if (scroll >= 300 && scroll < 600) {

		document.querySelector('.menu2').style.backgroundColor
		 = '#5bccf6';
	} else if (scroll >= 600 && scroll < 1200) {
		
		document.querySelector('.menu2').style.backgroundColor
		 = '#5bccf6';
		 
	} else if (scroll >= 1200 && scroll < 1800) {
	
		document.querySelector('.menu2').style.backgroundColor
		 = '#fcde67';
	} else if (scroll >= 1800 && scroll < 3000) {
		
		document.querySelector('.menu2').style.backgroundColor
		 = '#5bccf6';
	} else {
	
		document.querySelector('.menu2').style.backgroundColor
		 = '#5bccf6';
	}
	
	});


	