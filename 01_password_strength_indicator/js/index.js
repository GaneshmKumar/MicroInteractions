var hidden = true;
var passwordField = document.querySelector('#password_field'),
    strengthIndicator = document.querySelector('#strength_indicator'),
    passwordToggle = document.querySelector('#password-toggle'),
    smile = document.querySelector('#smile'),
    frown = document.querySelector('#frown'),
      meh = document.querySelector('#meh');

var passwordToggle = document.querySelector('#password-toggle');

function toggle() {
  hidden = !hidden;
  if(hidden) {
    passwordField.setAttribute('type', 'password');
    passwordToggle.classList.remove('enable');
    passwordToggle.classList.add('disable');
  }
  else {
    passwordField.setAttribute('type', 'text');
    passwordToggle.classList.remove('disable');
    passwordToggle.classList.add('enable');
  }
}

function scorePassword(pass) {
    var score = 0;
    if (!pass)
        return score;

    // award every unique letter until 5 repetitions
    var letters = new Object();
    for (var i=0; i<pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    var variations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass),
    }

    variationCount = 0;
    for (var check in variations) {
        variationCount += (variations[check] == true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;

    return parseInt(score);
}

passwordField.addEventListener('keyup', function(e){
  var score = scorePassword(e.target.value)
  if(score >=0 && score <=40) {
   strengthIndicator.removeAttribute("class");                      
   strengthIndicator.classList.add("weak");
   document.querySelector('.show').classList.remove('show');
   document.querySelector('#frown').classList.add("show");
  }
  else if(score > 40 && score <=70) {
    strengthIndicator.removeAttribute("class");                   
    strengthIndicator.classList.add("medium");
    document.querySelector('.show').classList.remove('show');
    document.querySelector('#meh').classList.add("show");
  }
  else {
  
    strengthIndicator.removeAttribute("class");             
    strengthIndicator.classList.add("strong");
    document.querySelector('.show').classList.remove('show');
    document.querySelector('#smile').classList.add("show");
  }
});