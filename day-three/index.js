const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // this = the input element

  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${suffix}`
  );
}

inputs.forEach((i) => {
  i.addEventListener('change', handleUpdate);
  i.addEventListener('mousemove', handleUpdate);
});
