let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');

form.addEventListener('submit', fn => {
	fn.preventDefault();
	
	checkInputs();
});

function checkInputs() {

	
	
	
	  if(passwordValue !== password2Value) {
		error(password2);
	} else{
		success(password2);
	}
}
function error(input) {
	let formControl = input.parentElement;

	formControl.className = 'form-control error';
	
}

function success(input) {
	let formControl = input.parentElement;
	formControl.className = 'form-control success';
}

