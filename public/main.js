function plural(num) {
	let magic_digits = [0, 1, 5, 6, 7, 8, 9];
	if(num%100 > 4 && num%100 < 21 || magic_digits.indexOf(num%10)>=0)
		return num + " раз";
	else
		return num + " раза";
}


function hello(name) {
	return "Здравствуйте, " + name + "!";
}


function onSubmit(form) {
	let data = {email: form.elements['email'].value};
	let res = request('/users', data);
	let user = form.elements['user'].value;
	
	form.hidden = true;
	document.write(hello(user), " Вы посетили данный сайт ", plural(parseInt(res)), '.');
}


if (typeof exports === 'object') {
	exports.hello = hello;
	exports.plural = plural;
}
