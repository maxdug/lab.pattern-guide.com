document.getElementById('wordgate-form').addEventListener('submit', function checkPassword(e) {

  e.preventDefault();

  if (document.getElementById('lab-input')

  && document.getElementById('lab-input').value == 'letmein') window.location.href = '/library.html';

});
