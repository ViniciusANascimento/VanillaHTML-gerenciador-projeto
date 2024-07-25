
document.getElementById('createAccountBtn').addEventListener('click', function() {
  document.querySelector('.container__main').style.display = 'none';
  document.querySelector('.container__recovery').style.display = 'none';
  document.querySelector('.container__signup').style.display = 'flex';
});

document.getElementById('backToLoginBtn').addEventListener('click', function() {
  document.querySelector('.container__signup').style.display = 'none';
  document.querySelector('.container__recovery').style.display = 'none';
  document.querySelector('.container__main').style.display = 'flex';
});

document.getElementById('backToLoginBtn2').addEventListener('click', function() {
  document.querySelector('.container__signup').style.display = 'none';
  document.querySelector('.container__recovery').style.display = 'none';
  document.querySelector('.container__main').style.display = 'flex';
});

document.getElementById('recoveryAccountBtn').addEventListener('click', function() {
  document.querySelector('.container__signup').style.display = 'none';
  document.querySelector('.container__main').style.display = 'none';
  document.querySelector('.container__recovery').style.display = 'flex';
});

