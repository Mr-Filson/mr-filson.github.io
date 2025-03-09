//JS я сделал чтобы уменьшить html файл
document.getElementById('evol').addEventListener('click', function() {
document.getElementById('orginal-content').style.display = 'none';
document.getElementById('secnd-content').style.display = 'block';
document.getElementById('did-whales-extinct').style.display = 'none';		
});
document.getElementById('back').addEventListener('click', function() {
document.getElementById('orginal-content').style.display = 'block';
document.getElementById('secnd-content').style.display = 'none';
document.getElementById('did-whales-extinct').style.display = 'none';
});
document.getElementById('ext').addEventListener('click', function() {
document.getElementById('did-whales-extinct').style.display = 'block';
document.getElementById('secnd-content').style.display = 'none';
document.getElementById('orginal-content').style.display = 'none';
});
document.getElementById('ihatejs').addEventListener('click', function() {
document.getElementById('orginal-content').style.display = 'none';
document.getElementById('secnd-content').style.display = 'block';
document.getElementById('did-whales-extinct').style.display = 'none';		
});


		
		
function year() {
	const cryear = new Date().getFullYear;
	const resultElement = document.getElementById('result');
			
	if(cryear >= 2100) {
		resultElement.textContent = 'Нет';
	}
	else {
		resultElement.textContent = 'Да';
	}
}
window.onload = year;

setTimeout(function(){
	document.body.classList.add('body_visible');
}, 200);

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');

    menuIcon.addEventListener('click', function () {
        navList.classList.toggle('active'); // Переключаем класс active
    });
});