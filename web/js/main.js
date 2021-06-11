const button = document.getElementById('btn');

button.addEventListener('click', function() {
  const inputName = prompt('Masukan nama anda: ');

  if (!inputName) {
    return alert('Masukan nama anda !');
  } else {
    alert(`Halo ${inputName}, Selamat Datang di Web Yelly!`);
  }
});

const styleText = [
  'font-size: 24px',
  'font-weight: 700',
  'color: red',
  'padding: 1rem 0',
].join(';');

const styleImage = [
  'font-size: 20px',
  'padding: 1.6rem 0',
  'background: url("data:image/png;base64,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");'
].join(';');

console.log('%c Hayo Mau Ngapain?', styleText);
console.log('%c      ', styleImage);
