let redMode = localStorage.getItem('redMode');
const btn = document.querySelector('button');
const sect = document.querySelector('section');
const sectis = document.querySelectorAll('i');


const enableRedMode = () => {
	btn.classList.add('circle-red');
	sect.classList.add('section-red');

	for (let i = 0; i < sectis.length; i++) {
		const secti = sectis[i];
		secti.classList.add('snowball');
	};

	localStorage.setItem("redMode", "enabled");
};


const disableRedMode = () => {
	btn.classList.remove('circle-red');
	sect.classList.remove('section-red');

	for (let i = 0; i < sectis.length; i++) {
		const secti = sectis[i];
		secti.classList.remove('snowball');
	};

	localStorage.setItem('redMode', null);
};


if (redMode === 'enabled') {
	enableRedMode();
}


btn.addEventListener('click', () => {
	redMode = localStorage.getItem('redMode');
	if (redMode !== 'enabled')
	{
		enableRedMode();
		console.log(redMode);
	}
	else
	{
		disableRedMode();
		console.log(redMode);
	}
});