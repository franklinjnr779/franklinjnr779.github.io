document.querySelectorAll('.icon-wrap').forEach(iconWrap => {
  const input = iconWrap.closest('.nio').querySelector('.password');
  if (!input) return; // skip non-password fields

  const eye = iconWrap.querySelector('.eye');
  const eyeSlash = iconWrap.querySelector('.eye-slash');

  // Default: hide password, show slashed icon
  eye.style.display = 'none';
  eyeSlash.style.display = 'block';

  iconWrap.addEventListener('click', () => {
    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    eye.style.display = isHidden ? 'block' : 'none';
    eyeSlash.style.display = isHidden ? 'none' : 'block';
  });
});