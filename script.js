 function showTab(tabId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
      if (section.id === tabId) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }
/*
let submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', function() {
  console.log(alert`submited`);
});

let whatsappIcon = document.querySelector('#whatsapp-icon');
whatsappIcon.addEventListener('click', function() {
  window.open('https://wa.me/whatsappphonenumber', '_blank');
});

let facebookIcon = document.querySelector('#facebook-icon');
facebookIcon.addEventListener('click',function (){
  window.open('https://www.facebook.com/Alexi Alex"_blank"')
});


let twitterIcon = document.querySelector('#twitter');
twitterIcon.addEventListener('click',function(){
  window.open('https://twitter.com/@AlexiGikun71556 "_blank"')

})
*/














