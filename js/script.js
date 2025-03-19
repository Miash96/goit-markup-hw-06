"use strict"

document.addEventListener('click', documentClick);

function documentClick(e) {
	const targetItem = e.target;
	if (targetItem.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open');
	}
}

// const openModal = document.getElementById('openModal');
// const closeModal = document.getElementById('closeModal');
// const modal = document.getElementById('modal');
// const overlay = document.getElementById('modalOverlay');
// const body = document.body;


// openModal.addEventListener('click', function (event) {
// 	event.preventDefault();
// 	modal.style.display = 'block';
// 	overlay.style.display = 'block';
// 	body.classList.add('modal-open');
// });


// function close() {
// 	modal.style.display = 'none';
// 	overlay.style.display = 'none';
// 	body.classList.remove('modal-open');
// }

// closeModal.addEventListener('click', close);
// overlay.addEventListener('click', close);