
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