    // Jab pura page load ho jaye
    window.onload = function() {
      let preloader = document.getElementById('preloader');
      let content = document.querySelector('.content');

      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
        content.style.display = "block";
      }, 500);
    };
let item = document.getElementById('item');
let Pitem = document.getElementById('Pitem');
let Pitem1 = document.getElementById('Pitem-ul');
let closee = document.getElementById('closee');



function list() {

    Pitem1.style.visibility = 'visible';
    Pitem1.style.opacity = '1';

}
function close1() {

    Pitem1.style.visibility = 'hidden';
    Pitem1.style.opacity = '0';

}

window.addEventListener('scroll', () => {
    item.classList.toggle
        ('nav', window.scrollY > 0)
});

window.addEventListener('scroll', () => {
    Pitem.classList.toggle
        ('Pnav', window.scrollY > 0)
});



function connectWhatsApp() {
    const phoneNumber = "+923130576364"; // Replace with your number
    const message = "Hello! I'd like to connect with you."; // Optional predefined message
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

function connectGmail() {
    const email = "123mtalha789@gmail.com"; // Replace with your Gmail address
    const subject = "Hello! I am here to help you"; // Optional subject
    const body = "I'd like to connect with you."; // Optional message body
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
}