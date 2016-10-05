var clickme = document.getElementById('clickme');

   clickme.addEventListener('click', function(e) {
       e.target.innerHTML = 'Vous avez cliqué !';
   });
