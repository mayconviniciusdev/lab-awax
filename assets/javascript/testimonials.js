const testimonialsList = [
  {
    name: "Maycon Vinícius",
    role: "Desenvolvedor Front-End",
    image: "/media/mayconvinicius.jpg",
    quote: "A AWAX transformou nossa identidade digital com um design incrível e funcional!"
  },

  {
    name: "Camila Rocha",
    role: "Gerente de Marketing",
    image: "/media/camila.jpg",
    quote: "O time é extremamente criativo e profissional. Recomendo sem dúvidas!"
  },

  {
    name: "Rafael Lima",
    role: "CEO da Startup X",
    image: "/media/rafael.jpg",
    quote: "Entrega impecável e suporte constante. Superou todas as expectativas!"
  }
];

const testimonials = document.getElementById("testimonials-wrapper");
testimonialsList.forEach(t => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide", "testimonials-info");
  slide.innerHTML =
  `<img class="testimonials-avatar" src="${t.image}" alt="${t.name}">
  <p class="testimonials-name">${t.name}</p>
  <p class="testimonials-role">${t.role}</p>
  <img class="testimonials--quoteImg" src="assets/images/quote.png" alt="quote">
  <p class="testimonials-quote">${t.quote}</p>`;

  testimonials.appendChild(slide);
});