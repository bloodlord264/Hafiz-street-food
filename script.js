function sendOrder(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const orderText = document.getElementById('orderText').value;

  const message = `Hello Hafiz Street Food!%0A
Name: ${name}%0A
Phone: ${phone}%0A
Address: ${address}%0A
Order: ${orderText}`;

  window.open(`https://wa.me/923354224865?text=${message}`, '_blank');
}


// SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 2500);