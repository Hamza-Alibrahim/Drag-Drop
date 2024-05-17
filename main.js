let lists = document.getElementsByClassName('list'),
	rightBox = document.querySelector('.right'),
	leftBox = document.querySelector('.left');
for (let list of lists) {
	list.addEventListener('dragstart', (e) => {
		let selected = e.target;
		window.addEventListener('dragover', (e) => {
			e.preventDefault();
		});
		window.addEventListener('drop', (e) => {
			if (e.target === rightBox || e.target === leftBox) if (selected !== null) e.target.append(selected);
			selected = null;
		});
	});
}
