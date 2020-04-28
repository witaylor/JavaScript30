const pressed = [];
const secretCode = 'wesbos';

window.addEventListener('keyup', e => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  let seqString = pressed.join(', ');
  document.querySelector('.key-seq').innerHTML = `[${seqString}]`;

  if (pressed.join('').includes(secretCode)) {
    document.querySelector('.completed').classList.remove('hidden');
  }
});
