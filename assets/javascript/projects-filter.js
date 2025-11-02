 const filterButtons = document.querySelectorAll('.projects-filters li');
  const projects = document.querySelectorAll('.projects-photo');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // remove "active" de todos
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      projects.forEach(project => {
        const category = project.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });