const testimonialsList = [
  {
    name: "Maycon Vinícius",
    role: "IT Analyst",
    image: "media/mayconvinicius.jpg",
    quote: "Trabalhar com a AWAX foi uma experiência incrível! Eles entenderam exatamente a essência da nossa marca e entregaram um design moderno, criativo e cheio de propósito. O resultado superou todas as nossas expectativas."
  },

  {
    name: "Maycon Vinícius",
    role: "Desenvolvedor Front-End",
    image: "media/mayconvinicius.jpg",
    quote: "Trabalhar com a AWAX foi uma experiência incrível! Eles entenderam exatamente a essência da nossa marca e entregaram um design moderno, criativo e cheio de propósito. O resultado superou todas as nossas expectativas."
  },

  {
    name: "Maycon Vinícius",
    role: "QA Engineer",
    image: "media/mayconvinicius.jpg",
    quote: "Trabalhar com a AWAX foi uma experiência incrível! Eles entenderam exatamente a essência da nossa marca e entregaram um design moderno, criativo e cheio de propósito. O resultado superou todas as nossas expectativas."
  },
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