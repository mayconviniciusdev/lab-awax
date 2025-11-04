 const teamMembers = [
  {
    name: "Maycon Vinícius",
    role: "Backend Engineer",
    image: "media/mayconvinicius.jpg",
    social: {
      instagram: "https://www.instagram.com/mayconviniciusrosa/",
      facebook: "https://www.facebook.com/mayconviniciusrosa/",
      linkedin: "https://www.linkedin.com/in/mayconviniciusdev/",
      twitter: "https://x.com/dmayconvinicius"
    }
  },

  {
    name: "Maycon Vinícius",
    role: "Web Designer",
    image: "media/mayconvinicius.jpg",
    social: {
      instagram: "https://www.instagram.com/joaopedro/",
      facebook: "https://www.facebook.com/joaopedro/",
      linkedin: "https://www.linkedin.com/in/joaopedro/",
      twitter: "https://x.com/joaopedro"
    }
  },

  {
    name: "Maycon Vinícius",
    role: "QA Engineer",
    image: "media/mayconvinicius.jpg",
    social: {
      instagram: "https://www.instagram.com/joaopedro/",
      facebook: "https://www.facebook.com/joaopedro/",
      linkedin: "https://www.linkedin.com/in/joaopedro/",
      twitter: "https://x.com/joaopedro"
    }
  },

  {
    name: "Maycon Vinícius",
    role: "Full Stack Developer",
    image: "media/mayconvinicius.jpg",
    social: {
      instagram: "https://www.instagram.com/joaopedro/",
      facebook: "https://www.facebook.com/joaopedro/",
      linkedin: "https://www.linkedin.com/in/joaopedro/",
      twitter: "https://x.com/joaopedro"
    }
  },

  {
    name: "Maycon Vinícius",
    role: "IT Analyst ",
    image: "/media/mayconvinicius.jpg",
    social: {
      instagram: "https://www.instagram.com/mayconviniciusrosa/",
      facebook: "https://www.facebook.com/mayconviniciusrosa/",
      linkedin: "https://www.linkedin.com/in/mayconviniciusdev/",
      twitter: "https://x.com/dmayconvinicius"
    }
  },
];

  const teamContainer = document.getElementById("team-container");

  teamMembers.forEach(member => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");

    slide.innerHTML = `
      <img class="team-avatar" src="${member.image}" alt="Imagem de ${member.name}">
      <p class="team-name">${member.name}</p>
      <p class="team-role">${member.role}</p>
      <div class="team-social">
        <a href="${member.social.instagram}" target="_blank"><img src="/assets/images/logoInstagram.png" alt="${member.name} Instagram"></a>
        <a href="${member.social.facebook}" target="_blank"><img src="/assets/images/logoFacebook.png" alt="${member.name} Facebook"></a>
        <a href="${member.social.linkedin}" target="_blank"><img src="/assets/images/logoLinkedin.png" alt="${member.name} LinkedIn"></a>
        <a href="${member.social.twitter}" target="_blank"><img src="/assets/images/logoTwitter.png" alt="${member.name} Twitter"></a>
      </div>
    `;

    teamContainer.appendChild(slide);
  });