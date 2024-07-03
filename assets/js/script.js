// Formulir Newsletter
const form = document.querySelector('#newsletter form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah reload halaman

  const emailInput = document.querySelector('#newsletter input[type="email"]');
  const email = emailInput.value.trim();

  if (!email || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    alert('Masukkan alamat email yang valid');
    return;
  }

  alert('Terima kasih telah berlangganan newsletter!');
  emailInput.value = ''; // Kosongkan input email
});
