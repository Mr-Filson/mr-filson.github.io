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
		
		
function year() {
	const cryear = new
Date().getFullYear;
	const resultElement = document.getElementById('result');
			
	if(cryear >= 2100) {
		resultElement.textContent = 'Да';
	}
	else {
		resultElement.textContent = 'Нет';
	}
}
window.onload = year;	