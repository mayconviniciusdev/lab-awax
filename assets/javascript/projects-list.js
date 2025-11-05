document.addEventListener('DOMContentLoaded', () => {
  const projectsData = [
    { category: 'product', img: 'media/product1.png'},
    { category: 'graphic', img: 'media/graphic1.png'},
    { category: 'product', img: 'media/product5.png'},
    { category: 'graphic', img: 'media/graphic3.png'},
    { category: 'graphic', img: 'media/graphic2.png'},
    { category: 'branding', img: 'media/branding1.png'},
    { category: 'branding', img: 'media/branding2.png'},
    { category: 'product', img: 'media/product2.png'},
    { category: 'branding', img: 'media/branding3.png'},
    { category: 'product', img: 'media/product3.png'},
    { category: 'uxui', img: 'media/uxui1.png'},
    { category: 'uxui', img: 'media/uxui2.png'},
    { category: 'product', img: 'media/product4.png'},
  ];

  const filterItems = document.querySelectorAll('.projects-filters li');
  const projectsPhotos = document.getElementById('projectsPhotos');
  const seeMoreBtn = document.getElementById('seeMoreBtn');
  const modal = document.getElementById('photoModal');
  const modalImg = document.getElementById('modalImg');
  const closeModal = modal.querySelector('.close-modal');

  const max_visible = 8;
  let showingAll = false;
  let activeFilter = 'all';

  function createProjectPhoto({ category, img }) {
    const div = document.createElement('div');
    div.classList.add('projects-photo');
    div.dataset.category = category;

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('photo-field--info');

    const image = document.createElement('img');
    image.src = img;
    image.alt = category;

    div.appendChild(infoDiv);
    div.appendChild(image);
    return div;
  }

  function renderProjects(limit = max_visible) {
    projectsPhotos.innerHTML = '';

    const filtered = activeFilter === 'all' ? projectsData : projectsData.filter(p => p.category === activeFilter);
    const visibleProjects = filtered.slice(0, limit);
    visibleProjects.forEach(project => projectsPhotos.appendChild(createProjectPhoto(project)));

    if (filtered.length <= max_visible && !showingAll) seeMoreBtn.style.display = 'none';
    else {seeMoreBtn.style.display = 'block';}
  }

  function toggleProjects() {
    showingAll = !showingAll;

    if (showingAll) 
    {renderProjects(projectsData.length);
    seeMoreBtn.textContent = 'VER MENOS';} 
    
    else 
    {renderProjects(max_visible);
    seeMoreBtn.textContent = 'VER MAIS';
    document.getElementById('projects').scrollIntoView({behavior: 'smooth'});}
  }

  seeMoreBtn.addEventListener('click', toggleProjects);

  filterItems.forEach(li => {
    li.addEventListener('click', () => {
      filterItems.forEach(item => item.classList.remove('active'));
      li.classList.add('active');
      activeFilter = li.dataset.filter;
      showingAll = false;
      seeMoreBtn.textContent = 'VER MAIS';
      renderProjects();
    });
  });

  projectsPhotos.addEventListener('click', (e) => {
    const clickedImg = e.target.closest('.projects-photo img');
    if (clickedImg) 
    {modal.style.display = 'flex';
    modalImg.src = clickedImg.src;}
  });

  closeModal.addEventListener('click', () => {modal.style.display = 'none';});
  modal.addEventListener('click', (e) => {if (e.target === modal) modal.style.display = 'none';});

  renderProjects();
});