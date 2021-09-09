let qte = document.querySelectorAll('.quant');

let plus = Array.from(document.getElementsByClassName('fa fa-plus'));
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener('click', function (e) {
      e.preventDefault()
    //   console.log(plus[i].previousElementSibling)
    qte[i].innerText++;
    
    totalPrice();
  });
}


let minus = document.getElementsByClassName('fa fa-minus');
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener('click', function (e) {
    e.preventDefault()
    if (qte[i].innerText > 0) {
        qte[i].innerText--;
    }
    
    totalPrice();
  });
}


function totalPrice() {
  let price = document.querySelectorAll('.price');
  let quantity = document.querySelectorAll('.quant');
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum += price[i].innerHTML * quantity[i].innerHTML;
  }
  document.querySelector('.prixtotal').innerHTML = sum;
}


let x = Array.from(document.querySelectorAll('.fa-trash-o'));

x.forEach((el) =>
  el.addEventListener('click', function (e) {
    e.preventDefault()
    el.parentElement.parentElement.remove();
    totalPrice();
  })
);

let like = document.querySelectorAll('.fa-heart');
for (let i = 0; i < like.length; i++) {
  like[i].addEventListener('click', function (e) {
    e.preventDefault()
    if (like[i].style.color === 'black') {
      like[i].style.color = 'red';
    } else {
      like[i].style.color = 'black';
    }
  });
}
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}