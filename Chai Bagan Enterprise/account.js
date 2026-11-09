const themeStorageKey = 'chai-bagan-theme';
const themeToggle = document.querySelector('.theme-toggle');
const authForm = document.querySelector('.auth-form');
const authStatus = document.querySelector('.auth-status');

function readSavedTheme() {
	try {
		return localStorage.getItem(themeStorageKey);
	} catch {
		return null;
	}
}

function setTheme(isDark) {
	document.body.classList.toggle('theme-dark', isDark);
	if (!themeToggle) return;
	themeToggle.textContent = isDark ? '☼' : '◐';
	themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
	themeToggle.setAttribute('aria-pressed', String(isDark));
}

const savedTheme = readSavedTheme();
setTheme(savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);

themeToggle?.addEventListener('click', () => {
	const nextTheme = document.body.classList.contains('theme-dark') ? 'light' : 'dark';
	setTheme(nextTheme === 'dark');
	try {
		localStorage.setItem(themeStorageKey, nextTheme);
	} catch {
		// Theme changes still apply for the current page.
	}
});

document.querySelectorAll('[data-password-toggle]').forEach(button => {
	button.addEventListener('click', () => {
		const input = document.querySelector(button.dataset.passwordToggle);
		if (!input) return;
		const visible = input.type === 'text';
		input.type = visible ? 'password' : 'text';
		button.textContent = visible ? 'Show' : 'Hide';
		button.setAttribute('aria-label', visible ? 'Show password' : 'Hide password');
	});
});

authForm?.addEventListener('submit', event => {
	event.preventDefault();
	if (!authForm.reportValidity()) return;
	authStatus.textContent = 'This is a visual preview. Authentication is not connected, and no account data was sent or saved.';
	authForm.querySelectorAll('input[data-password]').forEach(input => {
		input.value = '';
	});
});
