const toggle = document.getElementById('darkModeToggle');
const body = document.body;

// Load saved mode from localStorage
const darkMode = localStorage.getItem('dark-mode');
if (darkMode === 'enabled') {
	// body.classList.add('dark');
	document.documentElement.setAttribute('data-theme','dark');
}

toggle.addEventListener('click', () => {

	/* body.classList.toggle('dark');
	if (body.classList.contains('dark')) {
		localStorage.setItem('dark-mode', 'enabled');
	} else {
		localStorage.setItem('dark-mode', 'disabled');
	} */
	const currentTheme = document.documentElement.getAttribute('data-theme');
	if(currentTheme == 'light') {
		document.documentElement.setAttribute('data-theme','dark');
		localStorage.setItem('dark-mode', 'enabled');
	}
	else {
		document.documentElement.setAttribute('data-theme','light');
		localStorage.setItem('dark-mode', 'disabled');
	}
});
