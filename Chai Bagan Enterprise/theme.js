const themeStorageKey = 'chai-bagan-theme';
const themePreference = window.matchMedia('(prefers-color-scheme: dark)');

function readThemePreference() {
  try {
    return localStorage.getItem(themeStorageKey);
  } catch {
    return null;
  }
}

function applyTheme(isDark) {
  document.body.classList.toggle('theme-dark', isDark);
  document.querySelectorAll('.theme-toggle').forEach(button => {
    button.textContent = isDark ? '☼' : '◐';
    button.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    button.title = isDark ? 'Switch to light theme' : 'Switch to dark theme';
    button.setAttribute('aria-pressed', String(isDark));
  });
}

const savedTheme = readThemePreference();
applyTheme(savedTheme ? savedTheme === 'dark' : themePreference.matches);

document.addEventListener('click', event => {
  const button = event.target.closest('.theme-toggle');
  if (!button) return;

  event.preventDefault();
  event.stopImmediatePropagation();
  const nextTheme = document.body.classList.contains('theme-dark') ? 'light' : 'dark';
  applyTheme(nextTheme === 'dark');

  try {
    localStorage.setItem(themeStorageKey, nextTheme);
  } catch {
    // The theme still works for this page when storage is unavailable.
  }
}, true);

themePreference.addEventListener('change', event => {
  if (!readThemePreference()) applyTheme(event.matches);
});
